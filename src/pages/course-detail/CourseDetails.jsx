import CourseData from "@/components/course-details/CourseData";
import Syllabus from "@/components/course-details/Syllabus";
import Layout from "@/components/layout/Layout";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();
  
  const course = useSelector((state) =>
    state.courses.courses.find((course) => course.id === id)
  );

  console.log(course);
  return (
    <Layout>
      <CourseData data={course} />
      <Syllabus data={course} />
    </Layout>
  );
}

export default CourseDetails;
