import React from "react";
import { projectsData } from "../data/project";
import { ExternalLink } from "lucide-react";

const Project: React.FC = () => {
    return (
        <section id="certification">
            <h1 className="section-title">$ ~/Projets <span className="animate-pulse ms-2">_</span> </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:gap-12 max-sm:space-y-15">
                {/* grid md:grid-cols-2 lg:grid-cols-4 sm:gap-3 */}
                {
                    projectsData.map((data, index) =>
                        <div key={index} className="group ">
                            <div className="relative">
                                <img
                                    src={data.img}
                                    alt={data.title}
                                    className="relative w-150 rounded-lg"
                                />
                                { data.link &&
                                    <a
                                        href={data.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-0 right-0 flex items-center justify-center z-20
                                        rounded-full p-1 px-2 bg-white shadow-md text-gray-800 font-normal -translate-y-3
                                        md:opacity-0 md:translate-y-0 translate-x-[-12px]
                                        transition-all duration-300
                                        group-hover:opacity-100
                                        sm:group-hover:translate-y-[-12px]
                                        group/item"
                                    >
                                        <span className="font-bold text-sm max-w-0 max-lg:mx-2 max-lg:max-w-full overflow-hidden whitespace-nowrap transition-all duration-300 group-hover/item:mx-2 group-hover/item:max-w-[120px]">Démo</span>
                                        <ExternalLink size={18} />
                                    </a>
                                }
                                {/* <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute bg-white/90 text-black w-full h-full top-0 backdrop-blur-[2px] rounded-lg p-3">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae hic delectus, voluptatibus vel excepturi voluptas sapiente minima eos, accusamus laboriosam odit doloremque? Natus molestias officiis aliquid rerum consequatur ullam saepe.
                                </div> */}
                            </div>
                            <h2 className="text-xl font-extrabold text-white mt-5">{data.title}</h2>
                            <p>{data.description}</p>
                            <ul className="flex flex-wrap items-center mt-3 gap-3">
                                {data.stacks.map((stack, i) =>
                                    <li key={i} className="text-xs border-2 border-teal-500  text-white rounded-full px-2 p-1">{stack}</li>
                                )}
                            </ul>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Project