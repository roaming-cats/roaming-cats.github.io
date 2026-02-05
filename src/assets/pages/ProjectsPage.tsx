import { projectSlides } from "./ProfilePage"

export default function ProjectsPage () {
    return (
        <div className="max-w-[1200px] w-screen mx-auto px-5 mt-28 pb-20 font-jersey">
            
            <h1 className="text-4xl text-center text-custom-beige mb-4">PROJECTS</h1>
            <p className="text-custom-beige text-xl text-center my-4 mb-10">This section presents my personal projects, reflecting the skills, creativity, and practical experience I gained through self-directed learning and experimentation.</p>
            <hr className="h-px w-full bg-custom-beige mb-10"/>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                
                {projectSlides.map((item, index) => (
                    <div key={index} className="flex flex-col w-full p-5">
                        
                        <h2 className="text-3xl text-center text-custom-beige mb-4">
                            {item.name}
                        </h2>

                            <div  className="flex w-full aspect-square rounded-xl overflow-hidden rgb-glow relative group">
                                <h1 className="hidden text-3xl w-full h-20 opacity-0 absolute inset-0 lg:flex lg:items-center lg:justify-center font-bold z-50 text-custom-black2 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">CLICK TO VIEW</h1>
                                <img
                                    src={item.project}
                                    className="w-full h-full object-cover"
                                    alt={item.name}
                                />
                            </div>

                            <div className="flex relative text-xl items-center w-full rounded-xl mt-5 p-7 bg-custom-beige2/90 border-2 border-custom-beige">
                                {item.desc}
                                <a href="" className="absolute bottom-0 right-0 mr-2 text-custom-orange lg:hidden">CLICK TO VIEW</a>
                            </div>
                    </div>
                ))}

            </div>
        </div>
    )
}