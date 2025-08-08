import experiencesImg from "../assets/images/experiences.png";

const Experiences = () => {
  return (
  <section className="bg-white py-12 sm:py-24 lg:py-48 sm:px-0 px-4">
  <div className="xl:w-[80%] flex flex-col lg:flex-row items-center lg:items-start lg:gap-28 xl:gap-40 ">
    {/* Image Section */}
    <div className="w-full max-w-md lg:max-w-lg h-auto relative">
      <div className="bg-gray-100  lg:block hidden rounded-r-xl h-40 sm:h-48 lg:h-60 w-64 sm:w-80 lg:w-96 absolute -top-8 sm:-top-10 lg:-top-16 z-10"></div>
      <img
        src={experiencesImg}
        alt="experiences-img"
        className="z-50 lg:rounded-l-none rounded-l-2xl relative w-full h-auto object-cover"
      />
      <div className="bg-gray-100 lg:block hidden rounded-r-xl h-40 sm:h-48 lg:h-60 w-64 sm:w-80 lg:w-96 absolute -right-8 sm:-right-12 lg:-right-16 top-12 sm:top-16 lg:top-20 z-10"></div>
    </div>

    {/* Text Section */}
    <div className="flex flex-col lg:items-start items-center gap-4 w-full mt-8 lg:mt-0 px-4 sm:px-7">
      <h2 className="text-primary uppercase font-medium text-sm sm:text-base">Experiences</h2>
      <h3 className="font-bold text-2xl sm:text-left text-center sm:text-3xl lg:text-4xl xl:text-5xl">
        We Provide You The Best Experience
      </h3>
      <p className="text-sm sm:text-base lg:text-lg lg:text-left text-center text-gray-600">
        You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and luxurious style and with premium quality materials
      </p>
      <button className="cursor-pointer text-primary flex gap-2 items-center text-sm sm:text-base w-fit">
        More info
        <span className="text-sm text-primary">→</span>
      </button>
    </div>
  </div>
</section>
  );
};

export default Experiences;
