import Image from "next/image"

export default function Cart(){
    return(
        <>
        <main className="max-w-screen-2xl mx-auto lg:px-28">
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="flex flex-row w-[100%] lg:w-[50%]">
                    <h1>Bag</h1>
                    <div>
                        <Image className="w-[70%] h-[70%]" src={"/images/HomePage/featured3.png"} alt="orange chair" width={500} height={500}/>
                    </div>
                    <div></div>
                </div>
                <div className="w-[100%] lg:w-[50%]">
                    <h1>Summary</h1>

                </div>
            </div>
        </main>
        </>
    )
}
