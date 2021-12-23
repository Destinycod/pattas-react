import { createContext, useState } from "react";

export const CartContext = createContext([])

function CartContextProvider( {children} ){

    const [cartList, setCartList] = useState([])

    function AddCart(item) {
        setCartList([...cartList, item]);
    }

    function vaciarCarrito(){
        setCartList([]);
    }

    return(
        <CartContext.Provider value={ {
            cartList,
            AddCart,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;