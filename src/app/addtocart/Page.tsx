import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Cart() {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto lg:px-28 py-20">
        <h1 className="font-semibold mb-7 px-4 lg:px-0">Bag</h1>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-row w-[100%] lg:w-[70%]">
            <div className="flex flex-col gap-y-10">
              <div className="flex gap-4 lg:gap-10 px-4">
                <Image
                  className="lg:w-[20%] w-[40%] h-[100%]"
                  src={"/images/HomePage/featured3.png"}
                  alt="orange chair"
                  width={500}
                  height={500}
                />
                <div className="flex flex-col">
                  <div className="flex lg:gap-x-32 xl:gap-x-64">
                    <h1 className="text-zinc-700 mb-3">
                      Library Stool Chair
                    </h1>
                    <p className="hidden lg:block">MRP: $99</p>
                  </div>
                  <p className="text-zinc-700 mb-2">Ashin slate/cobalt bliss</p>
                  <div className="flex gap-10">
                    <p className="text-zinc-700">Size L</p>
                    <p className="text-zinc-700">Quality 1</p>
                  </div>
                  <div className="flex gap-3 text-zinc-700 mt-6">
                    <button>
                      <FaRegHeart className="w-5 h-5"/>
                    </button>
                    <button>

                      <RiDeleteBin6Line className="w-5 h-5"/>
                    </button>
                  </div>
                </div>
              </div>
              <hr/>
              <div className="flex gap-4 px-4 lg:gap-10">
                <Image
                  className="lg:w-[20%] w-[40%] h-[100%]"
                  src={"/images/HomePage/category1.png"}
                  alt="orange chair"
                  width={500}
                  height={500}
                />
                <div className="flex flex-col">
                  <div className="flex lg:gap-x-32 xl:gap-x-64">
                    <h1 className="text-zinc-700 mb-3">
                      Library Stool Chair
                    </h1>
                    <p className="hidden lg:block">MRP: $99</p>
                  </div>
                  <p className="text-zinc-700 mb-2">Ashin slate/cobalt bliss</p>
                  <div className="flex gap-10">
                    <p className="text-zinc-700">Size L</p>
                    <p className="text-zinc-700">Quality 1</p>
                  </div>
                  <div className="flex gap-3 mt-5 text-zinc-700">
                    <button>
                      <FaRegHeart className="w-5 h-5"/>
                    </button>
                    <button>
                      <RiDeleteBin6Line className="w-5 h-5"/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] lg:w-[30%]">
            <h1 className="font-semibold mt-10 px-4 sm:px-10 lg:px-0 lg:-mt-10 mb-4">Summary</h1>
            <div className="flex justify-between px-4 sm:px-10 lg:px-0 mb-4">
              <p>Subtotal</p>
              <p>$198.00</p>
            </div>
            <div className="flex justify-between px-4 sm:px-10 lg:px-0 mb-4">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
            <hr className="pb-5"/>
            <div className="flex justify-between px-4 sm:px-10 lg:px-0 mb-5">
              <p>Total</p>
              <p>$198.00</p>
            </div>
            <hr/>
            <button className="text-white bg-customTeal ml-4 sm:ml-10 my-8 lg:w-full px-5 py-5 rounded-full">Member Checkout</button>
          </div>
        </div>
      </main>
    </>
  );
}
