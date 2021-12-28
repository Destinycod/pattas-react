import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext/CartContext";

function CartContent() {

    const {cartList, vaciarCarrito, removeItem, totalPrice}= useCartContext()

    return (
        <>
            <h2>Carrito de Compras</h2>
            {cartList < 1 ? (
            <>
            <span>No hay productos en el carrito</span><br/>
            <Link to="/">Volver al Home</Link>
            </>
            ) : (
            <div>
                {cartList.map (product => 
                    <ListGroup horizontal="lg" className="my-2" key={product.id} >
                        <ListGroup.Item>{product.name}</ListGroup.Item>
                        <ListGroup.Item>{product.category}</ListGroup.Item>
                        <ListGroup.Item>{product.quantity}</ListGroup.Item>
                        <ListGroup.Item>{product.price}</ListGroup.Item>
                        <ListGroup.Item><button onClick={()=>removeItem(product)}>Eliminar</button> </ListGroup.Item> 
                    </ListGroup>)}
                    <p>Total: ${totalPrice()}</p>
                <Link to="/"><button>Volver al Home</button></Link><button onClick={vaciarCarrito}>Vaciar carrito</button>
            </div>)
            }
        </>
    )
    
}

export default CartContent;