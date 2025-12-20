import { Github, ChevronRight, TerminalSquareIcon, Linkedin, Facebook,  CornerDownLeftIcon, Mail, Phone, MapPin,  CircleChevronRight, CircleChevronLeft } from "lucide-react";
import React from "react";
import AsciiLogo from "./AsciiLogo";


const Hero: React.FC = () => {
    //const stacks = stack
    //const [displayText, setDisplayText] = useState('')
    //const fullText = '$ whoami'
    //const responseText = 'Developer Web - Full Stack Engineer - Open Source Enthusiast'

    /*useEffect(() => {
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
    }, [])*/

    return (
        <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex ">
            <div className="max-w-7xl mx-auto translate-y-12 h-150">
                <div className="grid md:grid-cols-2 gap-12 items-center h-full">
                    <div className="">
                        <h2 className=" text-5xl  py-4 mb-4  leading-tight rounded-2xl ">
                            👋 Hello, <span className="text-gray-300">I'm <span className="font-bold">Rotsi.</span></span>
                        </h2>
                        <p className="text-xl md:text-lg  mb-30 leading-relaxed font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
                            A developer pasionate about creating innovative, efficient and scalable digital solutions. I combine creativity and technical expertise to bring ideas to life in the digital world.
                        </p>
                        
                        <div className="flex justify-start animate-fade-in-up delay-400 -translate-y-12 space-x-4 ">
                            <a href="#skills" className="flex items-center border-2 rounded-2xl p-2 px-5 space-x-3 font-semibold hover:text-teal-500 hover:shadow-lg shadow-white/10">
                                <span>$ Skills</span> <CornerDownLeftIcon /></a>
                            <a href="#" className="flex items-center border-2 rounded-2xl p-2 px-5 space-x-3 font-semibold hover:text-teal-500 hover:shadow-lg shadow-white/10">
                                <span>$ Projects</span> <CornerDownLeftIcon /></a>
                            <a href="#" className="flex items-center border-2 rounded-2xl p-2 px-5 space-x-3 font-semibold hover:text-teal-500 hover:shadow-lg shadow-white/10">
                                <span>Enter</span> <CornerDownLeftIcon /></a>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto border-2 border-gray-700 rounded-2xl w-full bg-black/30 text-gray-500">
                        <div className="flex items-center justify-between border-b-2 border-gray-700 p-2 px-3 font-bold">
                            <span className="flex items-center"><TerminalSquareIcon className="me-3 text-sm text-gray-300" />Hello world_</span>
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
                        <div className="p-5 font-mono text-lg text-gray-400">
                            <div className="mb-6 flex flex-col">
                                <span className="ms-6 mb-5">
                                    <AsciiLogo/>
                                </span>
                                <div className="flex items-center justify-center space-x-3 mb-5">
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
                               

                            </div>
                            <div className="mb-6 border-r-3 border-gray-700 flex flex-col">
                                 <span className="flex items-center mb-2 text-teal-500 text-sm"><ChevronRight size={18} />$ whoami</span>
                                

                                <span className="ms-6 text-[15px] flex items-center justify-center"># Fullstack Developer </span>
                            </div>
                            <div className="mb-6 border-r-3 border-gray-700 text-sm">
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