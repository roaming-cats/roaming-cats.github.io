import { useNavigate } from "react-router"

export default function NavigationPage () {
    const navigation = useNavigate()
    
    return (
        <div className="flex w-full h-screen items-center justify-center bg-custom-beige2/40 flex-col">

            <div className="flex flex-row items-center mb-5">
                <button onClick={() => navigation('/')} className="peer order-2 text-[30px] font-jersey text-custom-black2 mx-5">HOME</button>
                <hr className="order-1 h-1 w-20 bg-custom-black2 border-none opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out"/>
                <hr className="order-3 h-1 w-20 bg-custom-black2 border-none opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out"/>
            </div>
            <div className="flex flex-row mb-5">
                <button onClick={() => navigation('/about')} className="peer order-2 text-[30px] font-jersey text-custom-black2 mx-5">ABOUT</button>
                <hr className="order-1 h-1 w-20 mt-5 bg-custom-black2 border-none opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out"/>
                <hr className="order-3 h-1 w-20 mt-5 bg-custom-black2 border-none opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out"/>
            </div>

            <div className="flex flex-row mb-5">
                <button onClick={() => navigation('/projects')} className="peer order-2 text-[30px] font-jersey text-custom-black2 mx-5">PROJECTS</button>
                <hr className="order-1 h-1 w-20 mt-5 bg-custom-black2 border-none opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out"/>
                <hr className="order-3 h-1 w-20 mt-5 bg-custom-black2 border-none opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out"/>
            </div>

            <div className="flex flex-row mb-5">
                <button onClick={() => navigation('/activities')} className="peer order-2 text-[30px] font-jersey text-custom-black2 mx-5">ACTIVITIES</button>
                <hr className="order-1 h-1 w-20 mt-5 bg-custom-black2 border-none opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out"/>
                <hr className="order-3 h-1 w-20 mt-5 bg-custom-black2 border-none opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out"/>
            </div>

            <div className="flex flex-row mb-5">
                <button onClick={() => navigation(-1)} className="peer order-2 text-[30px] font-jersey text-custom-black2 mx-5">BACK</button>
                <hr className="order-1 h-1 w-20 mt-5 bg-custom-black2 border-none opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out"/>
                <hr className="order-3 h-1 w-20 mt-5 bg-custom-black2 border-none opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out"/>
            </div>

        </div>
    )
}