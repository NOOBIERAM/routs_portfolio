import { Facebook, Github, Linkedin, Mail, MousePointerClickIcon, } from "lucide-react";
import React from "react";

import sary from "../assets/images/routs.png"

const Hero: React.FC = () => {
    return (
        <section className="pt-32 pb-20">
            <div className="xl:grid xl:grid-cols-2 gap-12">
                <div className="flex flex-col text-center xl:text-start ">
                    <h4 className="text-4xl sm:text-5xl mb-10">
                        Bonjour!!
                    </h4>
                    <h2 className="text-4xl sm:text-7xl font-bold text-white mb-15">Je suis Rotsi</h2>
                    <h2 className="text-sm sm:text-3xl text-center font-semibold bg-white rounded text-black py-2 ps-5  mb-5">
                        <ul className="flex items-center justify-start space-x-5">
                            <li >
                                <a
                                    href="https://github.com/NOOBIERAM"
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-centert hover:text-teal-500">
                                    <Github size={20} />
                                </a>
                            </li>
                            <li >
                                <a
                                    href="#"
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-centert hover:text-teal-500">
                                    <Linkedin size={20} />
                                </a>
                            </li>
                            <li >
                                <a
                                    href="#"
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-centert hover:text-teal-500">
                                    <Facebook size={20} />
                                </a>
                            </li>
                            <li >
                                <a
                                    href="mailto:rotsiniainaramanantsoagg@gmail.com"
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-centert hover:text-teal-500">
                                    <Mail size={20} />
                                </a>
                            </li>
                        </ul>
                    </h2>


                </div>
                {/* xl:flex flex-col */}
                <div className="hidden xl:block ">
                    <div className="relative w-52 h-52 border-5 border-gray-700 bg-second rounded-full  m-auto  scale-150">
                        <div className="border-3 border-teal-500 w-50 h-50 rounded-full bg-second overflow-hidden p-3 m-auto absolute z-10">
                            <img src={sary} alt="" className="w-50 h-50 grayscale translate-y-5" />
                        </div>
                        <a href="https://docs.google.com/document/d/1StOsgVgqsSgMX2X_jq8Y1LkqSRjhDxzz6DWMUqXHhm0/edit?usp=sharing"
                        target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 justify-end border-5 bg-second border-gray-700 bg rounded-full w-60  pe-6 py-2 hover:text-teal-400  absolute bottom-0 left-16 translate-y-[4.5px]">
                            <span className="font-bold">CV </span><MousePointerClickIcon size={16} />
                        </a>
                    </div>


                    {/* <div className="relative w-52 h-52 rounded-full m-auto scale-150">

                        <div className="relative border border-white/20 w-50 h-50 rounded-full overflow-hidden p-3 m-auto bg-white/10 backdrop-blur-md shadow-lg z-20">
                            <img src={sary} alt="" className="w-50 h-50 grayscale translate-y-5" />

                            <div className="
                                absolute top-0 left-0 w-full h-full
                                pointer-events-none
                                bg-gradient-to-tr from-white/40 via-white/10 to-white/0
                                transform rotate-12
                                "></div>
                        </div>

                        <a href="#"
                            className="flex items-center space-x-3 justify-end border-2 border-white/20 bg-white/10 backdrop-blur-md rounded-full w-60 pe-6 py-2 absolute bottom-0 left-16 hover:text-teal-400 shadow-md z-10">
                            <span className="font-bold">CV</span>
                            <MousePointerClickIcon size={16} />
                        </a>
                    </div> */}


                    {/* <a href="#" className="ms-auto flex items-center space-x-3 justify-end border-5 bg-bg-second border-gray-700 translate-x-[-100px] translate-y-[-9px] rounded-full w-60  pe-6 py-2 hover:text-teal-400 ">
                        <span className="font-extrabold text-xl">CV </span><MousePointerClickIcon size={22}/>
                    </a> */}
                </div>
            </div>
        </section>
    )
}

export default Hero