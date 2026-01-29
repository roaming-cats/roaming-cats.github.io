import { FaQuestion } from "react-icons/fa";

export default function AboutPage () {
    return (
        <div className="flex items-center justify-center font-jersey text-custom-beige flex-col">
            <div className="flex flex-row">
                <p className="text-[50px] mt-28 leading-none">ABOUT ME</p>
                <FaQuestion className="size-8 mt-[120px] ml-1 rotate-[15deg]"/>
            </div>
            <hr className="h-px w-screen bg-custom-beige/10 mt-10"/>
            <div className="relative">
                <div className="flex items-center absolute mt-11 ml-[2px] justify-center h-12 w-[275px] bg-custom-orange  title-rect">
                    <p className="font-jersey text-[40px]">WHO AM I?</p>
                </div>
                <div className="rect2 flex justify-start p-5 pt-[70px] items-start h-[500px] w-[500px] mt-10 rounded-3xl shadow-xl bg-custom-beige2/80"> 
                    <p className="text-xl text-center text-custom-black2">My name is Joriz Aaron Manalo Enriquez, and I am a third-year student at City College of Angeles with a strong academic interest in technology and interactive systems. I have always been drawn to games not merely as a form of entertainment, but as complex systems that integrate logic, creativity, and user interaction. This perspective shapes how I approach academic projects and problem-solving, encouraging both analytical thinking and innovative design. I’m constantly focused on improving my skills, learning new technologies, and refining my understanding of both web development and computer science concepts. Whether it’s through coursework, personal projects, or experimentation, I’m always looking for opportunities to grow, challenge myself, and become a better developer.</p>
                </div>
            </div>

            <p className="absolute mt-[280px] font-extrabold font-jersey text-[55px] text-custom-orange">EDUCATION</p>
            <div className="flex items-center text-custom-black2  justify-start h-40 w-[500px] bg-custom-beige2/80 rounded-[25px] mb-16 mt-10 flex-col">
                <h1 className="text-[30px] mt-5">Bachelor of Science in Computer Science</h1>
                <p className="text-[25px]">City College of Angeles</p>
                <p className="text-[25px]">2023-Present</p>
            </div>

            <p className="absolute mt-[800px] font-jersey font-extrabold text-[55px] text-custom-orange">CONTACT</p>
            <div className="flex items-center text-custom-black2  justify-start h-40 w-[500px] bg-custom-beige2/80 rounded-[25px] mb-20 mt-8 flex-col">
                <h1 className="text-[25px] mt-3">catsoinabox39@gmail.com</h1>
                <p className="text-[25px]">aaronenriquez2104@gmail.com</p>
                <p className="text-[25px]">#09927943255</p>
                <p className="text-[25px]">Messenger: Aaron Enriquez</p>
            </div>

        </div>
    )
}