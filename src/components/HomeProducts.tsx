import Image from "next/image";
import { BaggageClaim } from "lucide-react";

export default function OurProducts() {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto lg:px-28">
        <h1 className="text-customBlue text-center xl:text-left lg:text-3xl font-bold text-xl sm:text-2xl pb-3 lg:pb-10">
          Our Products
        </h1>
        {/* main div for upper products */}
        <div>
          <div className="grid grid-rows-1 px-10 sm:px-16 md:px-28 lg:px-0 lg:grid-cols-4 gap-4">
            {/* card 1 */}
            <div className="relative inline-block">
              <div className="absolute top-2 left-2">
                <p className="text-white px-4 py-1 rounded-md bg-green-600">
                  New
                </p>
              </div>
              <Image
                className="w-[100%] h-[80%] object-cover rounded-lg"
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
                className="w-[100%] h-[80%]"
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
                className="w-[100%] h-[80%]"
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
                className="w-[100%] h-[80%]"
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
        </div>

        {/* main div for lower products */}
        <div>
          <div className="grid grid-rows-1 px-10 lg:px-0 lg:grid-cols-4 gap-4  sm:px-16 md:px-28  sm:-mt-[35rem] lg:mt-20">
            {/* card 1 */}
            <div className="relative inline-block">
              <div className="absolute top-2 left-2">
                <p className="text-white px-3 py-1 rounded-md bg-green-600">
                  New
                </p>
              </div>
              <Image
                className="w-full h-[80%] rounded-lg"
                src={"/images/HomePage/category1.png"}
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
            {/* card 2 */}
            <div className="relative inline-block">
              <div className="absolute top-2 left-2">
                <p className="text-white px-3 py-1 rounded-md bg-orange-500">
                  Sales
                </p>
              </div>
              <Image
                className="w-[100%] h-[80%] rounded-lg"
                src={"/images/HomePage/popular.png"}
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
                className="w-[100%] h-[80%]"
                src={"/images/HomePage/product2.png"}
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
                className="w-[100%] h-[80%]"
                src={"/images/HomePage/featured1.png"}
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
        </div>
      </main>
    </>
  );
}
