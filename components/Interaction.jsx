"use client"
import { Button } from "@nextui-org/react"
import { useState } from "react"
export default function Interaction() {
  const [sizeSelected, setSizeSelected] = useState("")
  const [qty, setQty] = useState(1)
  return (
    <div>
      <p className="mb-2">Size:</p>
      <div className="grid grid-cols-5 gap-2 mb-2 text-sm">
        <Button
          onClick={() => {
            setSizeSelected("S")
          }}
          className={
            sizeSelected === "S"
              ? "bg-black text-white p-4 rounded-md"
              : "bg-gray-50 p-4 rounded-md border"
          }
        >
          S
        </Button>
        <Button
          onClick={() => {
            setSizeSelected("M")
          }}
          className={
            sizeSelected === "M"
              ? "bg-black text-white p-4 rounded-md"
              : "bg-gray-50 p-4 rounded-md border"
          }
        >
          M
        </Button>
        <Button
          onClick={() => {
            setSizeSelected("L")
          }}
          className={
            sizeSelected === "L"
              ? "bg-black text-white p-4 rounded-md"
              : "bg-gray-50 p-4 rounded-md border"
          }
        >
          L
        </Button>
        <Button
          onClick={() => {
            setSizeSelected("XL")
          }}
          className={
            sizeSelected === "XL"
              ? "bg-black text-white p-4 rounded-md"
              : "bg-gray-50 p-4 rounded-md border"
          }
        >
          XL
        </Button>
        <Button
          onClick={() => {
            setSizeSelected("XXL")
          }}
          className={
            sizeSelected === "XXL"
              ? "bg-black text-white p-4 rounded-md"
              : "bg-gray-50 p-4 rounded-md border"
          }
        >
          XXL
        </Button>
      </div>
      <p className="mb-2">Quantity:</p>
      <div className="flex mb-6 text-sm">
        <Button
          onClick={() => {
            setQty((prev) => {
              if (prev === 1) {
                return prev
              } else {
                return prev - 1
              }
            })
          }}
          className="p-4 px-6  bg-gray-50 rounded-l-md border-l border-t border-b"
        >
          -
        </Button>
        <p className="p-4  bg-gray-50 border-t border-b">{qty}</p>
        <Button
          onClick={() => {
            setQty((prev) => {
              if (prev === 10) {
                return prev
              } else {
                return prev + 1
              }
            })
          }}
          className="p-4 px-6  bg-gray-50 rounded-r-md border-r border-t border-b"
        >
          +
        </Button>
      </div>
      <div className=" flex flex-col gap-4">
        <Button className=" text-center text-sm py-4 bg-gray-50 border rounded-md tracking-widest ">
          ADD TO CART
        </Button>
        <Button className="text-center text-sm py-4 bg-black text-white rounded-md tracking-widest">
          BUY NOW
        </Button>
      </div>
    </div>
  )
}
