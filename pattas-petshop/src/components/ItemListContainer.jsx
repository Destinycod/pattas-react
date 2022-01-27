import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';
import LoadingImage from '../assets/images/loadingRight.png';

function ItemListContainer(){

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams() 

    useEffect(() => {
        const db = getFirestore();
        if(idCategoria) {
          const queryProducts = query(collection(db, 'products'), where('category', '==', idCategoria));
          getDocs(queryProducts)
          .then(resp => { setProductos( resp.docs.map(product => ({id: product.id, ...product.data()}))); 
          setLoading(false); })
        } else {
          const queryProducts = collection(db, 'products');
          getDocs(queryProducts)
          .then(resp => { setProductos( resp.docs.map(product => ({id: product.id, ...product.data()})) ); 
          setLoading(false); })
        }
      }, [idCategoria]);
    
    
    // useEffect(() => {
    //     if (idCategoria) {
    //         getFetch
    //         .then(resp => setProductos(resp.filter(prod => prod.category === idCategoria))) 
    //         .catch(err => console.log(err))
    //         .finally(()=>setLoading(false))            
    //     } else {
    //         getFetch
    //         .then(resp => setProductos(resp)) 
    //         .catch(err => console.log(err))
    //         .finally(()=>setLoading(false))               
    //     }
    // }, [idCategoria])


    return (
        <div className='itemContainer'>
            { loading 
              ? 
              <img className="loadingImage" src={LoadingImage}/> 
              :  
              <ItemList productos={productos} />
            }

        </div>
    );
}

export default ItemListContainer;