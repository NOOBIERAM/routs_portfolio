import { Zap } from "lucide-react"

const Disponibility = () => {
  return (
     <div
            className={`fixed z-50 top-6 right-6 transition-all duration-700 flex flex-col sm:flex-row space-y-2 sm:space-x-3 opacity-100 }`}
        >
            <div className="text-sm group sm:w-max h-12 bg-second sm:px-3  flex items-center  justify-center border-3 border-gray-700 bg rounded-xl text-white/80 font-bold">
                <Zap size={20} className="text-teal-400 animate-pulse"/> 
                <span className="overflow-hidden whitespace-nowrap max-w-0 transition-all duration-300 group-hover:mx-2 group-hover:max-w-[120px] ">Disponible</span>
            </div>
            
        </div>
  )
}

export default Disponibility