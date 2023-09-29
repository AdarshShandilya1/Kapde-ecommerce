import Card from "@/components/Card"
import Filter from "@/components/Filter"
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


export default async function Products({params, searchParams}){
    const { items } = await getItems()
    console.log(items)
    console.log(searchParams)
    let filteredArray = []
    const filteredItems = ()=>{

      items.forEach(item =>{
        let paramsArray = {...searchParams, category:[searchParams.category]}
        if(paramsArray.category.includes(item.category)){
          filteredArray.push(item)
        }
      })
    }
    filteredItems()
    console.log("this is filtered array " ,filteredArray)

  return (
    <div>
      <div className=" grid grid-cols-2 text-center pt-[calc(111.6px)]">
        <div className="border p-2 md:hidden" >
          Filters
        </div>
        <div className="border p-2 md:hidden">Sort By</div>
      </div>

      <h1 className="text-5xl text-center font-bold mt-11 capitalize">{params.products[1]}</h1>
      <p className="text-center mt-6">{filteredArray.length} products</p>

      <div className="flex ">
        <Filter isSizeSelected={false} />
        <div className="w-3/4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 py-6  pr-6 gap-4 ml-auto">
          {filteredArray.map((product) => {
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
      </div>
    </div>
  )

}