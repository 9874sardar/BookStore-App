import React, {createContext, useState} from "react";
import { getBookId } from "./services/BookService.js";

export const CartContext = createContext();

export function CartProvider(props){

    const [items, setItems] = useState([]);

    function addItemToCart(id){
        const book = getBookId(id);
        setItems((prevItems) => {
            const item = prevItems.find((item) => (item.id == id));
            if(!item){
                return [...prevItems, {
                    id, 
                    qty: 1,
                    book, 
                    totalPrice: book.price
                }]
            }else{
                return prevItems.map((item) => {
                    if(item.id == id){
                        item.qty++;
                        item.totalPrice += book.price;
                    }
                    return item;
                })
            }
        })
    }

    function getItemsCount(){
        return items.reduce((sum,item) => (sum + item.qty), 0)
    }

    function getTotalPrice(){
        return items.reduce((sum, item) => (sum + item.totalPrice), 0)
    }

    return(
        <CartContext.Provider value={{items, getItemsCount, addItemToCart, getTotalPrice}}>
            {props.children}
        </CartContext.Provider>
    )

}