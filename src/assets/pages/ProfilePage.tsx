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
import { useNavigate } from "react-router";
import actOneFact from "../pictures/act1-fact-CapSjigS.png"
import actMidFact from "../pictures/act1-mid-fact-3xOcatXu.png"
import act2Mid from "../pictures/act2midpic-CdFN-Ycj.png"
import pracPic from "../pictures/practice functions-CMiOYh6b.png"
import dashboard from "../pictures/dashboard_3prac-BIsNn6Gk.png"
import powerQuery from "../pictures/powerquery-BSPshuK2.png"
import normalization from "../pictures/MidtermTask3_EnriquezJorizAaron-CHCs_vtq.png"
import finals2 from "../pictures/Finals Task 2. Navigating Power BI.png"
import finals3 from "../pictures/Finals Task 3. DAX Time Intelligence Function.png"
import finals4 from "../pictures/Finals Task 4. Designing Interactive Reports.png"
import finals5 from "../pictures/Finals Task 5. Forecasting Reports in PowerBi.png"
import finalProject from "../pictures/finalproject.png"

interface ProjectsProps {
    project: string;
    name: string;
    desc: string;
    // link : string;
}

interface CertificationsProps {
    certificate: string;
    name: string;
    desc: string;
}

interface ActivitiesProps {
    activity: string;
    name: string;
    desc: string;
    link: string;
}

export const projectSlides: ProjectsProps[] = [
    { project: empty, name: "empty", desc: "This is my project 1, this is where I did blah blah" },
    { project: empty, name: "empty", desc: "This is my project 1, this is where I did blah blah" },
    { project: empty, name: "empty", desc: "This is my project 1, this is where I did blah blah" },
    { project: empty, name: "empty", desc: "This is my project 1, this is where I did blah blah" },
    { project: empty, name: "empty", desc: "This is my project 1, this is where I did blah blah" },
    { project: empty, name: "empty", desc: "This is my project 1, this is where I did blah blah" }
]

export const activitySlides: ActivitiesProps[] = [
    { activity: actOneFact, name: "Practice Data Cleaning", desc: "This is my Activity 1, where I performed data cleaning on the sales data of various companies.", link: "https://drive.google.com/file/d/1qq8jOgJGBgxNipsLScm9ulcoRF7wXM6i/view" },
    { activity: actMidFact, name: "Midterm Data Cleaning", desc: "This is similar to Activity 1 but instead, it was a midterm lab activity with a different dataset.", link: "https://drive.google.com/file/d/1tANfPY1mKH6H4JZmHj0VSLzQV0BvB19S/view" },
    { activity: act2Mid, name: "Midterm Pivot Tables & Charts", desc: "This activity involves creating pivot tables from the cleaned dataset and creating visualizations based on those pivot tables.", link: "https://drive.google.com/file/d/1z4Ce8mTrDeLgoyqXOU1zQzfkyfRvA-kG/view" },
    { activity: pracPic, name: "Practice Excel Functions", desc: "This task involved learning and applying a variety of built-in Excel functions to practice and strengthen my spreadsheet skills.", link: "https://drive.google.com/file/d/1RSjnKZPGjWMzeGDHdw14CEYhujOlEAGK/view" },
    { activity: dashboard, name: "Practice Creating Dashboards", desc: "This task involves analyzing a cleaned dataset, creating pivot tables from the data, and designing a dashboard to visualize the insights.", link: "https://drive.google.com/file/d/1AyyQsk0rXgxnE93vSe_lHensua-iOcAZ/view" },
    { activity: powerQuery, name: "Practice Power Query", desc: "This task involves using Power Query to clean and transform data, creating dimension and fact tables, and visualizing their relationship in the Data Model.", link: "https://drive.google.com/file/d/1aC4OK0zXFaZR-z5__jJdH44FVHozI799/view" },
    { activity: normalization, name: "Midterm Normalization using Power Query", desc: "This task is similar to the Practice Power Query but this time, a much larger dataset was used.", link: "https://drive.google.com/file/d/1cgKrT6usM8h5PYObHlzmRQPk8umxAshW/view" },
    { activity: finals2, name: "Finals Task 2. Navigating Power BI", desc: "This task involves navigating the Power BI workflow, including data preparation, modeling, analysis, and visualization to create insights.", link: "https://drive.google.com/file/d/163A5Kse4pVbc6gVNrXlKU-v0UmZggQc3/view" },
    { activity: finals3, name: "Finals Task 3. DAX Time Intelligence Function", desc: "Uses time intelligence functions to manage, analyze, and calculate date and time-based data.", link: "https://drive.google.com/file/d/1_05Qt_IS8iy6tCnuGsVET-X4nXAhZeV2/view" },
    { activity: finals4, name: "Finals Task 4. Designing Interactive Reports", desc: "Designs and creates Power BI reports by configuring visuals, syncing slicers, publishing to Power BI Service, and interacting with report visualizations.", link: "https://drive.google.com/file/d/1yALBiXoz5FT4_1ef-hZypGaoRjQuvNuL/view" },
    { activity: finals5, name: "Finals Task 5. Forecasting Reports in PowerBi", desc: "Create animated scatter charts to visualize data over time and use forecasting visuals to predict future values.", link: "https://drive.google.com/file/d/1v1spZ3b_Fq96J30mmaAsB2UNlMAxEMlv/view" },
    { activity: finalProject, name: "Final Project", desc: "A Data Analytics project showcasing the end-to-end Power BI workflow using a 100,000-record diabetes dataset.", link: "https://drive.google.com/file/d/1PKkePnSwy6KG9mDw1fe_JrvNswRGL3cj/view" },
  
]

