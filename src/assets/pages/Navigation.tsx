import { useNavigate } from "react-router"

interface Props  {
    onClose : () => void;
}

export default function NavigationPage ( { onClose } : Props ) {
    const navigation = useNavigate()

    const items = [
        {name : "HOME", navTo : "/"},
        {name : "ABOUT", navTo : "/about"},
        {name : "PROJECTS", navTo : "/projects"},
        {name : "ACTIVITIES", navTo : "/activities"},
        {name : "CERTIFICATIONS", navTo : "/certifications"}
    ]

    const handleNav = (path : string) => {
        navigation(path)
        onClose();
    }
    
    return (
        <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-md transition-all duration-300">
            <div className="flex w-full h-screen items-center justify-center bg-custom-beige2 flex-col lg:w-[550px] lg:h-[550px] rounded-3xl mt-4">

                {
                    items.map((item) => (
                        <div key={item.name} className="flex flex-row items-center my-5">
                            <button onClick={() => handleNav(item.navTo)} className="peer order-2 text-[30px] font-jersey text-custom-black2 mx-5">{item.name}</button>
                            <hr className="order-1 h-1 w-20 bg-custom-black2 border-none opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out"/>
                            <hr className="order-3 h-1 w-20 bg-custom-black2 border-none opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out"/>
                        </div>
                    ))
                }
           
                <div className="flex flex-row my-5">
                    <button onClick={onClose} className="peer order-2 text-[30px] font-jersey text-custom-black2 mx-5">BACK</button>
                    <hr className="order-1 h-1 w-20 mt-5 bg-custom-black2 border-none opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out"/>
                    <hr className="order-3 h-1 w-20 mt-5 bg-custom-black2 border-none opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out"/>
                </div>
            </div>
        </div>
    )
}