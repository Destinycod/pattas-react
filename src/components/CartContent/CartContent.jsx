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
                                  <th></th>
                              </tr>
                          </thead>
                          <tbody class="tbody">
                              {cartList.map(product =>
                                  <tr key={product.id}>
                                      <td>{product.name}</td>
                                      <td>x{product.quantity}</td>
                                      <td>{formatNumber(product.price)}</td>
                                      <td><button id="botonNaranja" onClick={()=>removeItem(product)}>Eliminar</button></td>
                                  </tr>)}
                          </tbody>
                      </Table>
                      {/* Total compra */}
                      <p>Total de la compra: {formatNumber(totalPrice())}</p>
                      <Link to="/"><button id="botonNaranja">Volver al Home</button></Link> <button id="botonNaranja" onClick={()=>vaciarCarrito()}>Vaciar Carrito</button>
                  </div>
                <hr />
                  {/* Formulario finalizar compra */}
                  <h3>Completar los siguientes datos:</h3>
                  <Checkout change={handleChange} send={generateOrder} />
              </Container>
          )}
      </>
  )
    
}

export default CartContent;
