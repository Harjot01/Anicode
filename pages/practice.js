import React, { useState } from "react";
import Leetcode150 from "./practice/Leetcode150";
import Blind75 from "./practice/Top100";
import Navbar from "../components/navbar";
import Top100 from "./practice/Blind75";

const Practice = () => {
  const [Leetcode150data, setLeetcode150data] = useState(true);
  const [Blind75data, setBlind75data] = useState(false);
  const [Top100data, setTop100data] = useState(false);

  return (
    <section className="bg-light dark:bg-dark">
      <Navbar />
      <div className="flex flex-col mx-auto w-[85%] py-20 ">
        {/* <h2 className="text-center text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Resume
        </h2>
        <h4 className="pt-6 pb-20 text-center text-xl font-medium sm:text-2xl lg:text-3xl">
          Here is my Resume
        </h4> */}
        <div>
          <nav className="mb-8 max-w-4xl mx-auto">
            <ul className="flex flex-row justify-center items-center text-black relative top-4 md:top-10">
              <li
                onClick={() =>
                  setLeetcode150data(true) &
                  setBlind75data(false) &
                  setTop100data(false)
                }
                className={`${Leetcode150data ? "bg-white dark:bg-[#EBEBEB]" : "bg-light dark:bg-dark dark:text-white"
                  } resumeLi  hover:bg-white dark:hover:bg-[#EBEBEB] dark:hover:text-black transition ease-in delay-50 rounded-sm text-sm sm:text-md md:text-2xl font-medium px-4 py-1 md:px-6 md:py-3  cursor-pointer `}
              >
                LeetCode 150
              </li>

              <li
                onClick={() =>
                  setLeetcode150data(false) &
                  setBlind75data(true) &
                  setTop100data(false)

                }
                className={`${Blind75data ? "bg-white dark:bg-[#EBEBEB]" : "bg-light dark:bg-dark dark:text-white"
                  } resumeLi hover:bg-white dark:hover:bg-[#EBEBEB] dark:hover:text-black transition ease-in delay-50 rounded-sm text-sm sm:text-md md:text-2xl font-medium px-4 py-1 md:px-6 md:py-3 cursor-pointer`}
              >
                Top 100
              </li>

              <li
                onClick={() =>
                  setLeetcode150data(false) &
                  setBlind75data(false) &
                  setTop100data(true)

                }
                className={`${Top100data ? "bg-white dark:bg-[#EBEBEB]" : "bg-light dark:bg-dark dark:text-white"
                  } resumeLi hover:bg-white dark:hover:bg-[#EBEBEB] dark:hover:text-black transition ease-in delay-50 rounded-sm text-sm sm:text-md md:text-2xl font-medium px-4 py-1 md:px-6 md:py-3 cursor-pointer`}
              >
                Blind 75
              </li>
            </ul>
            <hr class="w-full h-1 mx-auto my-4 bg-white border-0 rounded md:my-10 dark:white"></hr>
          </nav>
        </div>
        {Leetcode150data && <Leetcode150 />}
        {Blind75data && (
          <Blind75 />
        )}
        {Top100data && <Top100 />}
      </div>
    </section>
  );
};

export default Practice;
