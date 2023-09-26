import { Button } from "@nextui-org/button"
import Link from "next/link"
import bag_img from "@/public/images/bag_img.png"
import profile_img from "@/public/images/profile_img.png"
import search_img from "@/public/images/search_img.png"
import Image from "next/image"

export default function Navbar() {
  return (
    <div className="p-6 w-full px-8 flex justify-between font-light fixed  z-50 bg-gray-50">
      <div className="flex gap-12">
        <Link
          className="animate-bounce font-normal text-2xl mt-auto"
          href={"/"}
        >
          K A P D E
        </Link>
        <div className="dropdown relative flex ">
          <Link
            className="my-auto link link-underline link-underline-black text-black"
            href={"/products/men"}
          >
            MEN
          </Link>

          <div className="h-fit w-52 bg-white absolute flex-col p-4 hidden mt-8 shadow-md rounded-md z-10 -left-20">
            <Link href={"/products/men/tshrits?color=blue&color=red"}>
              <Button className="w-full text-left p-2 px-4 rounded-md hover:bg-black hover:text-white">
                T-Shirts
              </Button>
            </Link>

            <Link href={"/products/men/shirts"}>
              <Button className="w-full text-left p-2 px-4 rounded-md hover:bg-black hover:text-white">
                Shirts
              </Button>
            </Link>
            <Link href={"/products/men/sweatshirts"}>
              <Button className="w-full text-left p-2 px-4 rounded-md hover:bg-black hover:text-white">
                Sweatshirts
              </Button>
            </Link>
            <Link href={"/products/men/bottom"}>
              <Button className="w-full text-left p-2 px-4 rounded-md hover:bg-black hover:text-white">
                Bottoms
              </Button>
            </Link>
            <Link href={"/products/men/hoodies"}>
              <Button className="w-full text-left p-2 px-4 rounded-md hover:bg-black hover:text-white">
                Hoodies
              </Button>
            </Link>
          </div>
        </div>

        <div className="dropdown relative flex">
          <Link
            className="my-auto link link-underline link-underline-black text-black"
            href={"/products/women"}
          >
            WOMEN
          </Link>
          <div className="h-fit w-52 mx-auto bg-white absolute mt-8 flex-col p-4  hidden shadow-md rounded-md z-10 -left-20">
            <Link href={"/products/women/croptop"}>
              <Button className="w-full text-left p-2 px-4 rounded-md hover:bg-black hover:text-white">
                Crop Top
              </Button>
            </Link>
            <Link href={"/products/women/tshirts"}>
              <Button className="w-full text-left p-2 px-4 rounded-md hover:bg-black hover:text-white">
                Oversized-Tshirts
              </Button>
            </Link>
            <Link href={"/products/women/sweatshirts"}>
              <Button className="w-full text-left p-2 px-4 rounded-md hover:bg-black hover:text-white">
                Sweatshirts
              </Button>
            </Link>
            <Link href={"/products/women/bottom"}>
              <Button className="w-full text-left p-2 px-4 rounded-md hover:bg-black hover:text-white">
                Bottom
              </Button>
            </Link>
            <Link href={"/products/women/hoodies"}>
              <Button className="w-full text-left p-2 px-4 rounded-md hover:bg-black hover:text-white">
                Hoodies
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="mt-auto hidden lg:visible lg:block">
                <h1></h1>
            </div> */}
      <div className="flex gap-12 ">
        <form className="mt-auto flex">
          <div className="rounded-l-md border-l border-slate-800 border-y pl-1 ml-2">
            <Image
              className="mt-2 mx-2"
              src={search_img}
              width={16}
              height={16}
              style={{ objectFit: "contain" }}
            />
          </div>

          <input
            className=" bg-gray-100 w-full p-1 !ring-0 !ring-offset-0  placeholder:text-gray-600 rounded-r-md border-r border-y border-slate-800 focus:outline-none pl-2 "
            placeholder="Search"
            type="input"
          ></input>
        </form>

        <Link className="my-auto " href={"/admin"}>
          <Image src={profile_img} width={25} height={25}></Image>
        </Link>
        <Link className="my-auto" href={"/cart"}>
          <Image src={bag_img} width={25} height={25}></Image>
        </Link>
      </div>
    </div>
  )
}
