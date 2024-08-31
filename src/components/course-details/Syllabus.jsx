/* eslint-disable react/prop-types */
import { BookOpenText, CircleCheck } from "lucide-react";
import { useState } from "react";

function Syllabus({ data }) {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full max-w-7xl mx-auto my-10 px-4">
      <div className="my-6">
        <h1 className="font-bold text-xl text-purple-950 py-1">
          Pre-requisits
        </h1>
        <hr className="text-gray-300 pb-2" />
        {data.prerequisites.map((el, i) => (
          <li className="py-1" key={i}>
            {el}
          </li>
        ))}
      </div>
      <h1 className="font-bold text-xl text-purple-950 py-5 flex items-center">
        <BookOpenText className="mr-2" /> Syllabus:
      </h1>
      <hr />
      <div className="w-full bg-white hover:shadow-2xl  shadow-sm p-5 gap-4 flex flex-col my-6">
        <h3 className="font-semibold flex items-center pb-2">
          <CircleCheck className="mr-2 h-5 w-5" /> Week 1
        </h3>
        <h3 className=" ">
          <span className="font-bold text-md text-purple-900 pr-2">Topic:</span>{" "}
          {data.syllabus[0].topic}
        </h3>
        <h3 className=" ">
          <span className="font-bold text-md text-purple-900 pr-2">
            Content:
          </span>{" "}
          {data.syllabus[0].content}
        </h3>
      </div>

      {show && (
        <>
          {data.syllabus.slice(1).map((el, i) => (
            <div
              className="w-full bg-white hover:shadow-2xl  shadow-sm p-5 gap-4 flex flex-col my-6"
              key={i}
            >
              <h3 className="font-semibold  flex items-center pb-2">
                <CircleCheck className="mr-2 h-5 w-5" /> Week {el?.week}
              </h3>
              <h3 className=" ">
                <span className="font-bold text-md text-purple-900 pr-2">
                  Topic:
                </span>{" "}
                {el.topic}
              </h3>
              <h3 className=" ">
                <span className="font-bold text-md text-purple-900 pr-2">
                  Content:
                </span>{" "}
                {el.content}
              </h3>
            </div>
          ))}
        </>
      )}
      <h1
        className="font-semibold text-xl hover:underline hover:text-purple-400 text-purple-950 text-center cursor-pointer"
        onClick={() => setShow(!show)}
      >
        {show ? "View Less" : "View More"}
      </h1>
    </div>
  );
}

export default Syllabus;
