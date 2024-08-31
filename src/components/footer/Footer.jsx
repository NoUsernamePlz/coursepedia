

const Footer = () => {
  return (
    <div className="w-full bg-purple-950 h-[300px] relative text-white p-4 flex items-center ">
        <div className="max-w-7xl w-full mx-auto flex md:items-center justify-between flex-col md:flex-row max-md:gap-9">
        <h1 className="md:text-3xl  text-xl font-extrabold text-white text-pretty text-left">
         CoursePedia
        </h1>
        
         <div className="flex md:flex-col gap-3">
         <h1 className=" font-bold ">Contents</h1>
         <h2>About</h2>
          <h2>Courses</h2>
          <h2>Enroll</h2>
         </div>
         <div className="flex md:flex-col gap-3">
          <h1 className=" font-bold ">Contact</h1>
          <h2>Email</h2>
          <h2>LinkedIn</h2>
          <h2>Twitter</h2>
         </div>
        </div>
      <h1 className="text-gray-100 text-sm font-extralight p-1 absolute bottom-0 left-3">@@copyright komal</h1>
    </div>
  )
}

export default Footer
