import Image from "next/image";

function Categories() {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto lg:px-28">
        <h1 className="lg:text-3xl text-xl sm:text-2xl font-bold text-center lg:text-left text-customBlue pt-20 lg:pt-48">
          Top Categories
        </h1>
        {/* main div which will do flex to it's child */}
        <div className="flex flex-col lg:flex-row gap-7 px-10 sm:px-16 md:px-28 lg:px-0 pt-5 lg:pt-0 lg:mt-10">
          <div className="relative">
            <Image
              className="w-[100%] h-[100%]"
              src={"/images/HomePage/category1.png"}
              alt="Wing Chair"
              width={600}
              height={600}
            />
            <div className="absolute bottom-0 w-full gap-x-3 bg-black pl-5 bg-opacity-70 py-3 h-16 items-center text-left transition-all duration-300">
              <h1 className="text-white text-lg">Wing Chair</h1>
              <h1 className="text-gray-400 text-sm font-light">
                3,584 Products
              </h1>
            </div>
          </div>
          <div className="relative">
            <Image
              className="w-[100%] h-[100%]"
              src={"/images/HomePage/category2.png"}
              alt="Wooden Chair"
              width={600}
              height={600}
            />
            <div className="absolute bottom-0 w-full gap-x-3 bg-black pl-5 bg-opacity-70 py-3 h-16 items-center text-left transition-all duration-300">
              <h1 className="text-white text-lg">Wooden Chair</h1>
              <h1 className="text-gray-400 text-sm font-light">157 Products</h1>
            </div>
          </div>
          <div className="relative">
            <Image
              className="w-[100%] h-[100%]"
              src={"/images/HomePage/category3.png"}
              alt="Desk Chair"
              width={600}
              height={600}
            />
            <div className="absolute bottom-0 w-full gap-x-3 bg-black pl-5 bg-opacity-70 py-3 h-16 items-center text-left transition-all duration-300">
              <h1 className="text-white text-lg">Desk Chair</h1>
              <h1 className="text-gray-400 text-sm font-light">154 Products</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Categories;
