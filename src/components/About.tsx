
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
                    <ul className="bg-white rounded-lg p-2 pe-3">
                        <li className={`flex items-center cursor-pointer ${view == "whoami" ? "text-teal-500" : "text-gray-800 "}`} onClick={() => setView("whoami")}>
                            <ChevronRight size={30} />
                            <span>whoami</span>
                        </li>
                        <li className={`flex items-center cursor-pointer ${view == "education" ? "text-teal-500" : "text-gray-800"}`} onClick={() => setView("education")}>
                            <ChevronRight size={30} />
                            <span>éducation</span>
                        </li>
                        <li className={`flex items-center cursor-pointer ${view == "experience" ? "text-teal-500" : "text-gray-800"}`} onClick={() => setView("experience")}>
                            <ChevronRight size={30} />
                            <span>expérience</span>
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