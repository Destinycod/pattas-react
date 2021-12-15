import React from 'react';

const ItemDetail = (props) => {
    const { name, img, descripcion, precio } = props.item;

    return (
        <div>
            <h2>Item Detail</h2>
            <h3>{name}</h3>
            <img src={`${img}`} alt=" " />
            <p>{descripcion}</p>
            <h3>{precio}</h3>
        </div>
        /*<div className="card w-100 mt-5" >
            <div className="card-header">
                {`${titulo}`}
            </div>
            <div className="card-body">
                <img src={`${imagen}`} alt='' className='w-50' />
                <p>{descripcion}</p>
                <h3>{precio}</h3>                                                        
            </div>
        </div>*/
    );
}

export default ItemDetail;