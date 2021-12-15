import React, { useEffect, useState } from 'react';
import getProduct from '../../helpers/getProduct';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        getProduct
        .then(resp => setItem(resp))           
    }, []);

    return(
    <div>
        <ItemDetail item = {item} />;
    </div>);
}

export default ItemDetailContainer;