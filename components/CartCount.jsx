"use client"
import useItems from "@/libs/store"
export default function CartCount(){
    const cartItems = useItems((state) => state.cartItems)
    let count = 0;
    for(let i=0; i<cartItems.length; i++){
        count += cartItems[i].quantity;
    }
    return(
        <div className=" -top-1  left-4 absolute h-5 w-5 text-white text-center m-auto text-sm  rounded-full bg-black">{count}</div>
    )
}