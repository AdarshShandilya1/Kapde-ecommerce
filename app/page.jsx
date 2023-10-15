import Card from "@/components/Card"
import Image from "next/image"
import banner_img from "@/public/images/banner_img.webp"
import banner1 from "@/public/images/home_banner.webp"
import Categories from "@/components/Categories"
import Link from "next/link"
import Footer from "@/components/Footer"

const getItems = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/items", {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch items")
    }
    return res.json()
  } catch (error) {
    console.log("Error loading items: ", error)
  }
}
export default async function Home() {
  const { items } = await getItems()
  return (
    <div className="subpixel-antialiased ">
      <div className="relative">
        <div className="w-full overflow-hidden">
          <Image className="" src={banner_img} width={2000} style={{}} />
        </div>

        <div className="absolute left-1/2  bottom-12 -translate-x-1/2 ">
          <Link
            href={{
              pathname: '/products/explore',
            }}
            className="bg-black text-white p-4 px-14 opacity-80 hover:opacity-100"
          >
            E X P L O R E
          </Link>
        </div>
      </div>

      <div>
        <Categories />
      </div>

      <div className="flex pt-6">
        <h1 className="text-4xl mx-auto font-sans font-thin link link-underline link-underline-black text-black">
          NEW ARRIVAL
        </h1>
      </div>
      <div className=" ml-auto mr-auto auto w-full  gap-4 p-6 px-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      
        { items.map((product) => {
          return (
            <Card
              id={product._id}
              title={product.title}
              price={product.price}
              img={product.img}
              category={product.category}
              gender={product.gender}
            />
          )
        })}
      </div>
      <div className="flex">
        <h1 className="text-4xl mx-auto font-sans font-thin link link-underline link-underline-black text-black">
          MOST TRENDING
        </h1>
      </div>
      <div className=" ml-auto mr-auto auto w-full  gap-4 p-6 px-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {items.map((product) => {
          return (
            <Card
              id={product._id}
              title={product.title}
              price={product.price}
              img={product.img}
              category={product.category}
              gender={product.gender}
            />
          )
        })}
      </div>
        <Footer/>
    </div>
  )
}
