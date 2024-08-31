import { LibraryBig } from "lucide-react";
import CourseCard from "./CourseCard";
import { useSelector } from "react-redux";

const EnrolledCourses = () => {
    const student = useSelector(state =>
        state.students.students[0]
      );

      if(!student){
        return <h1>no data</h1>
      }
  return (
    <div className="my-16 max-w-7xl w-full mx-auto">
      <h1 className="text-2xl font-bold text-purple-950 items-center flex py-6 px-4">
        <LibraryBig className="h-10 w-10 mr-3" /> Enrolled Courses
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {
            student.enrolledCourses.map((el,i)=>(
                <CourseCard  key={i} data={el}/>
            ))
        }
       
      </div>
    </div>
  );
};

export default EnrolledCourses;
