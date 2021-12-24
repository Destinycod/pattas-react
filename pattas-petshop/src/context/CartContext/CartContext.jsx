import { createContext, useState, useContext } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

function CartContextProvider( {children} ){

    const [cartList, setCartList] = useState([])

    function AddItem(item) {
        const index=cartList.findIndex(i=> i.id === item.id)
        if(index > -1){
            const oldQuantity=cartList[index].cantidad
            cartList.splice(index,1)
            setCartList([...cartList, {item, cantidad:item.cantidad + oldQuantity}])
        }
        else{
            setCartList([...cartList, item]);
        }
        
    }

    function vaciarCarrito(){
        setCartList([]);
    }

    function removeItem(itemID){
        const index=cartList.findIndex(i=> i.id === item.id)
        if(index > -1){
        }
        else{
            setCartList([...cartList, item]);
        }
    }

    return(
        <CartContext.Provider value={ {
            cartList,
            AddItem,
            vaciarCarrito,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;