import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/CartContext";

function CartContent() {

    const {cartList, vaciarCarrito, removeItem}= useCartContext()

    return (
    <div>
        {cartList.map(prod=> <li>{prod.name}{prod.categoria}</li>) } <button onClick={removeItem}>Eliminar</button>
        <Link to="/"><button>Volver al Home</button></Link><button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>)
    
}

export default CartContent;