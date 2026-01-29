import { GiCat } from "react-icons/gi";
import { useNavigate } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import Profile from '../components/Profile';


export default function AppLayout () {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col w-full min-h-screen bg-custom-black2">
            <div className="fixed z-50 inset-0 flex items-center justify-center w-full h-20 sm:flex-row bg-custom-black2/50">
                
                <button className="flex">
                    <div className="bg-black/20 rounded-full h-11 w-11 flex ml-0 flex-col items-center justify-center pr-0.5">
                        <GiCat className=" text-custom-beige w-6 h-6"/>
                    </div>
                </button>
                <p className="text-[30px] gradient-text2 animate-gradient text-transparent font-jersey bg-gradient-to-r mr-[350px] ml-4 w-36"> Roaming Cats</p>

                <button onClick={() => navigate("/profile")} className="bg-custom-black2/40 z-50 hover:bg-black/20 font-jersey flex flex-row items-center justify-center w-16 h-16 rounded-full shadow-[200px]">
                    <RxHamburgerMenu className="size-7 text-custom-beige"/>
                </button>
            </div>
            <main>
                
                <Profile/>
            </main>
        </div>
    )
}
