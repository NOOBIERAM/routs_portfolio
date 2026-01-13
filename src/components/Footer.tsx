import { Copyright } from "lucide-react";
import React from "react";


const Footer: React.FC = () => {
    return (
        <footer id="footer" className="flex flex-col justify-center pb-8 px-10 lg:px-75 pt-40">
            <div className="border-2 border-gray-700 rounded-2xl w-full bg-black/30 text-gray-500">
                <div className="flex items-center justify-between  border-gray-700 p-2 px-3 font-bold">
                    {/* <span className="flex items-center"><TerminalSquareIcon className="me-3 text-sm text-gray-300" />Hello world_</span> */}
                    <div className="hidden sm:flex items-center space-x-2">
                        <span className="w-4 h-4 bg-teal-500/30 rounded-full"></span>
                        <span className="w-4 h-4 bg-teal-500/20 rounded-full"></span>
                        <span className="w-4 h-4 bg-teal-500/10 rounded-full"></span>
                    </div>
                    <div className="font-light text-xs sm:text-sm flex items-center justify-center space-x-1"><Copyright className="translate-y-[-2px]" size={15}/><span>2025 - RoutsGG - NOOBIERAM</span> </div>
                    <div className="hidden sm:flex items-center space-x-2">
                        <span className="w-4 h-4 bg-teal-500/10 rounded-full"></span>
                        <span className="w-4 h-4 bg-teal-500/20 rounded-full"></span>
                        <span className="w-4 h-4 bg-teal-500/30 rounded-full"></span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer