
import React from "react";
import Cert_7ED092929B39 from "../assets/images/Certificate/7ED092929B39.png"
import { LinkIcon } from "lucide-react";

const certificatesData = [
    {
        title: "JavaScript (Itermédiaire)",
        from: "HackerRank",
        date: "Jan 2026",
        link: "https://www.hackerrank.com/certificates/7ed092929b39",
        img: Cert_7ED092929B39
    },

]


const Certification: React.FC = () => {
    return (
        <section id="certification">
            <h1 className="section-title">$ ~/CERTIFICATION <span className="animate-pulse ms-2">_</span> </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:gap-3">
                {
                    certificatesData.map((certificate, index) => {
                        return (
                            <div key={index} className="group p-5 bg-black/30 rounded-xl">
                                <div className="relative mb-7">
                                    <img
                                        src={certificate.img}
                                        alt={certificate.title}
                                        className="relative shadow-2xl shadow-gray-900 px-1"
                                    />
                                    <a
                                        href={certificate.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-0 right-0 flex items-center justify-center space-x-3 
                                        rounded-full px-3 py-1 bg-gray-800 shadow-md shadow-gray-500 text-white translate-y-[-20px]
                                        sm:opacity-0 sm:translate-y-0 translate-x-[-12px]
                                        transition-all duration-300
                                        group-hover:opacity-100
                                        sm:group-hover:translate-y-[-20px]"
                                    >
                                        <span className="text-[13px] font-bold">Ouvrir</span>
                                        <LinkIcon size={13} />
                                    </a>
                                </div>
                                <h2 className="text-white font-extrabold text-[19px]">{certificate.title}</h2>
                                <h2 >
                                    <span className="text-white font-extrabold">{certificate.from}</span> - <span>{certificate.date}</span>
                                </h2>
                            </div>

                        )
                    })
                }
            </div>
        </section>
    )
}

export default Certification