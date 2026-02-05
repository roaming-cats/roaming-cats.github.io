import { GiCat } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { Outlet } from "react-router";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { useEffect, useState } from "react";
import Navigation from '../assets/pages/Navigation';

export default function AppLayout () {
    const navigate                = useNavigate();
    const [openMenu, setOpenMenu] = useState(false);
    const { pathname }            = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    const handleExternalLinks = (link : string) : void => {
        switch (link) {
            case "github": 
                window.open("https://github.com/roaming-cats", '_blank', 'noopener noreferrer')
                break
            case "gmail":
                const email = "catsoinabox39@gmail.com" 
                const encodedSubject = encodeURIComponent("...");
                const encodedBody = encodeURIComponent("...");
                const url = `https://mail.google.com/mail/?view=cm&fs=1&su=${encodedSubject}&to=${email}&body=${encodedBody}`;
                window.open(url, '_blank', 'noopener noreferrer')
                break
            case "linkedin":
                window.open("https://www.linkedin.com/in/aaron-enriquez-1215b43a6/", '_blank', 'noopener noreferrer')
                break
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-custom-black2">
            <div className="fixed top-0 left-0 z-50 w-full h-20 bg-custom-black2/50 backdrop-blur-sm flex items-center justify-between px-4">
                
                <button onClick={() => navigate('/')} className="flex">
                    <div className="bg-black/20 rounded-full h-11 w-11 flex ml-0 flex-col items-center justify-center pr-0.5">
                        <GiCat className=" text-custom-beige w-6 h-6"/>
                    </div>
                </button>
                <p className="text-[30px] gradient-text2 animate-gradient text-transparent font-jersey bg-gradient-to-r"> Roaming Cats</p>

                <button onClick={() => setOpenMenu(true)} className="bg-custom-black2/40 hover:bg-black/20 text-custom-beige flex items-center justify-center w-12 h-12 rounded-full transition-colors">
                    <RxHamburgerMenu className="size-7 text-custom-beige"/>
                </button>
            </div>
            <main>
                <Outlet />
            </main>

            <hr className="h-px w-full bg-custom-beige/10 mb-10"/>

            <div className="flex items-center justify-center mb-5 ">
                <button onClick={() => handleExternalLinks("github")} className="animate-color-pulse flex items-center justify-center mr-5 h-12 w-12 rounded-full drop-shadow-xl bg-custom-beige2">
                    <FaGithub className="size-8"/>
                </button>
                <button onClick={() => handleExternalLinks("gmail")} className="animate-color-pulse flex items-center justify-center h-12 w-12 mr-5 rounded-full drop-shadow-xl bg-custom-beige2">
                    <BiLogoGmail className="size-8"/>
                </button>
                <button onClick={() => handleExternalLinks("linkedin")} className="animate-color-pulse flex items-center justify-center h-12 w-12 rounded-full drop-shadow-xl bg-custom-beige2">
                    <FaLinkedinIn className="size-8"/>
                </button>
            </div>
            <p className="mb-5 text-custom-beige">roaming-cats | All rights reserved 2026</p>

            {
                openMenu && (
                    <Navigation onClose={() => setOpenMenu(false)}/>
                )
            }
        </div>
    )
}
