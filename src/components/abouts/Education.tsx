import { educaitonDatas } from "../../data/abouts"

const Education = () => {
    return (
        <div className="sm:flex sm:flex-col sm:space-y-10  my-10 ms-5 sm:mx-auto sm:my-10 sm:text-left w-fit">
            {
                educaitonDatas.map((education, index) => (
                    <div key={index} className={`flex max-sm:flex-col space-x-10 p-5 ${index == 0 && "bg-gray-400 rounded text-black font-bold"}`}>
                        <span className={index == 0 ? "text-gray-600" : "text-gray-500"}>{education.years}</span>
                        <div className="flex flex-col-reverse">
                            <div>
                                <h5>{education.school}</h5>
                                <p>{education.program}</p>
                                {
                                    education.obtained_degree && <p className="text-teal-500">
                                        <span className="underline underline-offset-5">Obtention du diplôme :</span> {education.obtained_degree}
                                    </p>
                                }
                            </div>
                            <h2 className="max-sm:text-xl max-md:text-2xl text-4xl font-sans font-semibold max-sm:mb-2 sm:mt-2">{education.degree}</h2>

                        </div>
                    </div>
                ))
            }

            <p className="text-gray-600 text-center font-bold border-t pt-3">ENI : Ecole Nationale d'Informatique</p>
        </div>
    )
}

export default Education