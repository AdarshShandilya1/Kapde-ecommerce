import Image from "next/image"
import Interaction from "@/components/Interaction"
import Description from "@/components/Description"
import Card from "@/components/Card"

const getItems = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/items/${id}`, {
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

const getSimilarProducts = async () => {
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

export default async function Details(props) {
  const id = props.params.id
  const products = await getItems(id)
  const { items } = await getSimilarProducts()
  
  return (
    <div className=" pt-[calc(120px)] w-9/12 mx-auto ">
      {products ? (
        <>
          <div className="grid gird-cols-1 lg:grid-cols-2">
            <Image
              className="w-full mb-6 lg:w-5/6"
              src={products.img}
              width={1000}
              height={1000}
            />
            <div>
              <h1 className=" font-semibold text-sm mb-6 tracking-widest">
                KAPDE COLLECTION
              </h1>
              <p className="text-2xl xl:text-3xl font-extrabold tracking-wider mb-4">
                {products.title}
              </p>
              <p className="xl:text-xl mb-4"> Rs. {products.price}</p>
              <hr className="mb-4"></hr>
              <Interaction />
            </div>
          </div>

          <Description />
          <p className="mt-10 text-2xl xl:text-3xl font-extrabold tracking-wider mb-4 capitalize">
          our recommendations
          </p>
          <div className="flex gap-4 md:gap-9 overflow-x-scroll mt-6 mb-6">
            {items.map((product) => {
              if (product.category === products.category && product._id !== products._id) {
                return (
                  <Card
                    id={product._id}
                    title={product.title}
                    price={product.price}
                    img={product.img}
                    category={product.category}
                    gender={product.gender}
                    wid={"350px"}
                  />
                )
              }
            })}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
