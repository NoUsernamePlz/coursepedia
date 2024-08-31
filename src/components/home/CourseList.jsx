/* eslint-disable react/prop-types */
import { ThumbsUp, User } from "lucide-react";
import { Link } from "react-router-dom";

const CourseList = ({data}) => {
  console.log(data)
  return (
    <Link to={`/details/${data.id}`}>
     <div className="w-full bg-white border border-gray-200 hover:scale-105 duration-500 cursor-pointer flex  flex-col lg:flex-row justify-between lg:items-center p-4 lg:h-[200px] my-10 max-w-7xl mx-auto rounded-lg gap-4">
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        <img
          src={data?.thumbnail}
          alt="course-img"
          className="aspect-video md:h-[100px] h-[200px] object-cover rounded-lg"
        />
        <div className="md:max-w-[300px] w-full">
          <h1 className="font-bold text-xl text-purple-950 line-clamp-2 capitalize">
            {data?.name}
          </h1>
          <h3 className="flex items-center py-2">
            <User className="mr-1 text-purple-950" /> {data?.instructor}
          </h3>
        </div>
      </div>

      <div className="w-full lg:max-w-[40rem] line-clamp-4">
        {data?.description}
      </div>

      <div className="items-center flex flex-col mr-3">
        <ThumbsUp className="text-purple-950 font-bold text-sm" /> {data?.likes}
      </div>
    </div>
    </Link>
   
  );
};

export default CourseList;
