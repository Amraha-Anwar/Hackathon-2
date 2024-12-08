import Image from "next/image";
import { BaggageClaim } from "lucide-react";

function FeaturedProducts() {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto lg:px-28">
        <h1 className="lg:text-3xl text-xl sm:text-2xl text-center lg:text-left font-bold text-customBlue pb-4 sm:pb-6 lg:pb-10">
          Featured Products
        </h1>
        {/* main div which will flex all */}
        <div className="flex flex-col lg:flex-row gap-7 px-10 lg:px-0 sm:px-16 md:px-28">
          {/* card 1 */}
          <div className="relative inline-block">
            <div className="absolute top-2 left-2">
              <p className="text-white px-4 py-1 rounded-md bg-green-600">
                New
              </p>
            </div>
            <Image
              className="w-[100%] h-[100%] object-cover rounded-lg"
              src="/images/HomePage/featured1.png"
              alt="stool chair"
              width={600}
              height={600}
            />
            <div className="flex justify-between mt-3">
              <div>
                <h1 className=" leading-relaxed hover:text-customTeal">
                  Library Stool Chair
                </h1>
                <p className="font-semibold">$20</p>
              </div>
              <button className="hover:bg-customTeal hover:text-white bg-customGray text-black px-4 py-3 rounded-lg">
                <BaggageClaim />
              </button>
            </div>
          </div>
          {/* card 2 */}
          <div className="relative inline-block">
            <div className="absolute top-2 left-2">
              <p className="text-white px-3 py-1 rounded-md bg-orange-500">
                Sales
              </p>
            </div>
            <Image
              className="w-[100%] h-[100%]"
              src={"/images/HomePage/featured2.png"}
              alt="stool chair"
              width={600}
              height={600}
            />
            <div className="flex justify-between mt-3">
              <div>
                <h1 className=" leading-relaxed hover:text-customTeal">
                  Library Stool Chair
                </h1>
                <p className="font-semibold">
                  $20<s className="text-gray-400 ml-2">$30</s>
                </p>
              </div>
              <button className="hover:bg-customTeal bg-customGray text-black hover:text-white px-4 py-3 rounded-lg">
                <BaggageClaim />
              </button>
            </div>
          </div>
          {/* card 3 */}
          <div>
            <Image
              className="w-[100%] h-[100%]"
              src={"/images/HomePage/featured3.png"}
              alt="stool chair"
              width={600}
              height={600}
            />
            <div className="flex justify-between mt-3">
              <div>
                <h1 className=" leading-relaxed hover:text-customTeal">
                  Library Stool Chair
                </h1>
                <p className="font-semibold">$20</p>
              </div>
              <button className="hover:bg-customTeal hover:text-white bg-customGray text-black px-4 py-3 rounded-lg">
                <BaggageClaim />
              </button>
            </div>
          </div>
          {/* card 4 */}
          <div>
            <Image
              className="w-[100%] h-[100%]"
              src={"/images/HomePage/featured4.png"}
              alt="stool chair"
              width={600}
              height={600}
            />
            <div className="flex justify-between mt-3">
              <div>
                <h1 className=" leading-relaxed hover:text-customTeal">
                  Library Stool Chair
                </h1>
                <p className="font-semibold">$20</p>
              </div>
              <button className="hover:bg-customTeal hover:text-white bg-customGray text-black px-4 py-3 rounded-lg">
                <BaggageClaim />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default FeaturedProducts;
