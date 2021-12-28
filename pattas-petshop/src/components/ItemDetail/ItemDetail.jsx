import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import { useCartContext } from '../../context/CartContext/CartContext';


const ItemDetail = ( { product, onAdd } ) => {

    const [irCarrito, setIrCarrito] = useState(false);

    const {AddItem}= useCartContext()

    onAdd = (quantityToAdd) => {
        console.log(quantityToAdd)
        AddItem({...product, quantity:quantityToAdd})
        setIrCarrito(true);
    }

    return (
        <div>
            <h2>Item Detail</h2>
            <h3>{`${product.name}`}</h3>
            <img src={`${product.img}`} alt=" " />
            <p>{`${product.category}`}</p>
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