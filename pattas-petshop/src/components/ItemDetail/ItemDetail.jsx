import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext/CartContext';


const ItemDetail = ( { product } ) => {

    const [irCarrito, setIrCarrito] = useState(false);

    const {cartList, AddCart}= useContext(CartContext)

    const onAdd = (quantityToAdd) => {
        console.log(quantityToAdd)
        setIrCarrito(true);
        AddCart({...product, cantidad:quantityToAdd})
    }

    return (
        <div>
            <h2>Item Detail</h2>
            <h3>{`${product.name}`}</h3>
            <img src={`${product.img}`} alt=" " />
            <p>{`${product.categoria}`}</p>
            {!irCarrito 
            ?
                (<ItemCount stock={5} onAdd={onAdd}/>)
            :
                (<Link to="/carrito"> Ir al Carrito </Link>)
            }
            
        </div>
    )
}

export default ItemDetail;