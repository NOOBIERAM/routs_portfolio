import { Github, ChevronRight, TerminalSquareIcon, Linkedin, Facebook, File, CornerDownLeftIcon, Mail, Phone, MapPin, Code2, Database, Server, Zap } from "lucide-react";
import React, { useEffect, useState } from "react";
import { stack } from "../data";

const skillCategories = [
    {
        icon: Code2,
        title: 'Frontend',
        skills: ['React', 'Next', 'Tailwind CSS', 'Vue.js'],
    },
    {
        icon: Server,
        title: 'Backend',
        skills: ['Node.js', 'Express', 'FastAPI'],
    },
    {
        icon: Database,
        title: 'Base de Données',
        skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
    },
    {
        icon: Zap,
        title: 'Outils',
        skills: ['Git', 'Docker'],
    },
];
const programmingLanguages = ['JavaScript', 'TypeScript', 'Python', 'PHP'];

const Skills: React.FC = () => {


    return (
        <section id="skills" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-white font-mono">
            <div className="max-w-7xl mx-auto">
                <div className="mb-5">
                    <h1 className="text-3xl font-bold mb-4 flex items-center">$ ~/SKILLS <span className="animate-pulse ms-2">_</span> </h1>
                    <p className=" text-white/90 ">Mes compétences techniques et expertise professionnelle.</p>
                </div>

                <div className="mb-12 flex flex-wrap gap-4">
                    {programmingLanguages.map((language, index) => (
                        <div
                            key={index}
                            className="group p-4 py-2 border-2 border-teal-900/20 rounded-full hover:border-teal-400/60 transition-all duration-300 flex items-center justify-center shadow-2xl"
                        >
                            <span className="text-sm text-teal-500">
                                {language}
                            </span>
                        </div>
                    ))}

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={index}
                                className="group p-6 border-2 border-teal-900/20 rounded-xl hover:border-teal-400/60 transition-all duration-300  shadow-2xl"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-lg bg-teal-500/20 group-hover:bg-teal-500/30 transition-colors">
                                        <Icon size={24} className="text-teal-400" />
                                    </div>
                                    <h3 className="text-lg font-bold">{category.title}</h3>
                                </div>

                                <ul className="space-y-2">
                                    {category.skills.map((skill) => (
                                        <li
                                            key={skill}
                                            className="text-sm text-gray-300 flex items-center gap-2 group-hover:text-teal-300 transition-colors"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-teal-400" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    )
}

export default Skills