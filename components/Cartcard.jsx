"use client"
import { Button } from "@nextui-org/react"
import useItems from "@/libs/store"
import Image from "next/image"
import Link from "next/link"
export default function Cartcard(props) {
  const additems = useItems((state) => state.addItems)
  const deleteItem = useItems((state) => state.deleteItem)
  const cartItems = useItems((state) => state.cartItems)
  const increaseQuantity = useItems((state) => state.increaseQuantity)
  const decreaseQuantity = useItems((state) => state.decreaseQuantity)
  return (
    <div className="flex w-fit p-2 border rounded-md text-sm">
      <div className=" w-44">
        <Link href={`/${props.id}`}>
          <Image
            className="rounded-sm"
            src={props.img}
            width={500}
            height={500}
            alt="shirt-image"
          ></Image>
        </Link>
      </div>
      <div className="flex flex-col mx-4 gap-4">
        <p className="uppercase font-bold tracking-widest">kapde</p>
        <p className="w-full">{props.title}</p>
        <p className="">Subtotal: ₹ {props.price * props.quantity}</p>
        <p className="text-sm">Size: {props.size}</p>

        <div className="w-fit flex bg-gray-50 border rounded-md text-sm">
          <Button
            onClick={() => {
              if (props.quantity === 1) {
                let index = 0
                for (let i = 0; i < cartItems.length; i++) {
                  if (
                    cartItems[i].id === props.id &&
                    cartItems[i].size === props.size
                  ) {
                    index = i
                  }
                }
                deleteItem(index)
              } else {
                decreaseQuantity(props.id, props.size)
              }
            }}
            className="p-2 px-3 text-center"
          >
            -
          </Button>
          <p className="p-2 px-3">{props.quantity}</p>
          <Button
            onClick={() => {
              increaseQuantity(props.id, props.size)
            }}
            className="p-2 px-3"
          >
            +
          </Button>
        </div>
        <Button
          onClick={() => {
            let index = 0
            for (let i = 0; i < cartItems.length; i++) {
              if (
                cartItems[i].id === props.id &&
                cartItems[i].size === props.size
              ) {
                index = i
              }
            }
            deleteItem(index)
          }}
          className=" py-2 bg-gray-600 hover:bg-gray-800 rounded-md text-white text-sm"
        >
          Remove
        </Button>
        <p className=" text-xs  text-slate-500 ">14 days return available</p>
      </div>
    </div>
  )
}
