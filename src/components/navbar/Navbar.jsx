import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    {
      link: "Home",
      path: "/",
    },
    {
      link: "Dashboard",
      path: "/dashboard",
    },
  ];

  return (
    <div className="w-full  sticky top-0  bg-white z-50 flex flex-col items-center p-4">
      <div className="max-w-7xl w-full mx-auto  flex  flex-row justify-between items-center h-[70px]">
        <h1 className="md:text-3xl  text-xl font-extrabold text-purple-950 text-pretty">
          CoursePedia
        </h1>

        <div className="font-semibold md:gap-5 gap-3 flex items-center justify-around ">
          {navLinks.map((el, i) => {
            return (
              <Link
                to={el.path}
                key={i}
                className="text-purple-900 cursor-pointer"
              >
                {el.link}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
