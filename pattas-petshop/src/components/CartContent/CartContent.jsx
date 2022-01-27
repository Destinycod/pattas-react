import { Link } from "react-router-dom";
import { Button, Container, ListGroup, Table } from "react-bootstrap";
import { useState } from "react";
import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore";
import './CartContent.css';
import Checkout from "../CheckoutForm/Checkout";
import { useCartContext } from "../../context/CartContext/CartContext";
import useFormatNumber from "../../helpers/useFormatNumber";

function CartContent() {
    const [idOrder, setIdOrder]=useState('')
    const {cartList, vaciarCarrito, removeItem, totalPrice, dataForm, setDataForm}= useCartContext();
    const { formatNumber } = useFormatNumber();

    // const [order, setOrder] = useState({
    //     date: new Date(),
    //     items: cartList.map((item) => ({
    //       id: item.id,
    //       title: item.name,
    //       quantity: item.quantity,
    //       price: item.price * item.quantity,
    //     })),
    //     status: "Generada, pendiente de envío",
    //     //quantity: cartList.reduce((acc, item) => acc + item.quantity, 0),
    //     total: totalPrice(),
    //   });


    //   const createOrder = (e) => {
    //     e.preventDefault();
    //     const db = getFirestore();
    //     const orderCollection = collection(db, "orders");
        
    //       try {
    //         const response = addDoc(orderCollection, order);
    //         setIdOrder(response.id);
    //         // if (response.id) {
    //         //   toast(`Su orden ${response.id} fue generada exitosamente`, {
    //         //     position: "top-center",
    //         //     autoClose: false,
    //         //     hideProgressBar: false,
    //         //     closeOnClick: false,
    //         //     pauseOnHover: true,
    //         //     draggable: true,
    //         //     progress: true,
    //         //     closeButton: false,
    //         //   });
    //         // }
    //       } finally {
    //         borrarCarrito();
    //       }
    //     }





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

    
    const generateOrder = (event) =>{
        event.preventDefault();

        let order={}

        order.buyer=dataForm;
        order.total=totalPrice();
        order.items=cartList.map(cartItems=>{
            const id=cartItems.id;
            const name=cartItems.name;
            const quantity=cartItems.quantity;
            const price=cartItems.price * cartItems.quantity;
            return {id,name,quantity,price}
        });
        order.date=Timestamp.fromDate(new Date());

        const dataBase=getFirestore()
        const orderCollection=collection(dataBase,'orders')

        addDoc(orderCollection,order) //agrega la orden y crea la collección "orders" si no existe en la base de datos
        .then(answer => setIdOrder(answer.id))
        .finally(()=> {   
            setDataForm({
                name:"", email:"", emailConfirm: ""
            })
            vaciarCarrito()
        })

        const cleccionNoti = collection(db, 'items')
        const queryActulizarStock = query(
            cleccionNoti, where( documentId() , 'in', cartList.map(it => it.id))          
        )

        const batch = writeBatch(db)

        getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: resp.data().stock - cartList.find(item => item.id === resp.id).cantidad
        }) ))

        batch.commit()

    }

    //const handleChange = (e) => {setIdOrder({...order, [e.target.name]: e.target.value,})};
    const handleChange = (e) => {
      setDataForm({
          ...dataForm,
          [e.target.name]: e.target.value
      })
  }
    
    if(idOrder){
      return(
        <Container className="container--order">
                <h2>Compra realizada con éxito</h2>
                <p>Tu número de orden es: <strong>{idOrder}</strong>.</p>
                <Button>
                    Ir a tienda
                </Button>
            </Container>
      )
    }

    return (
      <>
          {cartList.length === 0 ? (
              <Container>
                  <h3>Aún no agregaste productos al carrito</h3>
                  <Link to="/"><Button>
                      Ir a tienda
                  </Button></Link>
              </Container>
          ) : (
              <Container>
                  <div>
                      <h3>Resumen compra:</h3>
                      <Table striped bordered hover>
                          <thead>
                              <tr>
                                  <th>Nombre</th>
                                  <th>Cantidad</th>
                                  <th>Precio por unidad</th>
                              </tr>
                          </thead>
                          <tbody>
                              {cartList.map(product =>
                                  <tr key={product.id}>
                                      <td>{product.name}</td>
                                      <td>x{product.quantity}</td>
                                      <td>{formatNumber(product.price)}</td>
                                  </tr>)}
                          </tbody>
                      </Table>
                      {/* Total compra */}
                      <p>Total de la compra: {formatNumber(totalPrice())}</p>
                  </div>

                  {/* Formulario finalizar compra */}
                  <h3 style={{fontSize: 30}}>Completar los siguientes datos:</h3>
                  <Checkout change={handleChange} send={generateOrder} />
              </Container>
          )}
      </>
  )

    // return (
    //     <div className="carrito">
    //         <h2>Carrito de Compras</h2>
    //         {cartList > 0 ? ( <CheckoutForm order={order} createOrder={createOrder} handleChange={handleChange}/>
    //         ):
    //         (
    //             <div className="order">
    //               {idOrder ? (<CheckoutSuccess orderId={idOrder} order={order}/>)
    //               :
    //               (<Link to="/">Volver a la tienda</Link>)}
    //             </div>
    //           )}


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
        
    //)
    
}

export default CartContent;
