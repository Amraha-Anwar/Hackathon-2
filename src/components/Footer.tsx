import Image from "next/image";
import Link from "next/link";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { MessageCircleHeart } from "lucide-react";
import { Youtube } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="max-w-screen-2xl mx-auto border border-t mt-32">
        <div className="bg-white w-[100%] h-[10%] ">
          <div className="flex flex-col lg:flex-row lg:px-10 lg:gap-16 text-black lg:mb-12 mt-28 text-center lg:text-left xl:pb-24">
            <div>
              <div className="flex justify-center lg:justify-start lg:flex-row gap-2 text-customBlue">
                <Image
                  className="w-12 h-12"
                  src={"/images/HomePage/logo.png"}
                  alt="logo"
                  width={200}
                  height={200}
                />
                <h1 className="font-semibold text-2xl lg:mb-9 pt-3">
                  Comforty
                </h1>
              </div>
              <p className="xl:mb-6 text-lg text-gray-500 pt-4 lg:pt-0">
                Vivamus tristique odit sit amet velit semper,
                <br />
                eu posuere turpis interdum.
                <br />
                Cras egestas purus
              </p>
              <div className="text-gray-500 flex gap-7 justify-center lg:justify-start py-4 lg:py-6 lg:flex-row">
                <Facebook
                  className="hover:bg-customTeal hover:rounded-full hover:text-white"
                  strokeWidth={3}
                />
                <Twitter
                className=" hover:bg-customTeal hover:rounded-full hover:text-white"
                 strokeWidth={3} />
                <Instagram
                  className=" hover:bg-customTeal hover:rounded-full hover:text-white"
                  strokeWidth={3}
                />{" "}
                <MessageCircleHeart
                  className="hover:bg-customTeal hover:rounded-full hover:text-white"
                  strokeWidth={3}
                />
                <Youtube
                  className="hover:bg-customTeal hover:rounded-full hover:text-white"
                  strokeWidth={3}
                />
              </div>
            </div>
            <div className="text-black">
              <h1 className="font-medium text-2xl  lg:mb-9 py-7 lg:py-0 text-gray-400">
                Category
              </h1>
              <div className="flex xl:flex-col flex-col lg:justify-start">
                <Link href="#">
                  <button className="lg:mb-3 hover:text-customTeal hover:underline">Sofa</button>
                </Link>
                <Link href="/login">
                  <button className="lg:mb-3 hover:text-customTeal hover:underline">Armchair</button>
                </Link>
                <Link href="#">
                  <button className="lg:mb-3 hover:text-customTeal hover:underline">Wing Chair</button>
                </Link>
                <Link href="#">
                  <button className="lg:mb-3 hover:text-customTeal hover:underline">Desk Chair</button>
                </Link>
                <Link href="#">
                  <button className="lg:mb-3 hover:text-customTeal hover:underline">Wood Chair</button>
                </Link>
                <Link href="#">
                  <button className="lg:mb-3 hover:text-customTeal hover:underline">Park Bench</button>
                </Link>
              </div>
            </div>
            <div>
              <h1 className="font-medium text-2xl lg:mb-9 py-7 lg:py-0 text-gray-400">
                SUPPORT
              </h1>
              <div className="flex text-center lg:text-left flex-col">
                <Link href="#">
                  <button className="lg:mb-4 hover:text-customTeal hover:underline">Help, Support</button>
                </Link>
                <Link href="/login">
                  <button className="lg:mb-4 hover:text-customTeal hover:underline">Terms &<br/> Conditions</button>
                </Link>
                <Link href="#">
                  <button className="lg:mb-4 hover:text-customTeal hover:underline">Privacy Policy</button>
                </Link>
                <Link href="#">
                  <button className="lg:mb-4 hover:text-customTeal hover:underline">Help</button>
                </Link>
              </div>
            </div>
            <div>
              <h1 className="font-medium text-2xl lg:mb-9 py-7 lg:py-0 text-gray-400">
               NEWSLETTER
              </h1>
              <form className="flex gap-3 placeholder:text-gray-400 justify-center lg:justify-start">
                <input className="border border-spacing-2 border-gray-300 rounded-md placeholder:pl-5"  type="email" placeholder="Your email"/>
                <button className="bg-customTeal text-white lg:px-6 lg:py-2 py-1 px-3 rounded-md">Subscribe</button>
              </form>
              <p className="text-slate-400 lg:mb-4 pt-3 pb-10 lg:pb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatibus enem.
              </p>
            </div>
          </div>
          <div>
            <hr className=" border-gray-300 border-t-[0.5px]" />
            <h2 className="text-gray-600 py-5 text-md text-left px-20">
              @ 2021-Blogy-Designed & Developed by <span className="text-black">Zakirsoft</span> </h2>
          </div>
        </div>
      </footer>
    </>
  );
}
