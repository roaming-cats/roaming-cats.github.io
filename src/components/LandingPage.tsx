import profile2 from "../assets/pictures/profile2.png";

export default function LandingPage () {
    return (
        <div className="flex w-screen h-screen items-center justify-center flex-col">
            <div className="mb-[480px] text-center text-[70px] font-jersey text-custom-beige">
                <div className="flex flex-col xl:flex-row 2xl:mb-16">
                    <div className="h-20 2xl:">
                        <h1>Design-driven</h1>
                    </div>
                    <div className="flex items-center justify-center my-3 sm:-rotate-[4deg] lg:rotate-0 h-20 w-96 mx-20 bg-custom-beige2 rounded-xl xl:w-[700px]">
                        <h1 className="gradient-text2 animate-gradient text-transparent bg-gradient-to-r">
                            <p className="sm:hidden xl:block">{`{ SEAMLESS EXPERIENCES }`}</p>
                            <p className="sm:block xl:hidden">{`{ CLEAN CODE }`}</p>
                        </h1>
                    </div>
                    <div className="flex items-center justify-center h-12 mb-16 xl:mt-6">
                        <h1 className="sm:hidden xl:block">Clean code</h1>
                        <h1 className="sm:block xl:hidden">Seamless experiences</h1>
                    </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center flex-col mt-96 overflow-hidden">
                    <div className=" h-10 w-[3000px] bg-custom-beige mb-4 flex items-center justify-center border-3 border-custom-beige2">
                        <p className="text-[40px] text-custom-orange tracking-wide font-micro5 ">CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION</p>
                    </div>
                    <div className="-rotate-[7deg] overflow-hidden h-10 w-[3000px] bg-custom-beige2 mb-20 flex items-center justify-center "
                        style={{
                        backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 20px, #222222 20px, #222222 40px)"
                    }}>
                        
                    </div>
                    <div className="sm:rotate-[20deg] lg:rotate-[10deg] h-10 w-[3000px] bg-custom-beige mb-8 flex items-center justify-center text-custom-black2">
                        <p className="text-[50px] font-micro5charted">DO NOT CROSS DO NOT CROSS DO NOT CROSS DO NOT CROSS DO NOT CROSS DO NOT CROSS DO NOT CROSS DO NO CROSS DO NOT CROSS DO NOT CROSS DO NOT CROSS DO NOT CROSS</p>
                    </div>
                    <div className="-rotate-[16deg] h-10 w-[3000px] bg-custom-beige mb-8 z-10"
                        style={{
                        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, #222222 20px, #222222 40px)"
                    }}>

                    </div>
                    <div className="rotate-[10deg] h-10 w-[3000px] bg-custom-beige2 mb-12 flex items-center justify-center z-10">
                        <p className="text-[50px] tracking-wide text-custom-black2 font-jersey">DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER</p>
                    </div>

                    <div className="-rotate-[7deg] h-20 w-[3000px] bg-custom-beige2 mb-12 flex items-center justify-center z-30 ">
                        <p className="text-[70px] text-custom-orange tracking-wide font-micro5charted gradient-text2 animate-gradient text-transparent">WEBDEV DETECTED WEBDEV DETECTED WEBDEV DETECTED WEBDEV DETECTED WEBDEV DETECTED WEBDEV DETECTED WEBDEV</p>

                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center absolute inset-0 flex-col z-20 overflow-hidden">
                <img src={profile2} alt="profile picture of the account" className="sm:mt-[435px] xl:mt-[405px] ml-11 w-[437px] h-[600px] " />
                <div className="xl:h-40 sm:h-32 w-[3000px] bg-black z-50"></div>
            </div>
            
            
        </div>
    )
}