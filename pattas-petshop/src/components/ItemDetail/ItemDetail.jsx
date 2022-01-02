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
        <div className='itemDetail'>
            <h3>{`${product.trademark} ${product.name}`}</h3>
            <p>{`${product.category}`}</p>
            <img className="imgProducts" src={`${product.imageID}`} alt={product.name} />
            
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