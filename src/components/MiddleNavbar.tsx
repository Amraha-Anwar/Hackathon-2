import Image from "next/image"
import Link from "next/link"
import {AlignRight} from "lucide-react"
import { BaggageClaim } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

export default function MiddleNavbar(){
    return(
        <>
        <nav className="max-w-screen mx-auto">
            {/* main div */}
            <div className="hidden lg:block">
            <div className=" flex justify-between bg-customGray w-full h-20 lg:px-28 items-center">
                {/* logo */}
                <div className="flex items-center gap-2">
                <Image className="w-10 h-10" src={"/images/HomePage/logo.png"} alt="Logo" width={200} height={200}/>
                <h1 className="text-xl">Comforty</h1>
                </div>
                {/* cart button */}
                <div className=" bg-white px-3 py-3 rounded-md">
                <Link href={"/addtocart"}>
                <button className="flex gap-3"><BaggageClaim/> Cart
                <p className="bg-customTeal px-3 py-1 rounded-full">2</p>
                    </button></Link>
                </div>
                </div>
            </div>

            <div className="block lg:hidden">
            <div className=" flex justify-between px-3 bg-customGray w-full h-20  items-center">
            <div className="flex items-center gap-2">
                <Image className="w-10 h-10" src={"/images/HomePage/logo.png"} alt="Logo" width={200} height={200}/>
                <h1 className="text-xl">Comforty</h1>
                </div>
            <Sheet >
  <SheetTrigger><AlignRight /></SheetTrigger>
  <SheetContent>
   <SheetHeader>
      <SheetTitle>
      <ul className="flex flex-col my-6 gap-7 text-center text-gray-600">
              <li>
                <Link className="hover:text-customTeal  text-black" href={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-customTeal" href={"/shop"}>
                  Shop
                </Link>
              </li>
              <li>
                <Link className="hover:text-customTeal" href={"/product"}>
                  Product
                </Link>
              </li>
              <li>
                <Link className="hover:text-customTeal" href={"/page"}>
                  Pages
                </Link>
              </li>
              <li>
                <Link className="hover:text-customTeal" href={"/about"}>
                  About
                </Link>
              </li>
            </ul>
      </SheetTitle>
      </SheetHeader>
  </SheetContent>
</Sheet>
</div>
</div>
        </nav>
        </>
    )
}