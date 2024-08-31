import CourseList from "@/components/home/CourseList";
import HeroSection from "@/components/home/HeroSection";
import Layout from "@/components/layout/Layout";
import { SearchCheckIcon } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCourses = useSelector((state) => {
    const query = searchQuery.toLowerCase();
    return (state.courses.courses || []).filter((course) => {
      if (!course) return false;
      const courseName = course.name?.toLowerCase() || '';
      const instructorName = course.instructor?.toLowerCase() || '';
      return courseName.includes(query) || instructorName.includes(query);
    });
  });

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  return (
    <Layout>
      <div className="relative">
        <HeroSection />
        <div className="absolute w-full z-10 bottom-4">
          <div className="relative md:shadow-inner border-gray-200 rounded-sm md:border p-2 flex items-center lg:max-w-md lg:w-full bg-white mx-auto my-3 w-[90%]">
            <input
              type="text"
              placeholder="Search by course name or instructor..."
              name="searchQuery"
              value={searchQuery}
              onChange={handleSearch}
              className="outline-none focus:outline-none border-0 focus:border-0 content-center pl-8 w-full"
            />
            <SearchCheckIcon className="absolute left-1 text-purple-900" />
          </div>
        </div>
      </div>

      <div className="h-screen overflow-y-scroll">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((el, i) => (
            <CourseList key={i} data={el} />
          ))
        ) : (
          <p className="text-center mt-4 font-extrabold text-purple-950 text-3xl">No courses found.</p>
        )}
      </div>
    </Layout>
  );
};

export default Home;