import { TerminalSquareIcon, Github, ChevronRight, Linkedin, Facebook, CircleChevronRight, CircleChevronLeft } from "lucide-react";
import React from "react";
import AsciiLogo from "./AsciiLogo";


const TerminalUI: React.FC = () => {
    return (
        <footer id="footer" className="flex flex-col justify-center px-10 lg:px-75 pt-40">
            <div className="border-t-2 border-r-2 border-l-2 border-gray-700 rounded-t-2xl w-full bg-black/30 text-gray-500">
                <div className="flex items-center justify-between border-b-2 border-gray-700 p-2 px-3 font-bold">
                    <span className="flex items-center"><TerminalSquareIcon className="me-3 text-sm text-gray-300" />Hello world_</span>
                    <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 bg-teal-500/10 rounded-full"></span>
                        <span className="w-4 h-4 bg-teal-500/20 rounded-full"></span>
                        <span className="w-4 h-4 bg-teal-500/30 rounded-full"></span>
                    </div>
                </div>
                <div className="p-5 font-mono text-lg text-gray-400">
                    <div className="mb-6 flex flex-col items-center">
                        <span className="hidden sm:block  ms-6 mb-5">
                            <AsciiLogo />
                        </span>

                        {/* <div className="hidden sm:flex items-center justify-center space-x-3 mb-5">
                            
                            <span className="flex items-center font-mono"><CircleChevronLeft size={15} />──────</span>
                            <a href="https://github.com/NOOBIERAM" target="_blank"
                                rel="noopener noreferrer" className="flex items-center text-teal-600 hover:text-teal-500 border p-1 rounded bg-gray-900"><Github size={18} /></a>
                            <span className="font-mono">────</span>
                            <a href="#" target="_blank"
                                rel="noopener noreferrer" className="flex items-center text-teal-600 hover:text-teal-500 border p-1 rounded bg-gray-900"><Linkedin size={18} /></a>
                            <span className="font-mono">────</span>
                            <a href="#" target="_blank"
                                rel="noopener noreferrer" className="flex items-center text-teal-600 hover:text-teal-500 border p-1 rounded bg-gray-900"><Facebook size={18} /></a>
                            <span className="font-mono">────</span>
                            <a href="#" target="_blank"
                                rel="noopener noreferrer" className="flex items-center text-teal-600 hover:text-teal-500 text-sm font-bold border p-1 rounded bg-gray-900">CV</a>
                            <span className="flex items-center font-mono">──────<CircleChevronRight size={15} /></span>
                        </div>
                        <ul>
                            <li><a href="#" rel="noopener noreferrer">$Abouts</a></li>
                            <li><a href="#" rel="noopener noreferrer">$Abouts</a></li>
                            <li><a href="#" rel="noopener noreferrer">$Abouts</a></li>
                            <li><a href="#" rel="noopener noreferrer">$Abouts</a></li>
                        </ul> */}


                    </div>
                    {/* <div className="mb-6 border-r-3 border-gray-700 flex flex-col">
                        <span className="flex items-center mb-2 text-teal-500 text-sm"><ChevronRight size={18} />$ whoami</span>


                        <span className="ms-6 text-[15px] flex items-center justify-center"># Fullstack Developer </span>
                    </div>
                    <div className="mb-6 border-r-3 border-gray-700 text-sm">
                        <span className="flex items-center mb-2"><ChevronRight size={18} /><span className="animate-pulse duration-75 font-extrabold">_</span></span>
                    </div> */}
                </div>
            </div>
        </footer>
    )
}

export default TerminalUI