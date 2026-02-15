import React, { useState } from "react";
import { skillsData } from "../data/skills";

const SkillsDoc: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(1)
    return (
        <section id="skills" className="max-md:hidden">
            <h1 className="section-title">$ ~/SKILLS <span className="animate-pulse ms-2">_</span> </h1>
            <div className="flex w-full space-x-3">
                {skillsData.map((skills, index) => {
                    const Icon = skills.icon;
                    return (
                        <div
                            key={index}
                            className={`${index == selectedIndex && "grow"} transition-all duration-300`}
                            onClick={() => setSelectedIndex(index)}
                        >
                            <div className={`h-100 bg-black/30 border-2 ${index == selectedIndex ? "border-white/50" : "border-gray-700"} rounded-xl p-4  flex flex-col items-start justify-start`}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-lg bg-teal-500/10 group-hover:bg-teal-500/30 transition-colors">
                                        <Icon size={24} className="text-teal-400" />
                                    </div>
                                    <h3 className={`${index != selectedIndex && "hidden"} text-xl text-gray-200 font-bold`}>{skills.title}</h3>
                                </div>
                                <div className={`h-full w-full flex flex-wrap items-start justify-start  gap-8 p-5 ${index != selectedIndex && "hidden"}`}>
                                    {skills.logos.map((logo, index) => (
                                        <div className="relative group">
                                            <div key={index} className="bg-white rounded-[12px] w-13 h-13 flex justify-center rotate-45 hover:w-15 hover:h-15 group/item transition-all duration-200">
                                                <div className="bg-white rounded-[12px] w-13 h-13 p-2 flex items-center justify-center -rotate-45 group-hover/item:w-15 group-hover/item:h-15 transition-all duration-200">
                                                    <img src={logo} />
                                                </div>
                                            </div>
                                            <div className="absolute -top-8 right-0 bg-gray-700 rounded-xl text-xs p-2 w-max hidden group-hover:block">{ skills.stacks[index]}</div>
                                        </div>

                                    ))}

                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>

        </section>
    )
}

export default SkillsDoc