import Image from "next/image"
import Link from "next/link"
import { BsCartDash } from "react-icons/bs"

function Page(){
    return(
        <>
        <main className="max-w-screen-2xl mx-auto lg:px-28 py-20">
            <div className="flex flex-col lg:flex-row lg:justify-between px-3 sm:px-7 md:px-16 lg:px-0 lg:gap-20">
                <div className="lg:w-[50%]">
                <Image className="w-[100%] h-[100%]" src={"/images/HomePage/featured2.png"} alt="product image" width={650} height={650}/>
                </div>
                <div className="lg:w-[50%] pt-3 lg:pt-0">
                    <h1 className="text-customBlue lg:text-6xl text-xl sm:text-3xl md:text-5xl font-bold">Library Stool Chair</h1>
                    <p className="bg-customTeal lg:py-2 rounded-full w-24 py-1 mt-2 lg:w-40 text-center text-xs lg:text-lg lg:mt-10 text-white lg:font-medium">$20.00 USD</p>
                    <hr className="my-3 lg:my-10"/>
                    <p className="text-zinc-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing </p>
                    <button className="text-white bg-customTeal flex px-2 py-2 mt-3 lg:px-6 text-xs lg:py-4 gap-2 lg:mt-10 rounded-[10px]"><BsCartDash className="lg:w-5 lg:h-6 h-4 w-4"/> Add To Cart</button>
                </div>
            </div>
            {/* featured products */}
            <div>
                <div className="flex flex-col lg:flex-row gap-y-2 justify-between pt-28 pb-14 px-3 sm:px-8 md:px-24 lg:px-0">
                    <h1 className="text-customBlue lg:text-3xl text-lg font-bold">FEATURED PRODUCTS</h1>
                    <Link className="text-black underline underline-offset-8 font-bold" href={"/products"}>View All</Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between gap-5  lg:px-0">
                <div className="relative inline-block px-3 sm:px-8 md:px-24 lg:px-0">
                    <Image className="rounded-none" src={"/images/HomePage/product2.png"} alt="product 1" width={500} height={500}/>
                    <div className="flex flex-col lg:flex-row justify-between pt-3">
                        <p className="text-gray-700 text-sm">Library Stool Chair </p>
                        <p className="text-black font-bold">$99</p>
                    </div>
                </div>
                <div className="relative inline-block px-3 sm:px-8 md:px-24 lg:px-0">
                    <Image className="rounded-none" src={"/images/HomePage/featured1.png"} alt="product 1" width={500} height={500}/>
                    <div className="flex flex-col lg:flex-row justify-between pt-3">
                        <p className="text-gray-700 text-sm">Library Stool Chair </p>
                        <p className="text-black font-bold">$99</p>
                    </div>
                </div>
                <div className="relative inline-block px-3 sm:px-8 md:px-24 lg:px-0">
                    <Image className="rounded-none" src={"/images/HomePage/category3.png"} alt="product 1" width={500} height={500}/>
                    <div className="flex flex-col lg:flex-row justify-between pt-3">
                        <p className="text-gray-700 text-sm">Library Stool Chair </p>
                        <p className="text-black font-bold">$99</p>
                    </div>
                </div>
                <div className="relative inline-block px-3 sm:px-8 md:px-24 lg:px-0">
                    <Image className=" rounded-none" src={"/images/HomePage/featured3.png"} alt="product 1" width={500} height={500}/>
                    <div className="flex flex-col lg:flex-row justify-between pt-3">
                        <p className="text-gray-700 text-sm">Library Stool Chair </p>
                        <p className=" text-black font-bold">$99</p>
                    </div>
                </div>
                <div className="relative inline-block px-3 sm:px-8 md:px-24 lg:px-0">
                    <Image className=" rounded-none" src={"/images/HomePage/category1.png"} alt="product 1" width={500} height={500}/>
                    <div className="flex flex-col lg:flex-row justify-between pt-3">
                        <p className="text-gray-700 text-sm ">Library Stool Chair </p>
                        <p className="text black font-bold">$99</p>
                    </div>
                </div>
            </div></div>
        </main>
        </>
    )
}
export default Page