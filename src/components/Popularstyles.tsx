import Image from "next/image";

function Popular() {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto lg:px-28 ">
        <div className="flex flex-col lg:flex-row my-20 lg:my-44 gap-5">
          <div className="w-[100%] lg:w-[50%]">
            <div className="flex lg:-ml-[13rem] lg:mt-[12rem]">
              <h1 className="lg:text-2xl sm:text-xl mx-9 lg:mx-0 mb-3 lg:mb-0 lg:-rotate-90">
                EXPLORE NEW AND POPULAR STYLES
              </h1>
            </div>
            <div className="lg:h-[30rem] xl:h-[34rem] lg:ml-[1rem] lg:-mt-[16rem] sm:px-5 px-2">
              <Image
                className="w-[100%] h-[100%]"
                src={"/images/HomePage/featured3.png"}
                alt="orange chair"
                width={600}
                height={600}
              />
            </div>
          </div>

          <div className="w-[100%] lg:w-[50%] ">
            <div className="flex gap-x-5 h-[50%] lg:-mt-7 mb-1 justify-center sm:justify-between sm:px-10 md:gap-12 lg:px-0">
              <div>
                <Image
                  className="w-[95%] h-[85%] xl:w-[100%] xl:h-[100%]"
                  src={"/images/HomePage/featured4.png"}
                  alt="pic 1"
                  width={600}
                  height={500}
                />
              </div>
              <div>
                <Image
                  className="w-[95%] h-[85%] xl:w-[100%] xl:h-[100%]"
                  src={"/images/HomePage/featured1.png"}
                  alt="pic 1"
                  width={600}
                  height={500}
                />
              </div>
            </div>
            <div className="flex gap-x-5 h-[50%] justify-center sm:pt-6 md:gap-12 lg:mt-10 xl:mt-0 lg:px-0 xl:justify-between">
              <div>
                <Image
                  className="w-[100%] h-[95%] xl:h-[16rem] rounded-md"
                  src={"/images/HomePage/popular.png"}
                  alt="pic 1"
                  width={600}
                  height={500}
                />
              </div>
              <div>
                <Image
                  className="w-[100%] h-[95%] xl:h-[16rem]"
                  src={"/images/HomePage/featured1.png"}
                  alt="pic 1"
                  width={600}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Popular;
