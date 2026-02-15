import { Dot } from "lucide-react";
import React from "react";
import { skillsData } from "../data/skills";

const Skills: React.FC = () => {
    return (
        <section id="skills" className="lg:hidden">
            <h1 className="section-title">$ ~/SKILLS <span className="animate-pulse ms-2">_</span> </h1>


            <div className="grid md:grid-cols-2 sm:gap-10">
                {skillsData.map((skills, index) => {
                    const Icon = skills.icon;
                    return (
                        <div
                            key={index}
                            className="group p-6 sm:w-100 sm:mx-auto  transition-all duration-300  shadow-0xl"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 rounded-lg bg-teal-500/20 group-hover:bg-teal-500/30 transition-colors">
                                    <Icon size={24} className="text-teal-400" />
                                </div>
                                <h3 className="text-lg text-gray-200 font-bold">{skills.title}</h3>
                            </div>

                            <div className="flex flex-wrap xl:max-w-100  border-l-3 mx-auto ms-5">
                                {skills.stacks.map((stack, index) => (
                                    <div
                                        key={index}
                                        className={` py-2 text-teal-500  transition-all duration-300 flex items-center justify-center `}
                                    >
                                        <Dot className="text-teal-700" />
                                        <span className="text-sm">
                                            {stack}
                                        </span>
                                        <Dot className="text-teal-700" />


                                    </div>
                                ))}

                            </div>
                            {/* <ul className="space-y-2">
                                {category.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="text-sm text-gray-300 flex items-center gap-2 group-hover:text-teal-300 transition-colors"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-teal-400" />
                                        {skill}
                                    </li>
                                ))}
                            </ul> */}
                        </div>
                    );
                })}
            </div>

        </section>
    )
}

export default Skills