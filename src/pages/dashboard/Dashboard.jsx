import EnrolledCourses from "@/components/dashboard/EnrolledCourses";
import StudentDetails from "@/components/dashboard/StudentDetails";
import Layout from "@/components/layout/Layout";
import { fetchStudents } from "@/redux/studentSlice";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Dashboard() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const status = useSelector((state) => state.students.status);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStudents());
    }
  }, [status, dispatch]);

  if (!students) {
    return <h1>no data</h1>;
  }

  console.log(students);
  return (
    <Layout>
      <StudentDetails data={students[0]} />
      <EnrolledCourses />
    </Layout>
  );
}

export default Dashboard;
