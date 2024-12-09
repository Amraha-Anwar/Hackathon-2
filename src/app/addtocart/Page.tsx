import Image from "next/image"
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Cart(){
    return(
        <>
        <main className="max-w-screen-2xl mx-auto lg:px-28 py-20">
        <h1 className="font-semibold mb-7">Bag</h1>
            <div className="flex flex-col  lg:flex-row lg:justify-between">
            
                <div className="flex flex-row w-[100%] lg:w-[60%]">
                    <div className="flex flex-col gap-y-20 pr-52">
                    <div className="flex gap-10">
                        <Image className="w-[50%] h-[100%]" src={"/images/HomePage/featured3.png"} alt="orange chair" width={500} height={500}/>
                        <div className="flex flex-col">
                        <h1 className="text-zinc-700 mb-10 lg:text-xl">Library Stool Chair</h1>
                        <p className="text-zinc-700 mb-2">Ashin slate/cobalt bliss</p>
                        <div className="flex justify-between">
                        <p className="text-zinc-700">Size L</p>
                        <p className="text-zinc-700">Quality 1</p>
                        </div>
                        <div className="flex gap-3 text-zinc-700 mt-10">
                            <button><FaRegHeart  className="w-6 h-6"/></button>
                            <button> <RiDeleteBin6Line className="w-6 h-6" /></button>
                       
                        </div>
                        </div>
                    </div>
                    <div className="flex gap-10">
                    <Image className="w-[50%] h-[100%]" src={"/images/HomePage/featured3.png"} alt="orange chair" width={500} height={500}/>
                     <div className="flex flex-col">
                        <h1 className="text-zinc-700 mb-10 lg:text-xl">Library Stool Chair</h1>
                        <p className="text-zinc-700 mb-2">Ashin slate/cobalt bliss</p>
                        <div className="flex justify-between">
                        <p className="text-zinc-700">Size L</p>
                        <p className="text-zinc-700">Quality 1</p>
                        </div>
                        <div className="flex gap-3 mt-10 text-zinc-700">
                            <button><FaRegHeart  className="w-6 h-6"/></button>
                            <button> <RiDeleteBin6Line className="w-6 h-6" /></button>
                       
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="w-[100%] lg:w-[30%]">
                    <h1 className="font-semibold">Summary</h1>

                </div>
            </div>
        </main>
        </>
    )
}