export const certificateSlides: CertificationsProps[] = [
    { certificate: empty, name: "empty", desc: "This is my project 1, this is where I did blah blah" },
    { certificate: empty, name: "empty", desc: "This is my project 1, this is where I did blah blah" },
    { certificate: empty, name: "empty", desc: "This is my project 1, this is where I did blah blah" },
    { certificate: empty, name: "empty", desc: "This is my project 1, this is where I did blah blah" },
    { certificate: empty, name: "empty", desc: "This is my project 1, this is where I did blah blah" },
]

export default function Profile() {
    const navigation = useNavigate();

    return (
        <div className="max-w-[1200px] mx-auto px-5 mt-32 pb-20">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">

                <div className="flex flex-col items-center relative">
                    <div className="flex items-center justify-center md:hidden h-11 w-[200px] bg-custom-beige/80 mb-4 rounded-lg">
                        <p className="font-micro5charted text-[40px]">Roaming Cats</p>
                    </div>

                    <div
                        className="w-full max-w-[500px] aspect-[5/6] rounded-3xl shadow-lg bg-cover bg-center bg-no-repeat rgb-glow"
                        style={{ backgroundImage: `url('${profile}')` }}
                    ></div>
                </div>

                <div className="flex flex-col items-center md:items-center w-full">
                    <hr className="h-px w-full max-w-60 bg-custom-beige2 md:hidden" />
                    <hr className="h-px w-full max-w-44 bg-custom-beige2 mb-6 mt-5 md:hidden" />

                    <div className=" items-center justify-center h-11 w-[200px] bg-custom-beige/80 mb-4 rounded-lg hidden">
                        <p className="font-micro5charted text-[40px]">Roaming Cats</p>
                    </div>
                    <div className="flex font-jersey items-start pl-5 md:pr-5 justify-center py-6 border-2 border-black w-full max-w-[600px] mt-7 rounded-3xl bg-custom-beige2/80 flex-col shadow-2xl">
                        <div className="flex flex-col md:flex-row md:items-end">
                            <p className="text-custom-orange text-3xl leading-none mb-2 md:mb-0 md:mr-3">Hello, I'm</p>
                            <p className="text-[40px] md:text-[50px] leading-none">Joriz Aaron M. Enriquez</p>
                        </div>
                        <p className="text-lg md:text-xl mt-2 md:ml-24">Computer Science Student at City College of Angeles</p>
                    </div>

                    <div className="">
                        <hr className="h-px w-full bg-custom-beige2 mb-10 mt-16 lg:hidden" />

                        <h1 className="font-jersey text-[50px] text-custom-beige2 text-center my-5">Tech Stack</h1>

                        <div className="flex flex-col items-center w-full">
                            <div className="flex flex-wrap justify-center gap-6 mb-7">
                                <img src={ts} alt="typescript" className="size-16 md:size-20" />
                                <img src={py} alt="python" className="size-16 md:size-20" />
                                <img src={haskell} alt="haskell" className="size-16 md:size-20" />
                                <img src={c} alt="c" className="size-16 md:size-20" />
                                <img src={js} alt="js" className="size-16 md:size-20" />
                            </div>
                            <div className="flex flex-wrap justify-center gap-6">
                                <img src={html} alt="html" className="size-16 md:size-20" />
                                <img src={css} alt="css" className="size-16 md:size-20" />
                                <img src={tailwind} alt="tailwind" className="size-16 md:size-20" />
                                <img src={react} alt="react" className="size-16 md:size-20" />
                                <img src={mysql} alt="mysql" className="size-16 md:size-20" />
                                <img src={firebase} alt="firebase" className="size-16 md:size-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-col items-center hidden">
                <hr className="h-px w-full max-w-xl bg-custom-beige2 " />
                <hr className="h-px w-full max-w-md bg-custom-beige2 mt-10 mb-10" />
            </div>

            <hr className="h-px w-full bg-custom-beige2 mt-20" />

            <div className="w-full font-jersey flex items-center justify-start bg-black/15 mt-24 py-12 flex-col rounded-3xl">
                <h1 className="text-custom-beige2 text-[35px]">About Me</h1>
                <p className="text-custom-beige text-[20px] md:text-[22px] text-center px-6 mt-3 max-w-4xl">
                    ’m an undergraduate Computer Science student with a strong interest in web development, where I enjoy turning ideas into functional and engaging digital experiences. I’ve always loved games for the creativity and problem-solving they inspire, and I bring that same curiosity into my work and studies. Outside of coding, I’m an avid reader of fantasy novels, which fuels my imagination and appreciation for good storytelling...
                </p>
                <button onClick={() => navigation("/about")} className="h-11 w-44 rounded-xl text-[20px] mt-6 bg-custom-orange drop-shadow-xl hover:scale-105 transition-transform">Continue Reading</button>
            </div>

            <hr className="h-px w-full bg-custom-beige2 mt-20" />

            <div className="grid mt-5 grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col items-center mt-5 ">
                    <h1 className="text-[50px] font-jersey mb-6 text-custom-beige">Projects</h1>

                    <div className="w-full max-w-xl aspect-square p-4 rounded-3xl flex items-center justify-center bg-black/15">
                        <div className="w-full h-full bg-black rounded-xl overflow-hidden">
                            <Carousel autoSlide={true}>
                                {projectSlides.map((item, index) => (
                                    <img key={index} src={item.project} alt="slide" className="object-cover" />
                                ))}
                            </Carousel>
                        </div>
                    </div>
                    <button onClick={() => navigation("/projects")} className="h-11 w-44 z-40 rounded-xl text-[20px] mt-6 bg-custom-orange drop-shadow-xl hover:scale-105 transition-transform mb-24 font-jersey">View In Detail</button>
                </div>
                <div className="flex flex-col items-center mt-5">
                    <h1 className="text-[50px] font-jersey mb-6 text-custom-beige">Activities</h1>

                    <div className="w-full max-w-xl aspect-square p-4 rounded-3xl flex items-center justify-center bg-black/15">
                        <div className="w-full h-full bg-black rounded-xl overflow-hidden">
                            <Carousel autoSlide={true}>
                                {activitySlides.map((item, index) => (
                                    <img key={index} src={item.activity} alt="slide" className="object-cover" />
                                ))}
                            </Carousel>
                        </div>
                    </div>
                    <button onClick={() => navigation("/activities")} className="h-11 w-44 z-40 rounded-xl text-[20px] mt-6 bg-custom-orange drop-shadow-xl hover:scale-105 transition-transform mb-24 font-jersey">View In Detail</button>
                </div>
            </div>

            <div className="flex flex-col items-center mt-5">
                <h1 className="text-[50px] font-jersey mb-6 text-custom-beige">Certifications</h1>

                <div className="w-full max-w-xl aspect-square p-4 rounded-3xl flex items-center justify-center bg-black/15">
                    <div className="w-full h-full bg-black rounded-xl overflow-hidden">
                        <Carousel autoSlide={true}>
                            {certificateSlides.map((item, index) => (
                                <img key={index} src={item.certificate} alt="slide" className="object-cover" />
                            ))}
                        </Carousel>
                    </div>
                </div>

                <button onClick={() => navigation("/certifications")} className="relative h-11 w-44 rounded-xl text-[20px] mt-6 bg-custom-orange drop-shadow-xl hover:scale-105 transition-transform mb-24 font-jersey">View In Detail</button>

            </div>

        </div>
    )
}