import getProduct from '../../helpers/getProduct';

const ItemDetail = ( { name, img, categoria } ) => {

    return (
        <div>
            <h2>Item Detail</h2>
            <h3>{`${product.name}`}</h3>
            <img src={`${product.img}`} alt=" " />
            <p>{`${product.categoria}`}</p>
        </div>
    )
}

export default ItemDetail;