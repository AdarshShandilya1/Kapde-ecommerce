"use client"
import { Button } from "@nextui-org/react"
export default function Interaction() {
  return (
    <div>
      <p className="mb-2">Size:</p>
      <div className="grid grid-cols-5 gap-2 mb-2 text-sm">
        <Button className="bg-gray-50 p-4 rounded-md border">S</Button>
        <Button className="bg-gray-50 p-4 rounded-md border">M</Button>
        <Button className="bg-gray-50 p-4 rounded-md border">L</Button>
        <Button className="bg-gray-50 p-4 rounded-md border">XL</Button>
        <Button className="bg-gray-50 p-4 rounded-md border">XXL</Button>
      </div>
      <p className="mb-2">Quantity:</p>
      <div className="flex mb-6 text-sm">
        <Button className="p-4 px-6  bg-gray-50 rounded-l-md border-l border-t border-b">-</Button>
        <p className="p-4  bg-gray-50 border-t border-b">1</p>
        <Button className="p-4 px-6  bg-gray-50 rounded-r-md border-r border-t border-b">+</Button>
      </div>
      <div className=" flex flex-col gap-4">
      <Button className=" text-center text-sm py-4 bg-gray-50 border rounded-md tracking-widest ">ADD TO CART</Button>
      <Button className="text-center text-sm py-4 bg-black text-white rounded-md tracking-widest">BUY NOW</Button>

      </div>
      
    </div>
  )
}
