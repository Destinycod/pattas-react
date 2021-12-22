import React, {useState} from 'react';

const ItemCount = ( {stock, onAdd} ) => {

    const [valor, setValor] = useState(1);

    const handleSuma=() => {
        valor < stock ? setValor (prev => prev + 1) : alert ('Compra máxima');
    }

    const handleResta=() => {
        valor > 1 ? setValor (prev => prev - 1) : alert ('Compra mínima');
    }

    const aniadir=() =>{
        if (valor <= stock){
            alert(`Tu compra es de  ${valor}`)
        }
        else{
            alert('Has superado el stock');
        }
    }

    return(
        <div>
            <div>
                <h1>{valor}</h1>
                <button onClick={handleResta}>-</button>
                <button onClick={handleSuma}>+</button>
            </div>
            <div>
                <button onClick={aniadir, () => onAdd(valor)}>Agregar</button>
            </div>
        </div>
    )

}

export default ItemCount;