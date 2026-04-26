import { certificateSlides } from "./ProfilePage"

export default function CertificationsPage () {
    return (
        <div className="max-w-[1200px] w-screen mx-auto px-5 mt-28 pb-20 font-jersey">
            
            <h1 className="text-4xl text-center text-custom-beige mb-4">CERTIFICATIONS</h1>
            <p className="text-custom-beige text-xl text-center my-4 mb-10">This section highlights the certifications I have earned, demonstrating my commitment to continuous learning and the development of relevant skills.</p>
            <hr className="h-px w-full bg-custom-beige mb-10"/>

            <div className="w-full flex flex-col gap-4 ">
                {certificateSlides.map((item, index) => (
                    <div key={index} className="flex w-full items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                        <div className="flex items-center gap-4 flex-grow">

                            <div className="w-40 h-40 flex-shrink-0 overflow-hidden rounded-lg">
                            <img
                                src={item.certificate}
                                alt={item.name}
                                className="w-full h-full object-cover"
                            />
                            </div>

                            <div className="pl-5 text-4xl flex flex-col">
                                <h2 className="font-semibold text-gray-800">
                                    {item.name}
                                </h2>
                                <p className="text-xl text-gray-500 line-clamp-2 max-w-xl">
                                    {item.desc}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-2">

                            <div className="text-xl pr-3 flex gap-2">
                            <button className="px-4 py-1 text-white bg-black rounded-full hover:bg-gray-800">
                                Click to View
                            </button>

                            </div>
                        </div>
                        </div>
                    ))}

            </div>
        </div>
    )
}