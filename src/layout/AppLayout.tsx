import { Outlet } from "react-router"
import { GiCat } from "react-icons/gi";
import arrow from "../assets/icons/pixel-arrow.png"

export default function AppLayout () {
    return (
        <div className="flex w-full h-screen overflow-hidden bg-custom-black2">
            <div className="absolute inset-0 flex items-center justify-center w-full h-44 mt-4 sm:flex-row">
                <img src={arrow} alt="arrow pointing" className="h-20 w-20 mr-10 animate-bounce-x" />
                <button className="bg-custom-beige2 font-jersey flex flex-row items-center justify-center w-56 h-14 rounded-[30px] shadow-[200px]">
                    <div className="bg-custom-black2 rounded-full h-12 w-12 flex ml-0 mr-3 items-center justify-center pr-1">
                        <GiCat className=" text-custom-beige w-7 h-7 "/>
                    </div>
                    <p className="mr-2 text-[30px]"> Roaming Cats</p>
                </button>
                <div className="rotate-180"><img src={arrow} alt="arrow pointing" className="h-20 w-20 mr-10 animate-bounce-x" /></div>
            </div>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}