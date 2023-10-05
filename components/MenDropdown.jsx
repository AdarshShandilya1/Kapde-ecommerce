"use client"
import { useRouter } from "next/navigation"
import { Button } from "@nextui-org/react"
import Link from "next/link"
export default function MenDropdown() {
  const router = useRouter()
  return (
    <div className="h-fit w-52 bg-white absolute flex-col p-4 hidden mt-8 shadow-md rounded-md z-10 -left-20">

      <Button
        className="w-full text-left p-2 px-4 rounded-md hover:bg-black hover:text-white"
        onClick={() =>
          router.push("/products/men?category=tshirt",
            { shallow: true }
          )
        }
      >
        T-Shirts
      </Button>
      <Button
        className="w-full text-left p-2 px-4 rounded-md hover:bg-black hover:text-white"
        onClick={() =>
          router.push("/products/men?category=shirt",
            { shallow: true }
          )
        }
      >
        Shirts
      </Button>
      <Button
        className="w-full text-left p-2 px-4 rounded-md hover:bg-black hover:text-white"
        onClick={() =>
          router.push("/products/men?category=sweatshirt",
            { shallow: true }
          )
        }
      >
        Sweatshrits
      </Button>

      <Button
        className="w-full text-left p-2 px-4 rounded-md hover:bg-black hover:text-white"
        onClick={() =>
          router.push("/products/men?category=bottom",
            { shallow: true }
          )
        }
      >
        Bottoms
      </Button>
      <Button
        className="w-full text-left p-2 px-4 rounded-md hover:bg-black hover:text-white"
        onClick={() =>
          router.push("/products/men?category=hoodie",
            { shallow: true }
          )
        }
      >
        Hoodies
      </Button>
    </div>
  )
}
