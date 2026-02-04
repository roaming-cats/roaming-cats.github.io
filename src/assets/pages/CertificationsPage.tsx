import { certificateSlides } from "./ProfilePage"

export default function CertificationsPage () {
    return (
        <div className="max-w-[1200px] w-screen mx-auto px-5 mt-28 pb-20 font-jersey">
            
            <h1 className="text-4xl text-center text-custom-beige mb-4">CERTIFICATIONS</h1>
            <hr className="h-px bg-custom-beige mb-10"/>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {certificateSlides.map((item, index) => (
                    <div key={index} className="flex flex-col w-full">
                        
                        <h2 className="text-3xl text-custom-beige mb-4">
                            {item.name}
                        </h2>

                        <div className="flex w-full aspect-square bg-custom-black2 rounded-xl overflow-hidden shadow-lg">
                            
                            <img 
                                src={item.certificate} 
                                className="w-full h-full object-cover" 
                                alt={item.name} 
                            />
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}