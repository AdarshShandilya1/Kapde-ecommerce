"use client"
import { Button } from "@nextui-org/button"
import { useRef, useState} from "react"
import { useRouter } from 'next/navigation'
import Link from "next/link"

export default function Filter(props) {
 
  const [shirtchecked, setShirtChecked] = useState(false)
  const [tshirtchecked, setTshirtChecked] = useState(false)
  const [bottomchecked, setBottomChecked] = useState(false)
  const [sweatshirtchecked, setSweatshirtChecked] = useState(false)
  const [hoodiechecked, setHoodieChecked] = useState(false)
  const [pricerange, setPriceRange] = useState(0)
  const [sizeS, setSizeS] = useState(false)
  const [sizeM, setSizeM] = useState(false)
  const [sizeL, setSizeL] = useState(false)
  const [sizeXL, setSizeXL] = useState(false)
  const [size2XL, setSize2XL] = useState(false)
  const [url, setUrl] = useState('http://localhost:3000/products/men?')
  // let url = useRef('http://localhost:3000/products/men')

  const router = useRouter()
  const handleSubmit = () => {
    if(shirtchecked){
      // url = url + 'category=shirts&'
      setUrl((prev) => {
        return prev + 'category=shrit&'
      })
      console.log(url)
    }
    if(tshirtchecked){
      // url = url + 'category=tshirt&'
      setUrl((prev) => prev + 'category=tshirt&')
      console.log(url)
    }
    if(bottomchecked){
      // url = url + 'category=bottom&'
      setUrl((prev) => prev + 'category=bottom&')
      console.log(url)
    }
    if(sweatshirtchecked){
      // url = url + 'category=sweatshirt'
      // setUrl((prev) => prev + 'category=sweatshirt&')
      console.log(url)
    }
    if(hoodiechecked){
      // url = url + 'category=hoodie&'
      setUrl((prev) => prev + 'category=hoodie&')
      console.log(url)
    }
    console.log(url)
    router.push(url)
  }
  return (
    <div className="w-1/4 h-full table-fixed px-10 py-6">
      <div className="mb-2">
        <h1 className=" font-semibold text-2xl">Filters</h1>
      </div>
      <hr />

      <div className="mb-6">
        <h2 className=" font-bold mt-4 mb-2">Price</h2>
        <div className="flex mb-2 ">
          <input
            checked={pricerange === 500}
            onClick={() => {
              setPriceRange(500)
            }}
            type="radio"
            className="w-4 h-4 my-auto accent-black"
          />
          {/* <label htmlFor="fivehundred" className="ml-2">Below 500</label> */}
          <p className="ml-2">Below 500</p>
        </div>
        <div className="flex mb-2">
          <input
            checked={pricerange === 1000}
            onClick={() => {
              setPriceRange(1000)
            }}
            type="radio"
            className="w-4 h-4 my-auto accent-black"
          />
          <p className="ml-2">{"500 - 1000"}</p>
        </div>
        <div className="flex mb-2">
          <input
            checked={pricerange === 1500}
            onClick={() => {
              setPriceRange(1500)
            }}
            type="radio"
            className="w-4 h-4 my-auto accent-black"
          />
          <p className="ml-2">{"1000 - 1500"}</p>
        </div>
        <div className="flex mb-2">
          <input
            checked={pricerange === 2000}
            onClick={() => {
              setPriceRange(2000)
            }}
            type="radio"
            className="w-4 h-4 my-auto accent-black"
          />
          <p className="ml-2">{"1500 - 2000"}</p>
        </div>
        <div className="flex mb-2">
          <input
            checked={pricerange === 10000}
            onClick={() => {
              setPriceRange(10000)
            }}
            type="radio"
            className="w-4 h-4 my-auto accent-black"
          />
          <p className="ml-2">{"Above 2000"}</p>
        </div>
      </div>
      <hr />
      <div className="mb-6">
        <h2 className="font-bold mt-4 mb-2">Categories</h2>

        <div className="flex mb-2 ">
          <input
            type="checkbox"
            onChange={() => {

              setShirtChecked((prev) => !prev)
            }}
            name="shirts"
            className="w-4 h-4 my-auto accent-black"
          />
          <p className="ml-2">{`Shirts ${shirtchecked}`}</p>
        </div>
        <div className="flex mb-2">
          <input
            type="checkbox"
            onChange={() => {
              setTshirtChecked((prev) => !prev)
            }}
            name="tshirts"
            className="w-4 h-4 my-auto accent-black"
          />
          <p className="ml-2">T-Shirts {`${tshirtchecked}`}</p>
        </div>
        <div className="flex mb-2">
          <input
            type="checkbox"
            onChange={() => {
              setBottomChecked((prev) => !prev)
            }}
            name="bottoms"
            className="w-4 h-4 my-auto accent-black"
          />
          <p className="ml-2">Bottoms {`${bottomchecked}`}</p>
        </div>
        <div className="flex mb-2">
          <input
            type="checkbox"
            onChange={() => {
              setSweatshirtChecked((prev) => !prev)
            }}
            name="sweatshrits"
            className="w-4 h-4 my-auto accent-black"
          />
          <p className="ml-2">Sweatshirts {`${sweatshirtchecked}`}</p>
        </div>
        <div className="flex mb-2">
          <input
            type="checkbox"
            onChange={() => {
              setHoodieChecked((prev) => !prev)
            }}
            name="hoodies"
            className="w-4 h-4 my-auto accent-black"
          />
          <p className="ml-2">Hoodies {`${hoodiechecked}`}</p>
        </div>
      </div>
      <hr></hr>
      <div>
        <h2 className="font-bold mt-4 mb-2">Size</h2>
        <div className="grid grid-cols-3 gap-2">
          <Button
            onClick={() => {
              setSizeS((prev) => !prev)
            }}
            className={
              sizeS
                ? " py-2 rounded-md text-center bg-black text-white border-none"
                : " py-2 border rounded-md text-center hover:bg-gray-200 hover: cursor-pointer "
            }
          >
            S
          </Button>
          <Button
            onClick={() => {
              setSizeM((prev) => !prev)
            }}
            className={
              sizeM
                ? " py-2 rounded-md text-center bg-black text-white border-none"
                : " py-2 border rounded-md text-center hover:bg-gray-200 hover: cursor-pointer "
            }
          >
            M
          </Button>
          <Button
            onClick={() => {
              setSizeL((prev) => !prev)
            }}
            className={
              sizeL
                ? " py-2 rounded-md text-center bg-black text-white border-none"
                : " py-2 border rounded-md text-center hover:bg-gray-200 hover: cursor-pointer "
            }
          >
            L
          </Button>
          <Button
            onClick={() => {
              setSizeXL((prev) => !prev)
            }}
            className={
              sizeXL
                ? " py-2 rounded-md text-center bg-black text-white border-none"
                : " py-2 border rounded-md text-center hover:bg-gray-200 hover: cursor-pointer "
            }
          >
            XL
          </Button>
          <Button
            onClick={() => {
              setSize2XL((prev) => !prev)
            }}
            className={
              size2XL
                ? " py-2 rounded-md text-center bg-black text-white border-none"
                : " py-2 border rounded-md text-center hover:bg-gray-200 hover: cursor-pointer "
            }
          >
            2XL
          </Button>
        </div>
      </div>
      <hr className="mt-6" />
      <Button onClick={handleSubmit} className="bg-black text-white p-4 my-6 w-full">
        Apply Filters
      </Button>
  
    </div>
  )
}
