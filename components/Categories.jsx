import Image from "next/image";
import newdrop from "@/public/images/newdrop_img.webp"
import croptops from "@/public/images/croptop_img.webp"
import poloshirts from "@/public/images/poloshirts_img.jpg"
import shirts from "@/public/images/shirts_img.webp"
import sweatshirts from "@/public/images/sweatshirt_img.webp"
import tshirts from "@/public/images/tshirt_img.webp"
import essentials from "@/public/images/essentials_img.webp"

export default function Categories(){
    return(
        <div className="flex gap-6 overflow-x-scroll p-6 font-thin">
            <div className="flex-col w-fit">
                <div className=" mt-6 w-52 h-52 rounded-l-full rounded-r-full overflow-clip">
                    <Image style={{width: "100%"}} src={newdrop} width={200} height={100}/>
                </div>
                <p className="w-fit mx-auto mt-2">New Drop</p>
            </div>
            <div className="flex-col w-fit">
                <div className=" mt-6 w-52 h-52 rounded-l-full rounded-r-full overflow-clip">
                    <Image style={{width: "100%"}} src={tshirts} width={200} height={100}/>
                </div>
                <p className="w-fit mx-auto mt-2">T-Shirts</p>
            </div>
            
            <div className="flex-col w-fit">
                <div className=" mt-6 w-52 h-52 rounded-l-full rounded-r-full overflow-clip">
                    <Image style={{width: "100%"}} src={sweatshirts} width={200} height={100}/>
                </div>
                <p className="w-fit mx-auto mt-2">Sweatshirts</p>
            </div>
            <div className="flex-col w-fit">
                <div className=" mt-6 w-52 h-52 rounded-l-full rounded-r-full overflow-clip">
                    <Image style={{width: "100%"}} src={croptops} width={200} height={100}/>
                </div>
                <p className="w-fit mx-auto mt-2">Crop Tops</p>
            </div>
            <div className="flex-col w-fit">
                <div className=" mt-6 w-52 h-52 rounded-l-full rounded-r-full overflow-clip">
                    <Image style={{width: "100%"}} src={poloshirts} width={200} height={100}/>
                </div>
                <p className="w-fit mx-auto mt-2">Polo Shirts</p>
            </div>
            <div className="flex-col w-fit">
                <div className=" mt-6 w-52 h-52 rounded-l-full rounded-r-full overflow-clip">
                    <Image style={{width: "100%"}} src={shirts} width={200} height={100}/>
                </div>
                <p className="w-fit mx-auto mt-2">Shirts</p>
            </div>
            <div className="flex-col w-fit">
                <div className=" mt-6 w-52 h-52 rounded-l-full rounded-r-full overflow-clip">
                    <Image style={{width: "100%"}} src={essentials} width={200} height={100}/>
                </div>
                <p className="w-fit mx-auto mt-2">Essentials</p>
            </div>
            
        </div>
    )
}