import getProduct from '../../helpers/getProduct';

const ItemDetail = ( { name, img, categoria } ) => {

    return (
        <div>
            <h2>Item Detail</h2>
            <h3>{`${name}`}</h3>
            <img src={`${img}`} alt=" " />
            <p>{`${categoria}`}</p>
        </div>
    )
}

export default ItemDetail;