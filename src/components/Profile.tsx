import profile from "../assets/pictures/profile1.png"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import Carousel from "./Carousel";
import empty from "../assets/icons/empty.svg"

export default function Profile () {

    const slides = [
        empty, empty, empty, empty, empty, empty, empty, empty, empty
    ]

    return (
        <div className="min-h-screen w-full flex items-center justify-start mt-16 flex-col">
            <div className="flex items-center justify-center absolute h-11 w-[200px] bg-custom-beige/80 mr-[240px] mt-11 title-rect">
                <p className="font-micro5charted text-[40px]">Roaming Cats</p>
            </div> 
            <div className="rect flex justify-center items-center h-[600px] w-[500px] mt-10 ml-14 rounded-3xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('${profile}')`}}></div>  
            <hr className="h-px w-96 bg-custom-beige2 mt-7"/>
            <hr className="h-px w-72 bg-custom-beige2 mt-5"/>
            <div className=" flex font-jersey items-start pl-5 justify-start h-24 border-2 border-black w-[600px] mt-7 rounded-3xl bg-custom-beige2/80 flex-col shadow-2xl">
                <div className="flex flex-row">
                    <p className="text-custom-orange mt-6 text-3xl leading-none mb-0 mr-3 ml-5">Hello, I'm</p>
                    <p className="text-[50px] mt-2 leading-none">Joriz Aaron M. Enriquez</p>
                </div>
                <p className="text-xl ml-24">Computer Science Student at City College of Angeles</p>
            </div>

            
            <div className="h-[500px] w-full font-jersey flex items-center justify-start bg-black/15 mt-24 flex-col">
                <h1 className="text-custom-beige2 mt-3 text-[35px]">About Me</h1>
                <p className="text-custom-beige text-[22px] text-center px-6 mt-3 ">I’m an undergraduate Computer Science student with a strong interest in web development, where I enjoy turning ideas into functional and engaging digital experiences. I’ve always loved games for the creativity and problem-solving they inspire, and I bring that same curiosity into my work and studies. Outside of coding, I’m an avid reader of fantasy novels, which fuels my imagination and appreciation for good storytelling. I’m constantly working to improve my technical skills, learn new tools, and grow both as a developer and a problem solver, always looking for ways to challenge myself and build better solutions...</p>
                <button className="h-11 w-44 rounded-xl text-[20px] mt-6 bg-custom-orange drop-shadow-xl">Continue Reading</button>
            </div>

            <h1 className="text-[50px] font-jersey mb-6 flex items-center justify-center mt-20 text-custom-beige">My Projects</h1>
            <div className="w-full h-[800px] flex items-center justify-center bg-black">
                <div className="h-[400px] w-[500px] mb-40 mt-10 bg-black">
                    <Carousel autoSlide={true}>
                        {slides.map((s) => (
                            <img src={s}  alt="activities" />
                        ))}
                    </Carousel>
                </div>
            </div>

            <button className="h-11 w-44 rounded-xl text-[20px] mt-6 mb-20 bg-custom-orange drop-shadow-xl">View In Detail</button>


            <hr className="h-px w-full bg-custom-beige/10 mb-10"/>
            
            <div className="flex items-center justify-center mb-5 ">
                
                <button className="animate-color-pulse flex items-center justify-center mr-5 h-12 w-12 rounded-full drop-shadow-xl bg-custom-beige2">
                    <FaGithub className="size-8"/>
                </button>
                <button className="animate-color-pulse flex items-center justify-center h-12 w-12 mr-5 rounded-full drop-shadow-xl bg-custom-beige2">
                    <BiLogoGmail className="size-8"/>
                </button>
                <button className="animate-color-pulse flex items-center justify-center h-12 w-12 rounded-full drop-shadow-xl bg-custom-beige2">
                    <FaLinkedinIn className="size-8"/>
                </button>
            </div>
            <p className="mb-5 text-custom-beige">roaming-cats | All rights reserved 2026</p>
        </div>
    )
}