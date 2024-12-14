import Link from "next/link";
import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Dock } from "lucide-react";
import { PiPlant } from "react-icons/pi";

export default function About() {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto lg:px-28">
        {/* main div which will flex 2 header divs */}
        <div className="flex justify-between gap-5 pt-20">
          <div className="lg:w-[50%]">
            <div className="bg-customDarkBlue text-white h-[100%] px-6 lg:px-0 sm:text-center lg:text-left md:px-20 lg:pl-14 lg:pr-8 pt-16">
              <h1 className="font-bold text-3xl pb-10">About Us - Comforty</h1>
              <p className="leading-snug pb-32">
                At Comforty, we believe that the right chair can transform your
                space and elevate your comfort.Specializing in ergonomic
                design,premium materials, and modern aesthetics, we craft chairs
                that seamlessly blend style with functionality.
              </p>
              <Link href={"/products"}>
                <button className="px-8 text-sm py-4 mb-14 bg-white bg-opacity-10 rounded-[5px]">
                  View collection
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block lg:w-[50%]">
            <Image
              className="w-full h-full"
              src={"/images/HomePage/featured1.png"}
              alt="header pic"
              width={600}
              height={600}
            />
          </div>
        </div>

        {/* containers */}
        <h1 className="py-10 text-center text-3xl font-semibold">
          What Makes Our Brand Different
        </h1>
        <div className="grid px-10 sm:px-20 md:px-40 grid-rows-4 grid-cols-1 lg:grid-cols-4 lg:grid-rows-1 gap-5 lg:px-0">
          <div className="container bg-customGray text-customDarkBlue px-10 py-16">
            <TbTruckDelivery className="text-customDarkBlue w-9 h-9 mb-3" />
            <h1 className="text-lg font-medium mb-4 ">Next day as standard</h1>
            <p>Order before 3pm and get your order the next day as standard</p>
          </div>
          <div className="container bg-customGray text-customDarkBlue px-10 py-16">
            <FaRegCircleCheck className="text-customDarkBlue w-9 h-9 mb-3" />
            <h1 className="text-lg font-medium mb-4">Made by true artisans</h1>
            <p>Handmade crafted goods made by real passion and craftmanship</p>
          </div>
          <div className="container bg-customGray text-customDarkBlue px-8 py-16">
            <Dock className="text-customDarkBlue w-9 h-9 mb-3" />
            <h1 className="text-lg font-medium mb-4">Unbeatable prices</h1>
            <p>{`For our materials and quality you wont find better prices anywhere`}</p>
          </div>
          <div className="container bg-customGray text-customDarkBlue px-10 py-16">
            <PiPlant className="text-customDarkBlue w-9 h-9 mb-3" />
            <h1 className="text-lg font-medium mb-4">Recycled packaging</h1>
            <p>
              We use 100% recycled to ensure our footprint is more manageable
            </p>
          </div>
        </div>

        <h1 className="lg:text-3xl text-xl sm:text-2xl pt-32 py-10 text-center lg:text-left font-bold text-customBlue pb-4 sm:pb-6 lg:pb-10">
          Our Popular Products
        </h1>
        <div className="flex flex-col lg:flex-row px-3 sm:px-10 lg:px-0 justify-between gap-5">
          <div className="lg:w-[50%] sm:px-10 md:px-20 lg:px-0">
            <Image
              src={"/images/HomePage/about1.png"}
              alt="sofa"
              width={600}
              height={600}
            />
            <h1 className="pt-5 pb-2 text-zinc-700">The Popular suede sofa</h1>
            <p className="font-light text-zinc-700">$99.00</p>
          </div>
          <div className="lg:w-[50%] flex gap-2 md:gap-8 lg:gap-5">
            <div>
              <Image
                src="/images/HomePage/about3.png"
                alt="pic1"
                width={600}
                height={600}
              />
              <h1 className="pt-5 pb-2 text-zinc-700">The Dandy chair</h1>
              <p className="font-light text-zinc-700">$99.00</p>
            </div>
            <div>
              <Image
                src="/images/HomePage/about2.png"
                alt="pic1"
                width={600}
                height={600}
              />
              <h1 className="pt-5 pb-2 text-zinc-700">The Dandy chair</h1>
              <p className="font-light text-zinc-700">$99.00</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
