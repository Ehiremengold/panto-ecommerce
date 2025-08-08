import React from "react";
import material1 from "../assets/images/materials/materials_1.png";
import material2 from "../assets/images/materials/materials_2.png";
import material3 from "../assets/images/materials/materials_3.png";

const Materials = () => {
  return (
    <section className="bg-white py-12 sm:py-24 lg:py-48 sm:px-0 px-4 flex items-center justify-end">
      <div className="xl:w-[90%] flex items-center lg:gap-28 xl:gap-40">
        {/* Text Section */}
        <div className="flex flex-col lg:items-start items-center gap-4 w-full mt-8 lg:mt-0 px-4 sm:px-7">
          <h2 className="text-primary uppercase font-medium text-sm sm:text-base">
            Materials
          </h2>
          <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
            Very serious materials for making furniture
          </h3>
          <p className="text-sm sm:text-base lg:text-lg lg:text-left text-center text-gray-600">
            Because panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            relatively low price
          </p>
          <button className="cursor-pointer text-primary flex gap-2 items-center text-sm sm:text-base w-fit">
            More info
            <span className="text-sm text-primary">→</span>
          </button>
        </div>
        {/* img section */}

        <div className="flex items-end gap-8 w-full">
          <div className="flex flex-col gap-8">
            <img src={material1} className="w-full h-full" alt="" />
            <img src={material2} className="w-full h-full" alt="" />
          </div>
          <div className="w-full max-w-md lg:max-w-lg h-auto relative">
            <div className="bg-gray-100  lg:block hidden rounded-l-xl h-40 sm:h-48 lg:h-60 w-64 sm:w-80 lg:w-96 absolute -top-8 sm:-top-10 lg:-top-16 z-10 right-0"></div>
            <img
              src={material3}
              alt="experiences-img"
              className="z-50 lg:rounded-l-none rounded-l-2xl relative w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
