import { qualityDatas } from "../../data/abouts"

const Whoami = () => {
    return (
        <div className="my-10 text-start ms-5 sm:mx-auto sm:my-20 sm:text-left w-fit">
            <h5 className="text-md sm:text-3xl text-teal-500 tracking-[8px]">#WEB|MOBILE</h5>
            <h2 className="font-bold text-3xl sm:text-7xl mb-15 sm:mb-0">
                Développeur Fullstack
            </h2>
            <p className="sm:ms-auto sm:max-w-105 font-light my-5">
                "Je crée des applications modernes et résous des problèmes complexes avec un code propre et efficace."
            </p>
            <div className="sm:ms-auto sm:max-w-105 text-start mt-8 fit flex flex-wrap gap-3">
                {
                    qualityDatas.map((quality, index) => {
                        const Icon = quality.icon
                        return (
                            <div key={index} className="flex items-center justify-center border-2 py-1 px-3 rounded-full font-bold text-xs space-x-2"><Icon size={22} /><span>{quality.label}</span></div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Whoami