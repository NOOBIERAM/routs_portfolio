import { Github, ChevronRight, TerminalSquareIcon, Linkedin, Facebook, File, CornerDownLeftIcon, Mail, Phone, MapPin, SquareArrowLeft, SquareArrowRight, CircleChevronRight, CircleChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { stack } from "../data";


const Hero: React.FC = () => {
    const stacks = stack
    const [displayText, setDisplayText] = useState('')
    const fullText = '$ whoami'
    const responseText = 'Developer Web - Full Stack Engineer - Open Source Enthusiast'

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.substring(0, index))
                index++
            } else {
                clearInterval(interval)
            }
        }, 100)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex ">
            <div className="max-w-7xl mx-auto translate-y-12 h-150">
                <div className="grid md:grid-cols-2 gap-12 items-center h-full">
                    <div className="">
                        <h2 className=" text-5xl  py-4 mb-4  leading-tight rounded-2xl">
                            👋 Hello, I'm <span className="font-bold">Rotsi.</span>
                        </h2>
                        <p className="text-xl md:text-lg  text-white/90 mb-30 leading-relaxed font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
                            A developer pasiionate about creating innovative, efficient and scalable digital solutions. I combine creativity and technical expertise to bring ideas to life in the digital world.
                        </p>
                        <div className="flex justify-start animate-fade-in-up delay-400 -translate-y-12 space-x-4 ">
                            <a href="#skills" className="flex items-center border-2 rounded-2xl p-2 px-5 space-x-3 font-semibold">
                                <span>$ Skills</span> <CornerDownLeftIcon /></a>
                            <a href="#" className="flex items-center border-2 rounded-2xl p-2 px-5 space-x-3 font-semibold">
                                <span>$ Projects</span> <CornerDownLeftIcon /></a>
                            <a href="#" className="flex items-center border-2 rounded-2xl p-2 px-5 space-x-3 font-semibold">
                                <span>Enter</span> <CornerDownLeftIcon /></a>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto border-2  rounded-2xl w-full bg-teal-900/20">
                        <div className="flex items-center justify-between border-b-2 p-2 px-3 font-bold">
                            <span className="flex items-center"><TerminalSquareIcon className="me-3" />Hello world_</span>
                            <div className="flex items-center space-x-2">
                                <span className="w-4 h-4 bg-teal-500/10 rounded-full"></span>
                                <span className="w-4 h-4 bg-teal-500/20 rounded-full"></span>
                                <span className="w-4 h-4 bg-teal-500/30 rounded-full"></span>
                            </div>
                            {/* <div className="flex items-center space-x-3">
                                <a href="#" className="flex border rounded-full px-3 p-1 text-sm"><Github size={20} className="me-3" />Github</a>
                                <a href="#" className="flex border rounded-full px-3 p-1 text-sm"><Download size={20} className="me-3" />CV</a>
                            </div> */}
                        </div>
                        <div className="p-5 font-mono text-lg text-white">
                            <div className="mb-6 border-r-3 flex flex-col">
                                <span className="flex items-center mb-2 text-teal-300"><ChevronRight size={18} />$ whoami</span>
                                <span className="ms-6 font-extrabold">RAMANANTSOA Rotsiniaina</span>
                                <span className="ms-6 text-sm flex items-center "># Fullstack Developer </span>

                            </div>
                            <div className="mb-6 border-r-3">
                                <span className="flex items-center mb-2 text-teal-300"><ChevronRight size={18} /> $ cat ~/Contact & Network</span>
                                <ul className="text-sm mt-4 space-y-1 ms-6">
                                    <li>==============================================</li>
                                    <li className="text-sm ms-6  flex items-center"><Mail size={15} className="me-3" /> rotsiniainaramanantsoa.gg@gmail.com </li>
                                    <li className="text-sm ms-6  flex items-center"><Phone size={15} className="me-3" /> +261 34 77 006 26 </li>
                                    <li className="text-sm ms-6  flex items-center"><MapPin size={15} className="me-3" /> Madagascar</li>
                                    <li>==============================================</li>
                                    <li className="flex items-center space-x-3">
                                        <span className="flex items-center"><CircleChevronLeft size={15} />----</span>
                                        <a href="https://github.com/NOOBIERAM" target="_blank"
                                            rel="noopener noreferrer" className="flex items-center hover:text-lg text-teal-500 hover:text-teal-700"><Github size={18} /></a>
                                        <span>----</span>
                                        <a href="#" target="_blank"
                                            rel="noopener noreferrer" className="flex items-center hover:text-lg text-teal-500 hover:text-teal-700"><Linkedin size={18} /></a>
                                        <span>----</span>
                                        <a href="#" target="_blank"
                                            rel="noopener noreferrer" className="flex items-center hover:text-lg text-teal-500 hover:text-teal-700"><Facebook size={18} /></a>
                                        <span className="flex items-center">----<CircleChevronRight size={15} /></span>

                                    </li>
                                    {/* <li><a href="#" target="_blank"
                                        rel="noopener noreferrer" className="flex items-center hover:text-teal-600 hover:underline">----<Linkedin size={18} className="mx-3" /> Linkedin</a></li>
                                    <li><a href="#" target="_blank"
                                        rel="noopener noreferrer" className="flex items-center hover:text-teal-600 hover:underline">----<Facebook size={18} className="mx-3" /> Facebook</a></li>
                                    <li><a href="https://docs.google.com/document/d/1StOsgVgqsSgMX2X_jq8Y1LkqSRjhDxzz6DWMUqXHhm0/edit?usp=sharing" target="_blank"
                                        rel="noopener noreferrer" className="flex items-center hover:underline hover:text-teal-600">----<File size={18} className="mx-3" />CV</a></li> */}

                                </ul>
                            </div>
                            <div className="mb-6 border-r-3">
                                <span className="flex items-center mb-2"><ChevronRight size={18} /><span className="animate-pulse duration-75 font-extrabold">_</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero