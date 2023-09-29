"use client"
import { Button } from "@nextui-org/button"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Filter(props) {
  const categoriesArray = []
  const sizeArray = []
  const [categories, setCategories] = useState(categoriesArray)
  const [sizes, setSizes] = useState(sizeArray)
  const [pricerange, setPriceRange] = useState(0)
  

  let urlfilters = "http://localhost:3000/products/men?"
  categories.forEach(item => {
    urlfilters = urlfilters.concat(`category=${item}&`)
    console.log(urlfilters)
  })
  sizes.forEach(item => {
    urlfilters = urlfilters.concat(`size=${item}&`)
    console.log(urlfilters)
  })

  if(pricerange !== 0){
    urlfilters = urlfilters.concat(`price=${pricerange}`)
    console.log(urlfilters)
  }
  const router = useRouter()

  const handleClick = (e)=>{
    e.preventDefault();
    router.push(urlfilters)
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
            onChange={(e) => {
              if (e.target.checked) {
                setCategories((cat) => {
                  console.log("Shirt has been inserted in categories")
                  return [...cat, "shirt"]
                })
      
              } 
              else if (e.target.checked === false) {
                setCategories((cat) => {
                  if (cat.includes("shirt")) {
                    const index = cat.findIndex((item) => item === "shirt")
                    cat.splice(index)
                    console.log("Shirt has been removed from categories")
                  }
                  return [...cat]
                })
              }
            }}
            name="shirts"
            className="w-4 h-4 my-auto accent-black"
          />
          <p className="ml-2">Shirts</p>
        </div>
        <div className="flex mb-2 ">
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                setCategories((cat) => {
                  console.log("T-shrit has been inserted in categories")
                  return [...cat, "tshirt"]
                })
      
              } 
              else if (e.target.checked === false) {
                setCategories((cat) => {
                  if (cat.includes("tshirt")) {
                    const index = cat.findIndex((item) => item === "tshirt")
                    cat.splice(index)
                    console.log("T-shrit has been removed from categories")
                  }
                  return [...cat]
                })
              }
            }}
            name="tshirt"
            className="w-4 h-4 my-auto accent-black"
          />
          <p className="ml-2">T-Shirts</p>
        </div>
        <div className="flex mb-2 ">
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                setCategories((cat) => {
                  console.log("Sweatshrit has been inserted in categories")
                  return [...cat, "sweatshirt"]
                })
      
              } 
              else if (e.target.checked === false) {
                setCategories((cat) => {
                  if (cat.includes("sweatshirt")) {
                    const index = cat.findIndex((item) => item === "sweatshirt")
                    cat.splice(index)
                    console.log("Sweatshirt has been removed from categories")
                  }
                  return [...cat]
                })
              }
            }}
            name="sweatshirt"
            className="w-4 h-4 my-auto accent-black"
          />
          <p className="ml-2">Sweatshirts</p>
        </div>
        <div className="flex mb-2 ">
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                setCategories((cat) => {
                  console.log("Bottom has been inserted in categories")
                  return [...cat, "bottom"]
                })
      
              } 
              else if (e.target.checked === false) {
                setCategories((cat) => {
                  if (cat.includes("bottom")) {
                    const index = cat.findIndex((item) => item === "bottom")
                    cat.splice(index)
                    console.log("Bottom has been removed from categories")
                  }
                  return [...cat]
                })
              }
            }}
            name="bottom"
            className="w-4 h-4 my-auto accent-black"
          />
          <p className="ml-2">Bottoms</p>
        </div>
        <div className="flex mb-2 ">
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                setCategories((cat) => {
                  console.log("Hoodie has been inserted in categories")
                  return [...cat, "hoodie"]
                })
      
              } 
              else if (e.target.checked === false) {
                setCategories((cat) => {
                  if (cat.includes("hoodie")) {
                    const index = cat.findIndex((item) => item === "hoodie")
                    cat.splice(index)
                    console.log("Hoodie has been removed from categories")
                  }
                  return [...cat]
                })
              }
            }}
            name="hoodie"
            className="w-4 h-4 my-auto accent-black"
          />
          <p className="ml-2">Hoodies</p>
        </div>
        
      </div>
      <hr></hr>
      <div>
        <h2 className="font-bold mt-4 mb-2">Size</h2>
        <div className="grid grid-cols-3 gap-2">
          <Button
            onClick={() => {
              if(sizes.includes("S")){
                  setSizes((arr) =>{
                    const index = arr.findIndex((ele) => ele === "S")
                    arr.splice(index)
                    return [...arr]
                  })
              }
              else if(sizes.includes("S") === false){
                  setSizes((arr) =>{
                    return [...arr, "S"]
                  })
              }
            }}
            className={
              sizes.includes("S")
                ? " py-2 rounded-md text-center bg-black text-white border-none"
                : " py-2 border rounded-md text-center hover:bg-gray-200 hover: cursor-pointer "
            }
          >
            S
          </Button>

          <Button
            onClick={() => {
              if(sizes.includes("M")){
                  setSizes((arr) =>{
                    const index = arr.findIndex((ele) => ele === "M")
                    arr.splice(index)
                    return [...arr]
                  })
              }
              else if(sizes.includes("M") === false){
                  setSizes((arr) =>{
                    return [...arr, "M"]
                  })
              }
            }}
            className={
              sizes.includes("M")
                ? " py-2 rounded-md text-center bg-black text-white border-none"
                : " py-2 border rounded-md text-center hover:bg-gray-200 hover: cursor-pointer "
            }
          >
            M
          </Button>
          <Button
            onClick={() => {
              if(sizes.includes("L")){
                  setSizes((arr) =>{
                    const index = arr.findIndex((ele) => ele === "L")
                    arr.splice(index)
                    return [...arr]
                  })
              }
              else if(sizes.includes("L") === false){
                  setSizes((arr) =>{
                    return [...arr, "L"]
                  })
              }
            }}
            className={
              sizes.includes("L")
                ? " py-2 rounded-md text-center bg-black text-white border-none"
                : " py-2 border rounded-md text-center hover:bg-gray-200 hover: cursor-pointer "
            }
          >
            L
          </Button>
          <Button
            onClick={() => {
              if(sizes.includes("XL")){
                  setSizes((arr) =>{
                    const index = arr.findIndex((ele) => ele === "XL")
                    arr.splice(index)
                    return [...arr]
                  })
              }
              else if(sizes.includes("XL") === false){
                  setSizes((arr) =>{
                    return [...arr, "XL"]
                  })
              }
            }}
            className={
              sizes.includes("XL")
                ? " py-2 rounded-md text-center bg-black text-white border-none"
                : " py-2 border rounded-md text-center hover:bg-gray-200 hover: cursor-pointer "
            }
          >
            XL
          </Button>
          <Button
            onClick={() => {
              if(sizes.includes("XXL")){
                  setSizes((arr) =>{
                    const index = arr.findIndex((ele) => ele === "XXL")
                    arr.splice(index)
                    return [...arr]
                  })
              }
              else if(sizes.includes("XXL") === false){
                  setSizes((arr) =>{
                    return [...arr, "XXL"]
                  })
              }
            }}
            className={
              sizes.includes("XXL")
                ? " py-2 rounded-md text-center bg-black text-white border-none"
                : " py-2 border rounded-md text-center hover:bg-gray-200 hover: cursor-pointer "
            }
          >
            XXL
          </Button>
          
        </div>
      </div>
      <hr className="mt-6" />
      <Button
        onClick={(e)=>{
          console.log(categories)
          console.log(sizes)
          handleClick(e)
        }}
        className="bg-black text-white p-4 my-6 w-full"
      >
        Apply Filters
      </Button>
    </div>
  )
}
