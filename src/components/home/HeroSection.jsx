import { CoffeeIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full h-[300px] mx-auto relative flex items-center justify-center">
      <img
        src="/images/homehero.jpg"
        alt="hero"
        className="w-full h-[300px] mx-auto object-cover"
      />
      <h1 className="  w-full h-[300px] bg-black/60 text-white font-extrabold text-4xl absolute top-0 text-center flex flex-col items-center justify-center">
        <span className="inline-flex">
          Browse <CoffeeIcon className="h-10 w-10  ml-2" />
        </span>
        <span>The Best Courses Ever!!</span>
      </h1>
    </div>
  );
};

export default HeroSection;
