/* eslint-disable react/prop-types */
import { BellRing, Clock, MapPinHouse, NotebookPen, User2 } from "lucide-react";

function CourseData({ data }) {
  return (
    <div className="w-full  flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto flex lg:flex-row flex-col items-center gap-20 py-20 px-4">
        <img
          src={data?.thumbnail}
          alt="course1"
          className="lg:w-[500px] md:h-[500px] h-[300px] object-cover rounded-md w-full"
        />
        <div className="lg:max-w-xl w-full md:h-[500px] max-lg:px-4">
          <h1 className="font-extrabold text-purple-950 text-4xl pb-1">
            {data?.name}
          </h1>
          <hr />
          <div className="flex flex-col items-start justify-between my-8">
            <h3 className="font-bold text-purple-950 inline-flex py-3">
              <User2 className="mr-1 text-xl" /> Mentor:
              <span className="font-semibold ml-3">{data?.instructor}</span>
            </h3>

            <h3 className="font-bold text-purple-950 inline-flex py-3">
              <Clock className="mr-2" /> Duration:
              <span className="font-semibold ml-3">{data?.duration}</span>
            </h3>

            <h3 className="font-bold text-purple-950 inline-flex py-3">
              <MapPinHouse className="mr-2" />
              Location:
              <span className="font-semibold ml-3">{data?.location}</span>
            </h3>

            <h3 className="font-bold text-purple-950 inline-flex py-3">
              <NotebookPen className="mr-2" /> Enrollment Status:
              <span className="font-semibold ml-3 capitalize">
                {data?.enrollmentStatus}
              </span>
            </h3>

            <h3 className="font-bold text-purple-950 inline-flex py-3">
              <BellRing className="mr-2" /> Schedule:
              <span className="font-semibold ml-3 capitalize">
                {data?.schedule}
              </span>
            </h3>
          </div>

          <p>{data?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseData;
