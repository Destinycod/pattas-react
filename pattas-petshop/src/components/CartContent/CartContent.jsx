import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext/CartContext";
import { useState } from "react";
import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore";

function CartContent() {
    const [idOrder, setIdOrder]=useState('')
    const [dataForm, setDataForm] = useState({
        name:"", email:"", phone:""
    })

    const {cartList, vaciarCarrito, removeItem, totalPrice}= useCartContext()

    const handleChange = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }
    console.log(dataForm)


    const generateOrder = (event) =>{
        event.preventDefault();

        let order={}

        order.buyer=dataForm;
        order.total=totalPrice();
        order.items=cartList.map(cartItems=>{
            const id=cartItems.id;
            const name=cartItems.name;
            const price=cartItems.price * cartItems.quantity;
            return {id,name,price}
        });
        order.date=Timestamp.fromDate(new Date());

        const dataBase=getFirestore()
        const orderCollection=collection(dataBase,'orders')

        addDoc(orderCollection,order) //agrega la orden y crea la collección "orders" si no existe en la base de datos
        .then(answer => setIdOrder(answer.id))
        .finally(()=> {
            borrarCarrito()
            setDataForm({
                name:"", email:"", phone:""
            })
        })

        const cleccionNoti = collection(db, 'items')
        const queryActulizarStock = query(
            cleccionNoti, where( documentId() , 'in', cartList.map(it => it.id))          
        )

        const batch = writeBatch(db)

       
        //console.log(queryActulizar)
        getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: resp.data().stock - cartList.find(item => item.id === resp.id).cantidad
        }) ))

        batch.commit()

    }

    // const generarOrden = (e) =>{
    //     e.preventDefault()  
        
    //     // Nuevo objeto de orders    
    //     let orden = {}
    //     orden.date = Timestamp.fromDate(new Date())
    //     //firebase.firestore.Timestamp.fromDate(new Date()); 

    //     orden.buyer = dataForm
    //     orden.total = totalPrice();

    //     orden.items = cartList.map(cartItem => {
    //         const id = cartItem.id;
    //         const nombre = cartItem.name;
    //         const precio = cartItem.price * cartItem.quantity;
            
    //         return {id, nombre, precio}   
    //     })

    //     // Generar la orden 
    //     const db = getFirestore()
    //     const ordenColeccion = collection(db, 'orders')
    //     addDoc(ordenColeccion, orden)
    //     .then(resp => setIdOrder(resp.id))
    //     .catch(err => console.log(err))
        
    // }

    return (
        <div className="carrito">
            <h2>Carrito de Compras</h2>
            {cartList < 1 ? (
            <>
            <span>No hay productos en el carrito</span><br/>
            <Link to="/">Volver al Home</Link>
            </>
            ) : (
            <div>
                {/* {idOrder.length !==0 && idOrder} */}
                {cartList.map (product => 
                    <ListGroup horizontal="lg" className="my-2" key={product.id} >
                        <ListGroup.Item>{product.name}</ListGroup.Item>
                        <ListGroup.Item>{product.category}</ListGroup.Item>
                        <ListGroup.Item>{product.quantity}</ListGroup.Item>
                        <ListGroup.Item>{product.price}</ListGroup.Item>
                        <ListGroup.Item><button onClick={()=>removeItem(product)}>Eliminar</button> </ListGroup.Item> 
                    </ListGroup>)}
                <p>Total: ${totalPrice()}</p>
                <form 
                onSubmit={generateOrder}
                onChange={handleChange} 
                >
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='name' 
                        value={dataForm.name}
                    /><br />
                    <input 
                        type='text' 
                        name='phone'
                        placeholder='tel' 
                        value={dataForm.phone}
                    /><br/>
                    <input 
                        type='email' 
                        name='email'
                        placeholder='email' 
                        value={dataForm.email}
                    /><br/>
                    <button>Confirmar compra</button>&nbsp;<button onClick={vaciarCarrito}>Vaciar carrito</button>
                </form>
                
                <Link to="/"><button>Volver al Home</button></Link>
            </div>)
            }
        </div>
    )
    
}

export default CartContent;