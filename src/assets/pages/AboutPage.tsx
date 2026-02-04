import { FaQuestion } from "react-icons/fa";

export default function AboutPage () {
    return (
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 mt-32 pb-20 font-jersey overflow-x-hidden">

            <div className="flex flex-row text-custom-beige justify-center items-center">
                <p className="text-4xl md:text-[50px] leading-none">ABOUT ME</p>
                <FaQuestion className="size-6 md:size-8 mt-1 ml-1 rotate-[15deg]"/>
            </div>
            
            <hr className="h-px w-full bg-custom-beige mt-10"/>

            <div className="flex justify-center w-full mt-10 mb-16">    
                <div className="relative w-full max-w-[500px] md:max-w-[700px]">
                    <div className="absolute top-0 left-0 z-10 flex items-center justify-center h-10 md:h-12 w-[200px] md:w-[275px] bg-custom-orange rounded-t-xl md:rounded-t-xl">
                        <p className="font-jersey text-2xl md:text-[40px]">WHO AM I?</p>
                    </div>

                    <div className="relative z-0 mt-5 w-full bg-custom-beige2/80 rounded-3xl shadow-xl p-6 pt-16 md:pt-[70px]">
                        <p className="text-lg md:text-xl text-center text-custom-black2">
                            My name is Joriz Aaron Manalo Enriquez, and I am a third-year student at City College of Angeles with a strong academic interest in technology and interactive systems. I have always been drawn to games not merely as a form of entertainment, but as complex systems that integrate logic, creativity, and user interaction. This perspective shapes how I approach academic projects and problem-solving, encouraging both analytical thinking and innovative design. I’m constantly focused on improving my skills, learning new technologies, and refining my understanding of both web development and computer science concepts. Whether it’s through coursework, personal projects, or experimentation, I’m always looking for opportunities to grow, challenge myself, and become a better developer.
                        </p>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                
                <div className="flex flex-col items-center w-full">
                    <p className="font-extrabold font-jersey text-4xl md:text-[55px] text-center text-custom-orange mb-4">EDUCATION</p>
                    <div className="flex flex-col items-center justify-center w-full max-w-[500px] mx-auto p-8 bg-custom-beige2/80 rounded-[25px] text-custom-black2">
                        <h1 className="text-2xl md:text-[30px] text-center font-bold">Bachelor of Science in Computer Science</h1>
                        <p className="text-xl md:text-[25px] mt-2">City College of Angeles</p>
                        <p className="text-xl md:text-[25px]">2023-Present</p>
                    </div>
                </div>

                <div className="flex flex-col items-center w-full">
                    <p className="font-jersey font-extrabold text-4xl md:text-[55px] text-center text-custom-orange mb-4">CONTACT</p>
                    <div className="flex flex-col items-center justify-center w-full max-w-[500px] mx-auto p-8 bg-custom-beige2/80 rounded-[25px] text-custom-black2 break-words">
                        <h1 className="text-xl md:text-[30px] break-all text-center">catsoinabox39@gmail.com</h1>
                        <p className="text-lg md:text-[25px] mt-2 text-center">aaronenriquez2104@gmail.com</p>
                        <p className="text-xl md:text-[25px] mt-2">#09927943255</p>
                        <p className="text-xl md:text-[25px]">Messenger: Aaron Enriquez</p>
                    </div>
                </div>

            </div>
        </div>
    )
}