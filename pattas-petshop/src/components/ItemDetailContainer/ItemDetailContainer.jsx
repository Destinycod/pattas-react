import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)
    const {idItem} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryProduct = doc(db, `products/${idItem}`);
        getDoc(queryProduct).then(resp => {
          setProduct({id: resp.id, ...resp.data()}); 
          setLoading(false);
        })
      }, [idItem]);

    return (
        <>
            {<div className='border border-3 border-secondary'>
            {loading 
              ? 
                <h2>Cargando...</h2> 
              :  
                <ItemDetail product={product} />}                     
            </div>
            }            
        </>
    )

}

export default ItemDetailContainer;