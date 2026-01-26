import { Outlet } from "react-router"
import { GiCat } from "react-icons/gi";

export default function AppLayout () {
    return (
        <div className="flex items-start justify-start w-full h-screen bg-custom-black2">
            <div className="lg:hidden absolute inset-0 flex items-center justify-center w-full h-16 mt-4">
                <button className="bg-custom-beige2 font-jersey flex flex-row items-center justify-center w-44 h-11 rounded-[30px] shadow-[200px]">
                    <div className="bg-custom-black2 rounded-full h-10 w-10 flex ml-0 mr-3 items-center justify-center pr-1">
                        <GiCat className=" text-custom-beige w-7 h-7 "/>
                    </div>
                    <p className="gradient-text animate-gradient text-transparent bg-gradient-to-r mr-2 text-2xl"> Roaming Cats</p>
                </button>
            </div>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}