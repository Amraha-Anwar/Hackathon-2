import { MapPin } from "lucide-react"
import { Phone } from "lucide-react"
import { Clock } from "lucide-react"

export default function Contact(){
    return(
        <>
        <main className="max-w-screen-2xl mx-auto lg:px-28">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl text-black text-center pt-14">Get In Touch With Us</h1>
            <p className="text-center pt-4 lg:pt-4 text-gray-500 lg:px-56">For more information About Our Product & Services. Please Feel Free to Drop Us An Email. Our Staff Always Be There To Help You Out. Not Hesitate!</p>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:px-44">
                <div>
                <div className="flex flex-col gap-y-40">
                <MapPin color="#000000"/>
                <Phone color="#000000" />
                <Clock color="#000000" />
                </div>
                <div className=" lg:pl-14 lg:pt-[-10rem]">
                <div ><h1 className="text-2xl font-bold">Address</h1>
                <p className="text-gray-800 font-medium">236 5th SE Avenue, NEW YORK NY10000, United States</p></div>
               <div><h1 className="text-2xl font-bold">Phone</h1>
               <p className="text-gray-800 font-medium">{`Mobile: +(84) 546-6789`}</p>
               <p className="text-gray-800 font-medium">{`Hotline: +(84) 546-6789`}</p></div>
               <div>
               <h1 className="text-2xl font-bold">Working Time</h1>
               <p className="text-gray-800 font-medium">{ `Montay-Friday: 9:00 - 22:00`}</p>
               <p className="text-gray-800 font-medium">{ `Saturday-Sunday: 9:00 - 21:00`}</p>
               </div>

                </div>
                </div>
                <div></div>
            </div>
        </main>
        </>
    )
}