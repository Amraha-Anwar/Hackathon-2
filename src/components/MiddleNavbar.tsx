import Image from "next/image"
import Link from "next/link"
import { BaggageClaim } from "lucide-react";

export default function MiddleNavbar(){
    return(
        <>
        <nav className="max-w-screen mx-auto">
            {/* main div */}
            
            <div className="flex justify-between bg-customGray w-full h-16 lg:h-20 px-3 lg:px-28 items-center">
                {/* logo */}
                <div className="flex items-center gap-2">
                <Image className="w-8 h-8 lg:w-10 lg:h-10" src={"/images/HomePage/logo.png"} alt="Logo" width={200} height={200}/>
                <h1 className="text-xl">Comforty</h1>
                </div>
                {/* cart button */}
                <div className="bg-white lg:px-3 lg:py-3 px-1 py-1">
                <Link href={"/addtocart"}>
                <button className="flex gap-3"><BaggageClaim/> Cart
                <p className="bg-customTeal px-3 py-1 rounded-full">2</p>
                    </button></Link>
                </div>
                </div>
            
        </nav>
        </>
    )
}