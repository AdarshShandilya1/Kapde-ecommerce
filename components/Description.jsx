"use client"
import { useState } from "react"
import { Button } from "@nextui-org/react"

export default function Description() {
  const [des, setDes] = useState(
    "Over shirts are designed to be worn over other clothing items, such as t-shirts or tanks. They are made from thicker, more durable materials which makes them ideal for layering. Additionally, they can add a touch of style and personality to an outfit, allowing the wearer to express their individuality."
  )
  const [desButton, setDesButton] = useState(true)
  const [careButton, setCareButton] = useState(false)
  return (
    <div className="mt-6 w-full text-sm">
      <Button
        onClick={() => {
          setCareButton(false)
          setDesButton(true)
          setDes(
            "Over shirts are designed to be worn over other clothing items, such as t-shirts or tanks. They are made from thicker, more durable materials which makes them ideal for layering. Additionally, they can add a touch of style and personality to an outfit, allowing the wearer to express their individuality."
          )
        }}
        className={
          desButton
            ? "py-4 px-10 rounded-md bg-black text-white mr-6 tracking-widest"
            : "py-4 px-10 rounded-md bg-gray-50 border mr-6 tracking-widest"
        }
      >
        DESCRIPTION
      </Button>
      <Button
        onClick={() => {
          setDesButton(false)
          setCareButton(true)

          setDes(
            "Turn me upside down and wash me in nice cool water, please! 30’C is my favourite temperature. I also don't get along with bleach and my print can’t handle hot irons, so please keep those away from me. Thank you!Please take care of me so we can spend a long time together."
          )
        }}
        className={
          careButton
            ? "py-4 px-10 rounded-md bg-black text-white mr-6 tracking-widest"
            : "py-4 px-10 rounded-md bg-gray-50 border mr-6 tracking-widest"
        }
      >
        PRODUCT CARE
      </Button>
      <hr className="mt-4" />
      <p className="mt-4 text-base">{des}</p>
    </div>
  )
}
