export default function Footer(){
    return(
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 p-14 bg-gray-100">
                <div className="flex flex-col gap-4 ">
                    <p className=" font-semibold">SUPPORT</p>
                    <p className="cursor-pointer w-fit link link-underline link-underline-black text-black">All Reviews</p>
                    <p className="cursor-pointer w-fit link link-underline link-underline-black text-black">Returns Or Exchange</p>
                    <p className="cursor-pointer w-fit link link-underline link-underline-black text-black">FAQ's</p>
                    <p className="cursor-pointer w-fit link link-underline link-underline-black text-black">Wash & Care</p>
                </div>
                <div className=" flex flex-col gap-4 ">
                    <p className=" font-semibold">INFORMATION</p>
                    <p className="cursor-pointer w-fit link link-underline link-underline-black text-black">Contact Us</p>
                    <p className="cursor-pointer w-fit link link-underline link-underline-black text-black">Terms of Service</p>
                    <p className="cursor-pointer w-fit link link-underline link-underline-black text-black">Refund Policy</p>
                    <p className="cursor-pointer w-fit link link-underline link-underline-black text-black">Sitemap</p>
                    <p className="cursor-pointer w-fit link link-underline link-underline-black text-black">Affiliate Program</p>
                </div>
                <div className=" flex flex-col gap-4 ">
                    <p className=" font-semibold">SOCIAL MEDIA</p>
                    <p className="cursor-pointer w-fit link link-underline link-underline-black text-black">Facebook</p>
                    <p className="cursor-pointer w-fit link link-underline link-underline-black text-black">Youtube</p>
                    <p className="cursor-pointer w-fit link link-underline link-underline-black text-black">Instagram</p>
                    <p className="cursor-pointer w-fit link link-underline link-underline-black text-black">Twitter</p>
                </div>
            </div>
            <div  className="px-14 pb-14 text-sm bg-gray-100">KAPDE ESSENTIALS PRIVATE LIMITED © 2023</div>

        </>
       
    
    )
}