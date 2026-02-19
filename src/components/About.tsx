
import { ChevronRight, TerminalSquareIcon } from "lucide-react";
import React, { useState } from "react";
import { qualityDatas } from "../data/abouts";
import { educaitonDatas } from "../data/abouts";

const About: React.FC = () => {
    const [view, setView] = useState<"whoami" | "education">("whoami")
    return (
        <section id="about">


            <div className="relative border-2 border-gray-700 rounded-xl w-full bg-black/30 text-white">

                <div className="flex items-center justify-between border-b-2 border-gray-700 p-2 px-3 font-bold">
                    <span className="flex items-center"><TerminalSquareIcon className="me-3 text-sm text-gray-300" /></span>
                    <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 bg-teal-500/10 rounded-full"></span>
                        <span className="w-4 h-4 bg-teal-500/20 rounded-full"></span>
                        <span className="w-4 h-4 bg-teal-500/30 rounded-full"></span>
                    </div>
                </div>
                <div className="relative p-5 text-sm flex flex-col items-start">
                    <ul>
                        <li className="flex items-center cursor-pointer" onClick={() => setView("whoami")}>
                            <ChevronRight className={view == "whoami" ? "text-teal-500" : "text-teal-900"} size={30} />
                            <span className={`${view != "whoami" && "text-gray-600"}`}>whoami</span>
                        </li>
                        <li className="flex items-center cursor-pointer" onClick={() => setView("education")}>
                            <ChevronRight className={view == "education" ? "text-teal-500" : "text-teal-900"} size={30} />
                            <span className={`${view != "education" && "text-gray-600"}`}>éducation</span>
                        </li>
                    </ul>
                    {
                        view == "whoami" ? (
                            <div className="my-10 text-start ms-5 sm:mx-auto sm:my-20 sm:text-left w-fit">
                                <h5 className="text-md sm:text-3xl text-teal-500 tracking-[8px]">#WEB|MOBILE</h5>
                                <h2 className="font-bold text-3xl sm:text-7xl mb-15 sm:mb-0">
                                    Développeur Fullstack
                                </h2>
                                <p className="sm:ms-auto sm:max-w-105 font-light my-5">
                                    "Attiré par les évolutions technologiques, je développe des solutions concrètes et innovantes, afin que le numérique simplifie le quotidien tout en relevant des défis complexes."
                                </p>
                                <div className="sm:ms-auto sm:max-w-105 text-start mt-8 fit flex flex-wrap gap-3">
                                    {
                                        qualityDatas.map((quality, index) => {
                                            const Icon = quality.icon
                                            return (
                                                <div key={index} className="flex items-center justify-center border-2 py-1 px-3 rounded-full font-bold text-xs space-x-2"><Icon size={22} /><span>{quality.label}</span></div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        ) : (
                            <div className="sm:flex sm:flex-col sm:space-y-10 my-10 ms-5 sm:mx-auto sm:my-10 sm:text-left w-fit">
                                {
                                    educaitonDatas.map((education, index) => (
                                        <div key={index} className={`flex space-x-10 p-5 ${index == 0 && "bg-gray-400 rounded text-black font-bold"}`}>
                                            <span className={index == 0 ? "text-gray-600" : "text-gray-500"}>{education.years}</span>
                                            <div>
                                                <h5>{education.school}</h5>
                                                <p>{education.program}</p>
                                                {
                                                    education.obtained_degree && <p className="text-teal-500">
                                                        <span className="underline underline-offset-5">Obtention du diplôme :</span> {education.obtained_degree}
                                                    </p>
                                                }
                                                <h2 className="text-4xl font-sans font-semibold mt-2">{education.degree}</h2>

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }

                </div>
            </div>
        </section >
    )
}

export default About