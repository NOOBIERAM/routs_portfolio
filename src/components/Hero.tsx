import { Github, ChevronRight, TerminalSquareIcon, Linkedin, Facebook, File, Rocket,CornerDownLeftIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { stack } from "../data";
import EnterKeyButton from "./EnterKeyButton";


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
                            I'm <span className="font-bold">Rotsiniaina RAMANANTSOA</span>
                        </h2>
                        <p className="text-xl md:text-xl  text-white/90 mb-30 leading-relaxed font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
                            Développeur passionné par la création de solution numériques innovantes.
                            Je combine design élégant et code performant pour créer des applications exceptionnelles.
                        </p>

                        <div className="flex animate-fade-in-up delay-400 -translate-y-12 ">
                            <a href="#" className="flex items-center border-2 rounded p-2 px-5 space-x-3 font-semibold"><span>Enter</span> <CornerDownLeftIcon /></a>
                        </div>
                        
                    </div>
                    <div className="max-w-7xl mx-auto border-2 rounded-2xl w-full  bg-teal-900/20">
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
                        <div className="p-5 font-mono text-lg">
                            <div className="mb-6 border-r-3">
                                <span className="flex items-center mb-2 text-teal-300"><ChevronRight size={18} />$ whoami</span>
                                <span className="ms-6">Développeur informatique {"</>"}</span>
                            </div>
                            <div className="mb-6 border-r-3">
                                <span className="flex items-center mb-2 text-teal-300"><ChevronRight size={18} /> $ cat ~/references.txt</span>
                                <ul className="text-sm mt-4 space-y-1 ms-6">
                                    <li><a href="#" className="flex items-center">----<Github size={18} className="mx-3" /> Github</a></li>
                                    <li><a href="#" className="flex items-center">----<Linkedin size={18} className="mx-3" /> Linkedin</a></li>
                                    <li><a href="#" className="flex items-center">----<Facebook size={18} className="mx-3" /> Facebook</a></li>
                                    <li><a href="#" className="flex items-center">----<File size={18} className="mx-3" />CV</a></li>
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