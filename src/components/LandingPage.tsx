import profile2 from "../assets/pictures/profile2.png";

export default function LandingPage () {
    return (
        <div className="flex w-screen h-screen items-center justify-center flex-col">
            <div className="mb-[480px] text-center text-[70px] font-jersey text-custom-beige">
                <div className="h-20">
                    <h1>Design-driven</h1>
                </div>
                <div className="flex items-center justify-center my-3 -rotate-[4deg] h-20 w-96 ml-20 bg-custom-beige2 rounded-xl">
                    <h1 className="gradient-text2 animate-gradient text-transparent bg-gradient-to-r">{`{ CLEAN CODE }`}</h1>
                </div>
                <div className="flex items-center justify-center h-12 mb-16">
                    <h1>Seamless experiences</h1>
                </div>
                <div className="absolute inset-0 flex items-center justify-center flex-col mt-96 overflow-hidden">
                    <div className=" h-10 w-[2000px] bg-custom-beige mb-4 flex items-center justify-center border-3 border-custom-beige2">
                        <p className="text-[40px] text-custom-orange tracking-wide font-micro5 ">CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION CAUTION</p>
                    </div>
                    <div className="-rotate-[7deg] overflow-hidden h-10 w-[2000px] bg-custom-beige2 mb-20 flex items-center justify-center "
                        style={{
                        backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 20px, #222222 20px, #222222 40px)"
                    }}>
                        
                    </div>
                    <div className="rotate-[20deg] h-10 w-[2000px] bg-custom-beige mb-8 flex items-center justify-center text-custom-black2">
                        <p className="text-[50px] font-micro5charted">DO NOT CROSS DO NOT CROSS DO NOT CROSS DO NOT CROSS DO NOT CROSS DO NOT CROSS DO NOT CROSS DO NO</p>
                    </div>
                    <div className="-rotate-[16deg] h-10 w-[2000px] bg-custom-beige mb-8"
                        style={{
                        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, #222222 20px, #222222 40px)"
                    }}>

                    </div>
                    <div className="rotate-[10deg] h-10 w-[2000px] bg-custom-beige2 mb-12 flex items-center justify-center">
                        <p className="text-[50px] tracking-wide text-custom-black2 font-jersey">DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER DANGER</p>
                    </div>

                    <div className="-rotate-[7deg] h-20 w-[2000px] bg-custom-beige2 mb-12 flex items-center justify-center overflow-auto z-10">
                        <p className="text-[70px] text-custom-orange tracking-wide font-micro5charted "> WEBDEV DETECTED WEBDEV DETECTED WEBDEV DETECTED WEBDEV DETECTED WEBDEV</p>

                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center absolute inset-0 flex-col z-2">
                <img src={profile2} alt="profile picture of the account" className="mt-[330px] ml-11 w-[437px] h-[600px] " />
            </div>
            
            
        </div>
    )
}