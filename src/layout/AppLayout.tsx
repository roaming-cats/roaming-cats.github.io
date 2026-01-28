import { GiCat } from "react-icons/gi";
import { useNavigate } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import LandingPage from '../components/LandingPage';
import Profile from '../components/Profile';


export default function AppLayout () {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col w-full min-h-screen bg-custom-black2">
            <div className="fixed z-50 inset-0 flex items-center justify-center w-full h-36 sm:flex-row">
                <button onClick={() => navigate("/profile")} className="bg-custom-beige2 z-50 hover:bg-custom-beige font-jersey flex flex-row items-center justify-center w-64 h-[50px] rounded-[33px] shadow-[200px] mb-10">
                    <div className="bg-custom-black2 rounded-full h-11 w-11 flex ml-0 mr-3 items-center justify-center pr-1">
                        <GiCat className=" text-custom-beige w-6 h-6 "/>
                    </div>
                    <p className="mr-2 text-[30px] gradient-text animate-gradient text-transparent bg-gradient-to-r"> Roaming Cats</p>
                    <RxHamburgerMenu className="size-7 mr-2 ml-1"/>
                </button>
            </div>
            <main>
                <LandingPage/>
                <Profile/>
            </main>
        </div>
    )
}