"use client"
import Cartcard from "@/components/Cartcard"
import useItems from "@/libs/store"
import { Button } from "@nextui-org/react"
import Link from "next/link"
export default function Cart() {
  const cartItems = useItems((state) => state.cartItems)
  let total = 0
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price * cartItems[i].quantity
  }
  return (
    <>
      <div className="pt-6 pb-24">
        <div className="grid grid-cols-2 w-fit mx-auto gap-4">
          {cartItems.map((itm) => {
            return (
              <Cartcard
                id={itm.id}
                title={itm.title}
                price={itm.price}
                img={itm.img}
                category={itm.category}
                gender={itm.gender}
                quantity={itm.quantity}
                size={itm.size}
              />
            )
          })}
        </div>
      </div>
      <div className=" bg-black w-full h-20 fixed bottom-0  text-center grid grid-cols-3 text-white">
        <Link className="m-auto  bg-gray-50 text-black rounded-md w-1/2 p-3 " href={"/"}>
            Back To Shopping
        </Link>

        <p className="m-auto">
          Grand Total {":"} {total} INR
        </p>
        <Button className=" bg-gray-50 text-black rounded-md w-1/2 m-auto p-3 ">
          Checkout
        </Button>
      </div>
    </>
  )
}
