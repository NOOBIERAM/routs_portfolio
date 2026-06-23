import React, { useEffect, useState } from "react";
import { projectsData } from "../data/project";
import { ExternalLink, X } from "lucide-react";

type SelectedProjectImage = {
    title: string;
    img: string;
};

const Project: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<SelectedProjectImage | null>(null);

    useEffect(() => {
        if (!selectedImage) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedImage(null);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedImage]);

    return (
        <>
            <section id="certification">
                <h1 className="section-title">$ ~/Projets <span className="animate-pulse ms-2">_</span> </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:gap-12 max-sm:space-y-15">
                    {/* grid md:grid-cols-2 lg:grid-cols-4 sm:gap-3 */}
                    {
                        projectsData.map((data, index) =>
                            <div key={index} className="group ">
                                <div className="relative ">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedImage({ title: data.title, img: data.img })}
                                        className="block w-full cursor-zoom-in text-left"
                                        aria-label={`Afficher l'image du projet ${data.title}`}
                                    >
                                        <img
                                            src={data.img}
                                            alt={data.title}
                                            className="relative rounded-lg transition duration-300 group-hover:brightness-90"
                                        />
                                    </button>
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
                                    { data.github &&
                                        <a
                                            href={data.github}
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
                                            <span className="font-bold text-sm max-w-0 max-lg:mx-2 max-lg:max-w-full overflow-hidden whitespace-nowrap transition-all duration-300 group-hover/item:mx-2 group-hover/item:max-w-[120px]">Repo</span>
                                            <ExternalLink size={18} />
                                        </a>
                                    }
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

            {selectedImage &&
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Image du projet ${selectedImage.title}`}
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        type="button"
                        onClick={() => setSelectedImage(null)}
                        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                        aria-label="Fermer l'aperçu"
                    >
                        <X size={24} />
                    </button>
                    <img
                        src={selectedImage.img}
                        alt={selectedImage.title}
                        className="max-h-[88vh] max-w-[95vw] rounded-lg object-contain shadow-2xl shadow-black"
                        onClick={(event) => event.stopPropagation()}
                    />
                </div>
            }
        </>
    )
}

export default Project
