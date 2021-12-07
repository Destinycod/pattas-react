import React, {useState} from 'react';

const ItemCount = ( {minimo, stock, onAdd} ) => {

    const [valor, setValor] = useState(minimo);

    const handleSuma=() => {
        valor < stock ? setValor (prev => prev + 1) : alert ('Compra máxima');
    }

    const handleResta=() => {
        valor > minimo ? setValor (prev => prev - 1) : alert ('Compra mínima');
    }

    const aniadir=() =>{
        if (valor <= stock){
            alert(`Tu compra es de  ${valor}`)
        }
        else{
            alert('Has ');
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
                <button onClick={aniadir}>Agregar</button>
            </div>
        </div>
    )

}

export default ItemCount;