import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext/CartContext";
import { useState } from "react";
import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore";
import './CartContent.css';

function CartContent() {
    const [idOrder, setIdOrder]=useState('')
    const {cartList, vaciarCarrito, removeItem, totalPrice}= useCartContext()

    const [order, setOrder] = useState({
        date: new Date(),
        items: cartList.map((item) => ({
          id: item.id,
          title: item.name,
          quantity: item.quantity,
          price: item.price * item.quantity,
        })),
        status: "Generada, pendiente de envío",
        //quantity: cartList.reduce((acc, item) => acc + item.quantity, 0),
        total: totalPrice(),
      });


<<<<<<< HEAD
      const createOrder = (e) => {
        e.preventDefault();
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        
          try {
            const response = addDoc(orderCollection, order);
            setIdOrder(response.id);
            // if (response.id) {
            //   toast(`Su orden ${response.id} fue generada exitosamente`, {
            //     position: "top-center",
            //     autoClose: false,
            //     hideProgressBar: false,
            //     closeOnClick: false,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: true,
            //     closeButton: false,
            //   });
            // }
          } finally {
            borrarCarrito();
          }
        }





    // const generateOrder = (event) =>{
    //     event.preventDefault();

    //     let order={}

    //     order.buyer=dataForm;
    //     order.total=totalPrice();
    //     order.items=cartList.map(cartItems=>{
    //         const id=cartItems.id;
    //         const name=cartItems.name;
    //         const price=cartItems.price * cartItems.quantity;
    //         return {id,name,price}
    //     });
    //     order.date=Timestamp.fromDate(new Date());

    //     const dataBase=getFirestore()
    //     const orderCollection=collection(dataBase,'orders')

    //     addDoc(orderCollection,order) //agrega la orden y crea la collección "orders" si no existe en la base de datos
    //     .then(answer => setIdOrder(answer.id))
    //     .finally(()=> {
    //         borrarCarrito()
    //         setDataForm({
    //             name:"", email:"", phone:""
    //         })
    //     })

    const handleChange = (e) => {setOrder({...order, [e.target.name]: e.target.value,})};

    
=======
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

    

>>>>>>> a9b8251e82c827c0a8528fa2e2bea5355e524832

    return (
        <div className="carrito">
            <h2>Carrito de Compras</h2>
            {cartList > 0 ? ( <CheckoutForm order={order} createOrder={createOrder} handleChange={handleChange}/>
            ):
            (
                <div className="order">
                  {idOrder ? (<CheckoutSuccess orderId={idOrder} order={order}/>)
                  :
                  (<Link to="/hopepetshop/all" className="backStore">Volver a la tienda</Link>)}
                </div>
              )}


            {/* <>
            <h4><span>No hay productos en el carrito</span></h4><br/>
            <Link to="/"><button id='botonNaranja'>Volver al Home</button></Link>
            </>
            ) : (
            <div className="alingCenter">
                {idOrder.length !==0 && idOrder} 
                {cartList.map (product => 
                <div >
                    <ListGroup horizontal="lg" className="my-2" key={product.id} >
                        <ListGroup.Item>{product.name}</ListGroup.Item>
                        <ListGroup.Item>{product.category}</ListGroup.Item>
                        <ListGroup.Item>{product.quantity}</ListGroup.Item>
                        <ListGroup.Item>{product.price}</ListGroup.Item>
                        <ListGroup.Item><button onClick={()=>removeItem(product)}>Eliminar</button> </ListGroup.Item> 
                    </ListGroup>
                </div>)}
                <p>Total: ${totalPrice()}</p>
                
                
                <Link to="/"><button id="botonNaranja">Volver al Home</button></Link>
            </div>)
            } */}
        </div>
    )
    
}

export default CartContent;
