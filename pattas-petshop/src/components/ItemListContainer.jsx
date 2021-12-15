import React, { useEffect, useState } from 'react';
import { getFetch } from '../helpers/getFetch';
import ItemList from './ItemList/ItemList';

function ItemListContainer( {greetings} ){

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    //const { idCate } = useParams() 
    
    
    useEffect(() => {
        /*if (idCate) {
            getFetch
            .then(resp => setProductos(resp.filter(prod => prod.categoria === idCate))) 
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))            
        } else {*/
            getFetch
            .then(resp => setProductos(resp)) 
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))               
        
    }, [])  
    
    //console.log(idCate)


    return (
        <div>
            {greetings}
            { loading 
              ? 
                <h2>Cargando...</h2> 
              :  
               <ItemList productos={productos} />
            }

        </div>
    );
}

export default ItemListContainer;