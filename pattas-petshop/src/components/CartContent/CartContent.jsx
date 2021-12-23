import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext/CartContext";

function CartContent() {

    const {cartList, vaciarCarrito}= useContext(CartContext);

    return (
    <div>
        {cartList.map(prod=> <li>{prod.name}{prod.categoria}</li>) }
        <Link to="/"><button>Volver al Home</button></Link><button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>)
    
}

export default CartContent;