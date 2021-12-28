import React, { useEffect, useState } from 'react';
import getProduct from '../../helpers/getProduct';
import getFetch from '../../helpers/getFetch';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const {idItem} = useParams();

    useEffect(() => {
        getFetch
        .then(resp => setProduct(resp.find(product => product.id === parseInt(idItem))))
        .catch(err => console.log(err))        
    }, []);

    return (
        <>
            {<div className='border border-3 border-secondary'>
                <ItemDetail product={product} />                        
            </div>
            }            
        </>
    )

}

export default ItemDetailContainer;