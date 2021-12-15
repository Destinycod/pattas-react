import React, { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList';
import ItemDetail from './ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);

    return <ItemDetail item = {item} />
}

function ItemDetailContainer(){
    const [productos, setProductos] = useState([])

    const getItem = () => {

    }

    useEffect(() => {
            getFetch
            .then(resp => setProductos(resp)) 
            .catch(err => console.log(err))            
    }, [])  


    return (
        <div>
            {<ItemList productos={productos} />}
        </div>
    );
}

export default ItemDetailContainer;