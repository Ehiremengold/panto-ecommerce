import material1 from "../assets/images/materials/materials_1.png";
import material2 from "../assets/images/materials/materials_2.png";
import material3 from "../assets/images/materials/materials_3.png";

const Materials = () => {
  return (
    <section className="bg-white py-12  px-4 sm:px-6 lg:px-12 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center lg:items-end lg:gap-28 xl:gap-40">
        {/* Text Section */}
        <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left gap-4 order-2 lg:order-1 mt-8 lg:mt-0">
          <h2 className="text-primary uppercase font-medium text-sm sm:text-base">
            Materials
          </h2>
          <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
            Very serious materials for making furniture
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">
            Because panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            relatively low price
          </p>
          <button className="cursor-pointer text-primary flex gap-2 items-center text-sm sm:text-base w-fit">
            More info <span className="text-sm">→</span>
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full flex flex-col sm:flex-row justify-center md:items-end items-center gap-8 order-1 lg:order-2">
          <div className="flex flex-col gap-8 w-full sm:w-auto justify-center items-center">
            <img src={material1} className="w-full max-w-xs object-contain" alt="material1" />
            <img src={material2} className="w-full max-w-xs object-contain" alt="material2" />
          </div>

          <div className="w-full max-w-md relative items-center justify-center flex">
            {/* Background Rectangle */}
            {/* <div className="bg-gray-100 hidden lg:block rounded-l-xl h-40 sm:h-48 lg:h-60 w-64 sm:w-80 lg:w-96 absolute -top-8 sm:-top-10 lg:-top-16 z-10 right-0"></div> */}

            <img
              src={material3}
              alt="material3"
              className="z-50 relative w-full h-auto object-cover rounded-r-2xl "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
