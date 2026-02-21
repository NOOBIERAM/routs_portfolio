import { experienceDatas } from "../../data/abouts"

const Experience = () => {
    return (
        <div className="sm:flex sm:flex-col sm:space-y-10  my-10 ms-5 sm:mx-auto sm:my-10 sm:text-left w-fit">
            {
                experienceDatas.map((Experience, index) => (
                    <div key={index} className={`flex max-sm:flex-col space-x-10 p-5`}>
                        <div className="w-50 sm:text-right max-sm:mb-5">
                            <span className="text-lg">{Experience.years}</span>
                            <div className="flex flex-wrap space-x-3 items-center sm:justify-end">
                                {
                                Experience.stacks.map((stack, index) => (
                                    <p key={index} className="text-sm text-gray-500"># {stack}</p>
                                ))
                            }
                            </div>
                        </div>
                        <div className="flex flex-col-reverse border-l-4 pl-5 pt-0 max-w-120 ">
                            <div>
                                <h5 className="text-teal-500">{Experience.role}</h5>
                                <p className="text-teal-600">{Experience.company}</p>
                                <p className="text-[16px] mt-3">{Experience.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Experience