/* eslint-disable react/prop-types */
import { Calendar,  UserCheck } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { markAsCompleted } from "@/redux/studentSlice";

const CourseCard = ({data}) => {
    const dispatch = useDispatch();
    console.log(data?.id)
  return (
    <div className="bg-white rounded-md p-4">
      <img
        src={data?.thumbnail}
        className="h-[250px] w-full rounded-md object-cover"
      />
      <div className="flex flex-col gap-3 pt-3">
        <h3 className="font-bold text-xl capitalize pt-4">
          {data?.name}
        </h3>
        <div className="flex items-center gap-8 pb-1">
          <h3 className="flex items-center capitalize">
            <UserCheck className="mr-2 h-5 w-5" /> 
            {data?.instructor}
          </h3>
          <h3 className="flex items-center capitalize">
            <Calendar className="mr-2 h-5 w-5" /> 
            {data?.duedate}
          </h3>
        </div>
        <Progress value={data?.progress} className="text-purple-950 h-2 my-5" />
        <div className="flex items-center gap-20">
          <Button className="max-w-[8rem] w-full rounded-md text-white bg-purple-950 hover:bg-purple-500 hover:cursor-pointer" onClick={() => dispatch(markAsCompleted(data?.id))}>Complete</Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
