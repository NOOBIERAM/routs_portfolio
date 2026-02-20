
import { ChevronRight, TerminalSquareIcon } from "lucide-react";
import React, { useState } from "react";
import Whoami from "./abouts/Whoami";
import Education from "./abouts/Education";
import Experience from "./abouts/Experience";

const About: React.FC = () => {
    const [view, setView] = useState<"whoami" | "education" | "experience">("whoami")
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
                        <li className="flex items-center cursor-pointer" onClick={() => setView("experience")}>
                            <ChevronRight className={view == "experience" ? "text-teal-500" : "text-teal-900"} size={30} />
                            <span className={`${view != "experience" && "text-gray-600"}`}>expérience</span>
                        </li>
                    </ul>
                    {view === "whoami" && <Whoami />}
                    {view === "education" && <Education />}
                    {view === "experience" && <Experience />}

                </div>
            </div>
        </section >
    )
}

export default About