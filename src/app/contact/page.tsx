import { GoClockFill } from "react-icons/go";
import { MdPhone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { GrTrophy } from "react-icons/gr";
import { LuBadgeCheck } from "react-icons/lu"
import { MdSupportAgent } from "react-icons/md";

export default function Contact() {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto lg:px-28">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl text-black text-center pt-14">
          Get In Touch With Us
        </h1>
        <p className="text-center pt-4 lg:pt-4 text-gray-500 lg:px-56">
          For more information About Our Product & Services. Please Feel Free to
          Drop Us An Email. Our Staff Always Be There To Help You Out. Not
          Hesitate!
        </p>

        {/* parent of all divs whick will separate 2 divs -left/right */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-32 px-5 lg:px-32 py-20">
          {/* left one */}
          <div className="lg:w-[50%] flex lg:flex-row lg:justify-between sm:justify-center">
            <div className="flex flex-col gap-y-28 xl:gap-y-32 lg:gap-y-52">
              <MdLocationOn className="w-7 h-7" />
              <MdPhone className="w-6 h-6" />
              <GoClockFill className="w-6 h-6" />
            </div>
            <div className="flex flex-col pl-10 gap-y-16">
              <div>
                <h1 className="text-2xl font-bold">Address</h1>
                <p className="text-gray-800 font-medium">
                  236 5th SE Avenue, NEW YORK NY10000, United States
                </p>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Phone</h1>
                <p className="text-gray-800 font-medium">{`Mobile: +(84) 546-6789`}</p>
                <p className="text-gray-800 font-medium">{`Hotline: +(84) 546-6789`}</p>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Working Time</h1>
                <p className="text-gray-800 font-medium">{`Montay-Friday: 9:00 - 22:00`}</p>
                <p className="text-gray-800 font-medium">{`Saturday-Sunday: 9:00 - 21:00`}</p>
              </div>
            </div>
          </div>
          {/* right one */}
          <div className="pt-20 lg:pt-0 flex flex-col lg:w-[50%]">
            <form className="sm:px-10 md:px-28 lg:px-0">
              {/*  Name */}
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-4 text-gray-700">
                  Your name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-6 py-4 border border-gray-300 focus:ring-black rounded-[10px] sm:text-sm"
                  placeholder="Abc"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-8">
                <label className="block text-sm  mb-4 font-semibold text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full px-6 py-4 border border-gray-300 rounded-[10px] shadow-sm sm:text-sm"
                  placeholder={`Abc@def.com`}
                  required
                />
              </div>
              {/* Subject */}
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-4 text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-6 py-4 border border-gray-300 rounded-[10px] shadow-sm sm:text-sm"
                  placeholder="This is an optional"
            
                />
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-4 text-gray-700">
                  Message
                </label>
                <textarea
                  flex-rows="4"
                  className="mt-1 block w-full px-6 py-4 border border-gray-300 rounded-[10px] shadow-sm sm:text-sm"
                  placeholder={`Hi! I'd like to ask about`}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-[50%] bg-customTeal text-white font-light border-2 border-gray-600 rounded-[5px] py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-customTeal focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* services */}
        <div className="hidden lg:block bg-customGray px-28 py-20 xl:-mb-28">
            <div className="flex lg:flex-row lg:justify-between">
                <div className="flex gap-4">
                <GrTrophy className="w-14 h-14 text-gray-800"/>
                <div>
                <h1 className="text-xl font-bold text-zinc-800">High Quality</h1>
                <p className="text-gray-500 font-medium">crafted from top materials</p>
                </div>
                </div>
                <div className="flex gap-4">
                <LuBadgeCheck className="w-14 h-14 text-gray-800"/>
                <div>
                <h1 className="text-xl font-bold text-zinc-800">Warranty Protection</h1>
                <p className="text-gray-500 font-medium">Over 2 years</p>
                </div>
                
                </div>
                <div className="flex gap-4">
                <MdSupportAgent className="w-14 h-14 text-gray-800"/>
                <div>
                <h1 className="text-xl font-bold text-zinc-800">24 / 7 Support</h1>
                <p className="text-gray-500 font-medium">Dedicated support</p>
                </div>
                
                </div>
                </div>
        </div>
        {/* below lg it will be shown in the containers */}
        <div className="block lg:hidden">
        <div className="grid grid-rows-3 grid-col-1 gap-y-10 justify-center">
            
            <div className="flex gap-4 bg-customGray px-5 py-16 sm:px-8 sm:py-20 justify-center rounded-[20px]">
                <GrTrophy className="w-14 h-14 text-gray-800"/>
                <div>
                <h1 className="text-xl font-bold text-zinc-800">High Quality</h1>
                <p className="text-gray-500 font-medium">crafted from top materials</p>
                </div>
                </div>
            
            
            <div className="flex gap-4 bg-customGray px-x py-16 sm:px-8 sm:py-20 justify-center rounded-[20px]">
                <LuBadgeCheck className="w-14 h-14 text-gray-800"/>
                <div>
                <h1 className="text-xl font-bold text-zinc-800">Warranty Protection</h1>
                <p className="text-gray-500 font-medium">Over 2 years</p>
                </div>
            </div>
            
            <div className="flex gap-4 bg-customGray px-x py-16 sm:px-8 sm:py-20 justify-center rounded-[20px]">
                <MdSupportAgent className="w-14 h-14 text-gray-800"/>
                <div>
                <h1 className="text-xl font-bold text-zinc-800">24 / 7 Support</h1>
                <p className="text-gray-500 font-medium">Dedicated support</p>
                </div>
            </div>
        </div>
        </div>
      </main>
    </>
  );
}
