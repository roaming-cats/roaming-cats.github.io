import { Outlet } from "react-router"


export default function AppLayout () {
    return (
        <div className="flex w-full h-screen overflow-hidden bg-custom-black2">

            <main>
                <Outlet/>
            </main>
        </div>
    )
}