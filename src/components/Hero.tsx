import { Github, Linkedin, Mail,  Zap, } from "lucide-react";
import React from "react";

import sary from "../assets/images/routs.webp"
// import WhatsappIcon from "./icon/WhatsappIcon";
import whatsapp from "../assets/images/whatsapp.svg";

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
                                    href="www.linkedin.com/in/noobieram"
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-centert hover:text-teal-500">
                                    <Linkedin size={20} />
                                </a>
                            </li>
                            <li >
                                <a
                                    href="https://wa.me/261347700626"
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-centert hover:text-teal-500">
                                    <img src={whatsapp} alt="WhatsApp" width={19} />
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
                <div className="translate-y-10">
                    <div className="relative w-52 h-52 border-5 border-gray-700 bg-second rounded-full  m-auto max-md:scale-110 max-lg:scale-125 scale-150">
                        <div className="border-3 border-teal-500 w-50 h-50 rounded-full bg-second overflow-hidden p-3 m-auto absolute z-10">
                            <img src={sary} alt="" className="w-50 h-50 grayscale translate-y-5" />
                        </div>
                        
                        <div className="scale-70 z-22 p-2 bg-second text-xs font-bold border-3 border-gray-700 rounded-full absolute bottom-0 -right-8 flex items-center justify-center space-x-2">
                            <Zap size={16} className="text-teal-500"/> <span>Disponible</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero