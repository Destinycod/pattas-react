import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext/CartContext";

function CartContent() {

    const {cartList, vaciarCarrito, removeItem, totalCart}= useCartContext()

    return (
        <div>
                {cartList.map (product => 
                <ListGroup horizontal="lg" className="my-2" key={product.id} >
                    <ListGroup.Item>{product.name}</ListGroup.Item>
                    <ListGroup.Item>{product.category}</ListGroup.Item>
                    <ListGroup.Item>{product.valor}</ListGroup.Item>
                    <ListGroup.Item>{product.price}</ListGroup.Item>
                    {/* <ListGroup.Item> <button onClick={removeItem(product)}>Eliminar</button> </ListGroup.Item> */}
                </ListGroup>)}
                <Link to="/"><button>Volver al Home</button></Link><button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
        // <div>
        //     {cartList.map(prod=> <li>{prod.name}{prod.categoria} <button onClick={removeItem(prod)}>Eliminar</button></li>) } 
        //     <Link to="/"><button>Volver al Home</button></Link><button onClick={vaciarCarrito}>Vaciar carrito</button>
        // </div>
    )
    
}

export default CartContent;