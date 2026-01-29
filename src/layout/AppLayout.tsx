import { GiCat } from "react-icons/gi";
import { useNavigate } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { Outlet } from "react-router";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

export default function AppLayout () {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-custom-black2">
            <div className="fixed z-50 inset-0 flex items-center justify-center w-full h-20 sm:flex-row bg-custom-black2/50">
                
                <button onClick={() => navigate('/')} className="flex">
                    <div className="bg-black/20 rounded-full h-11 w-11 flex ml-0 flex-col items-center justify-center pr-0.5">
                        <GiCat className=" text-custom-beige w-6 h-6"/>
                    </div>
                </button>
                <p className="text-[30px] gradient-text2 animate-gradient text-transparent font-jersey bg-gradient-to-r mr-[350px] ml-4 w-36"> Roaming Cats</p>

                <button onClick={() => navigate("/navigation")} className="bg-custom-black2/40 z-50 hover:bg-black/20 font-jersey flex flex-row items-center justify-center w-16 h-16 rounded-full shadow-[200px]">
                    <RxHamburgerMenu className="size-7 text-custom-beige"/>
                </button>
            </div>
            <main>
                <Outlet />
            </main>

            <hr className="h-px w-full bg-custom-beige/10 mb-10"/>

            <div className="flex items-center justify-center mb-5 ">
                <button className="animate-color-pulse flex items-center justify-center mr-5 h-12 w-12 rounded-full drop-shadow-xl bg-custom-beige2">
                    <FaGithub className="size-8"/>
                </button>
                <button className="animate-color-pulse flex items-center justify-center h-12 w-12 mr-5 rounded-full drop-shadow-xl bg-custom-beige2">
                    <BiLogoGmail className="size-8"/>
                </button>
                <button className="animate-color-pulse flex items-center justify-center h-12 w-12 rounded-full drop-shadow-xl bg-custom-beige2">
                    <FaLinkedinIn className="size-8"/>
                </button>
            </div>
            <p className="mb-5 text-custom-beige">roaming-cats | All rights reserved 2026</p>
        </div>
    )
}
