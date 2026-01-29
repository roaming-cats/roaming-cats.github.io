import profile from "../pictures/profile1.png"
import Carousel from "../../components/Carousel";
import empty from "../icons/empty.svg"
import c from "../icons/icons8-c-programming.svg";
import css from "../icons/icons8-css.svg";
import firebase from "../icons/icons8-firebase.svg";
import haskell from "../icons/icons8-haskell.svg";
import html from "../icons/icons8-html.svg";
import js from "../icons/icons8-javascript.svg";
import mysql from "../icons/icons8-mysql-50.png";
import py from "../icons/icons8-python.svg";
import react from "../icons/icons8-react-40.png";
import tailwind from "../icons/icons8-tailwind-css.svg";
import ts from "../icons/icons8-typescript.svg";


export default function Profile () {

    const slides = [
        empty, empty, empty, empty, empty, empty, empty, empty, empty
    ]

    return (
        <div className="min-h-screen w-full flex items-center justify-start mt-16 flex-col">
            <div className="flex items-center justify-center absolute h-11 w-[200px] bg-custom-beige/80 mr-[240px] mt-11 title-rect">
                <p className="font-micro5charted text-[40px]">Roaming Cats</p>
            </div> 
            <div className="rect flex justify-center items-center h-[600px] w-[500px] mt-10 ml-14 rounded-3xl shadow-lg bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('${profile}')`}}></div>  
            <hr className="h-px w-96 bg-custom-beige2 mt-7"/>
            <hr className="h-px w-72 bg-custom-beige2 mt-5"/>
            <div className=" flex font-jersey items-start pl-5 justify-start h-24 border-2 border-black w-[600px] mt-7 rounded-3xl bg-custom-beige2/80 flex-col shadow-2xl">
                <div className="flex flex-row">
                    <p className="text-custom-orange mt-6 text-3xl leading-none mb-0 mr-3 ml-5">Hello, I'm</p>
                    <p className="text-[50px] mt-2 leading-none">Joriz Aaron M. Enriquez</p>
                </div>
                <p className="text-xl ml-24">Computer Science Student at City College of Angeles</p>
            </div>
            
            <h1 className="font-jersey text-[50px] text-custom-beige2 mt-24">Tech Stack</h1>
            <div className="flex items-center justify-center h-28 w-full flex-col">
                <div className="flex flex-row mt-60 mb-7">
                    <img src={ts} alt="typescript" className="mr-5 size-20"/>
                    <img src={py} alt="python" className="mr-5 size-20"/>
                    <img src={haskell} alt="haskell" className="mr-5 size-20"/>
                    <img src={c} alt="c" className="mr-5 size-20"/>
                    <img src={js} alt="js" className=" size-20"/>
                </div>

                <hr className="h-px w-96 bg-custom-beige2 mt-7"/>

                <div className="flex flex-row mt-16 ">
                    <img src={html} alt="html" className="mr-5 size-20"/>
                    <img src={css} alt="css" className="mr-5 size-20"/>
                    <img src={tailwind} alt="tailwind" className="mr-5 size-20"/>
                    <img src={react} alt="react" className="mr-5 size-20"/>
                    <img src={mysql} alt="mysql" className="mr-5 size-20"/>
                    <img src={firebase} alt="firebase" className=" size-20"/>
                </div>

            </div>
            
            <div className="h-[500px] w-full font-jersey flex items-center justify-start bg-black/15 mt-72 flex-col">
                <h1 className="text-custom-beige2 mt-10 text-[35px]">About Me</h1>
                <p className="text-custom-beige text-[22px] text-center px-6 mt-3 ">I’m an undergraduate Computer Science student with a strong interest in web development, where I enjoy turning ideas into functional and engaging digital experiences. I’ve always loved games for the creativity and problem-solving they inspire, and I bring that same curiosity into my work and studies. Outside of coding, I’m an avid reader of fantasy novels, which fuels my imagination and appreciation for good storytelling. I’m constantly working to improve my technical skills, learn new tools, and grow both as a developer and a problem solver, always looking for ways to challenge myself and build better solutions...</p>
                <button className="h-11 w-44 rounded-xl text-[20px] mt-6 bg-custom-orange drop-shadow-xl">Continue Reading</button>
            </div>

            <h1 className="text-[50px] font-jersey mb-6 flex items-center justify-center mt-20 text-custom-beige">Projects</h1>
            <div className="w-[550px] h-[550px] rounded-3xl flex items-center justify-center bg-black/15">
                <div className="h-[400px] w-[500px] mb-40 mt-16 bg-black">
                    <Carousel autoSlide={true}>
                        {slides.map((s) => (
                            <img src={s}  alt="activities" />
                        ))}
                    </Carousel>
                </div>
            </div>
        
            <button className="h-11 w-44 rounded-xl text-[20px] mt-6  bg-custom-orange drop-shadow-xl">View In Detail</button>            

            <hr className="h-px w-full bg-custom-beige/10 mt-20"/>

            <h1 className="text-[50px] font-jersey mb-6 flex items-center justify-center mt-20 text-custom-beige">Activities</h1>
            <div className="w-[550px] h-[550px] rounded-3xl flex items-center justify-center bg-black/15">
                <div className="h-[400px] w-[500px] mb-40 mt-16 bg-black">
                    <Carousel autoSlide={true}>
                        {slides.map((s) => (
                            <img src={s}  alt="activities" />
                        ))}
                    </Carousel>
                </div>
            </div>

            <button className="h-11 w-44 rounded-xl text-[20px] mt-6  bg-custom-orange drop-shadow-xl">View In Detail</button>            

            <hr className="h-px w-full bg-custom-beige mt-20"/>


            <h1 className="text-[50px] font-jersey mb-6 flex items-center justify-center mt-20 text-custom-beige">Certifications</h1>
            <div className="w-[550px] h-[550px] rounded-3xl flex items-center justify-center bg-black/15">
                <div className="h-[400px] w-[500px] mb-40 mt-16 bg-black">
                    <Carousel autoSlide={true}>
                        {slides.map((s) => (
                            <img src={s}  alt="activities" />
                        ))}
                    </Carousel>
                </div>
            </div>

            <button className="h-11 w-44 rounded-xl text-[20px] mt-6 mb-44 bg-custom-orange drop-shadow-xl">View In Detail</button>            

        </div>
    )
}