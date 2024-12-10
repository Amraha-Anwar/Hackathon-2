import Image from "next/image"
import Link from "next/link"
import { MoveRight } from "lucide-react"

export default function Hero(){
    return(
        <>
        <main className="max-w-screen-2xl mx-auto lg:px-28 top-0">
            {/* main */}
            <div className="flex lg:rounded-bl-custom-lg lg:mb-20 pb-10 flex-row items-center justify-between bg-customGray">
                {/* left div */}
                <div className="w-[50%] lg:px-14 pl-5">
                   <h2 className="text-sm lg:-mt-20 mb-5 font-light ">WELCOME TO CHAIRY</h2>
                   <h1 className="lg:text-5xl text-xl sm:text-2xl md:text-4xl font-bold text-customBlue leading-tight">Best Furniture Collection For Your Interior.</h1>
                   <Link href={"/shopPage"}><button className="flex text-sm lg:text-lg lg:mt-14 lg:gap-5 gap-2 p-1 mt-6 lg:px-4 lg:py-3 justify-center text-white bg-customTeal rounded-md">Shop Now <MoveRight /></button></Link>
                  
                </div>
                {/* right div */}
                <div className="w-[50%] md:pl-10 md:py-10 lg:py-28">
                <Image className="w-[70%] h-[70%] md:w-[80%] md:h-[80%]" src={"/images/HomePage/hero.png"} alt="hero picture" width={500}height={500}/>
                </div>
            </div>
        </main>
        </>
    )
}