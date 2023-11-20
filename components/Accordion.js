import React, { useState, useRef } from "react";
import Chevron from "./Chevron";



const Accordion = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        );
    }
    return (

        <div className="accordion__section mb-2">
            <button className={`accordion bg-white dark:bg-[#373C43] dark:text-white border-2 dark:border-white rounded-md border-black dark:hover:bg-black  : ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion__title text-sm md:text-xl ">{props.data.topic}</p>
                <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion__content rounded-xl"
            >

                <div className="flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full  divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-[#2f3136]">
                                        <tr>
                                            <th scope="col" className="px-4 py-3.5 text-md font-semibold text-left rtl:text-right text-black dark:text-white relative">
                                                Status
                                            </th>

                                            <th scope="col" className="px-8 py-3.5 text-md font-semibold text-left rtl:text-right text-black  dark:text-white">
                                                Problem
                                            </th>

                                            <th scope="col" className="px-10 py-3.5 text-md font-semibold text-right rtl:text-right text-black  dark:text-white">
                                                Difficulty
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-md font-semibold text-center rtl:text-right text-black  dark:text-white">
                                                Animated Solution
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-md font-semibold text-center rtl:text-right text-black  dark:text-white">
                                                Code
                                            </th>

                                        </tr>
                                    </thead>

                                    {/* Traversing the array */}
                                    {props.data.problems.map((problem) => (

                                        <tbody className="bg-white  divide-gray-200 dark:divide-gray-700 dark:bg-[#2f3136]">
                                            <tr>
                                                <td className="px-6 py-4  font-medium text-gray-700 dark:text-white whitespace-nowrap">
                                                    <div className="inline-flex items-center gap-x-3 ">
                                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-lg font-bold text-black dark:text-white whitespace-nowrap">{problem.problem}</td>
                                                <td className="px-12 py-4 text-lg font-medium text-gray-700 whitespace-nowrap text-end">
                                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                                        {problem.difficulty}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-2 text-lg text-black dark:text-light whitespace-nowrap">
                                                    <a href="#">

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-camera-video-fill relative left-28" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" /> </svg>

                                                    </a>
                                                </td>
                                                <td className="px-4 py-4 text-lg text-black font-bold dark:text-white whitespace-nowrap text-center">{problem.code}</td>

                                            </tr>

                                        </tbody>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Accordion;
