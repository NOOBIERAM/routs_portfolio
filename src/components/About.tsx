
import { ChevronRight, TerminalSquareIcon, Shapes, Leaf, Lightbulb, CircleFadingArrowUp, Puzzle, Smartphone, Brain } from "lucide-react";
import React from "react";

const qualityData = [
    {
        label: "Créatif",
        icon: Shapes,           // créativité, idées, imagination
    },
    {
        label: "Autonome",
        icon: Leaf,            // gestion personnelle, autonomie
    },
    {
        label: "Résolveur de problème",
        icon: Lightbulb,          // prend des initiatives
    },
    {
        label: "Progressif",
        icon: CircleFadingArrowUp,              // collaboration
    },
    {
        label: "Code propre",
        icon: Puzzle,             // résolution de problèmes
    },
    {
        label: "Mobile first",
        icon: Smartphone,            // adaptable à plusieurs tâches
    },
    {
        label: "Analytique",
        icon: Brain,              // réflexion, analyse
    },
];

const About: React.FC = () => {
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
                <div className="p-5 text-sm flex flex-col items-start">
                    <div className="flex items-center">
                        <ChevronRight className="text-teal-500" size={30} />
                        <span>whoami</span>
                    </div>

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
                                qualityData.map((quality, index) => {
                                    const Icon = quality.icon
                                    return (
                                        <div key={index} className="flex items-center justify-center border-2 py-1 px-3 rounded-full font-bold text-xs space-x-2"><Icon size={22}/><span>{quality.label}</span></div>
                                    )
                                })
                            }
                            {/* <h5 className="text-md sm:text-4xl text-teal-500 tracking-[8px]">#FULLSTACK</h5>
                        <h2 className="font-bold text-3xl sm:text-7xl mb-15 sm:mb-0">
                            Développeur JavaScript
                        </h2>
                        <p className="sm:ms-auto sm:max-w-105 font-light mt-5">
                            "Attiré par les évolutions technologiques, je développe des solutions concrètes et innovantes, afin que le numérique simplifie le quotidien tout en relevant des défis complexes."
                        </p> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="relative border border-white/20 rounded-xl w-full 
                bg-white/10 backdrop-blur-lg text-white shadow-lg">

                <div className="absolute inset-0 pointer-events-none
                    bg-gradient-to-tr from-white/30 via-white/5 to-white/0
                    blur-md"></div>
                <div className="flex items-center justify-between border-b border-white/20 p-2 px-3 font-bold">
                    <span className="flex items-center">
                        <TerminalSquareIcon className="me-3 text-sm text-gray-300" />
                    </span>
                    <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 bg-teal-500/10 rounded-full"></span>
                        <span className="w-4 h-4 bg-teal-500/20 rounded-full"></span>
                        <span className="w-4 h-4 bg-teal-500/30 rounded-full"></span>
                    </div>
                </div>

                <div className="p-5 text-sm flex flex-col items-start">
                    <div className="flex items-center">
                        <ChevronRight className="text-teal-500" size={30} />
                        <span>whoami</span>
                    </div>

                    <div className="my-10 text-start ms-5 sm:mx-auto sm:my-20 sm:text-left w-fit">
                        <h5 className="text-md sm:text-4xl text-teal-500 tracking-[8px]">#FULLSTACK</h5>
                        <h2 className="font-bold text-3xl sm:text-7xl mb-15 sm:mb-0">
                            Développeur JavaScript
                        </h2>
                        <p className="sm:ms-auto sm:max-w-105 font-light mt-5">
                            "Attiré par les évolutions technologiques, je développe des solutions concrètes et innovantes, afin que le numérique simplifie le quotidien tout en relevant des défis complexes."
                        </p>
                    </div>
                </div>

            </div> */}

        </section>
    )
}

export default About