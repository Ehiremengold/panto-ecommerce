import React from "react";

const Testimonial = () => {
  return (
    <section className="w-full py-12 flex flex-col items-center justify-center gap-8">
      <h1 className="text-primary uppercase font-medium text-sm sm:text-base">
        Testimonial
      </h1>
      <p className=" lg:text-4xl text-2xl text-gray-600 leading-relaxed text-center sm:w-4/5 sm:px-0 px-2">
        "Finding pieces that match my minimalist aesthetic used to be a
        challenge—until I found Panto. Every item I’ve ordered, from their sleek
        lighting to neutral-toned furniture, brings calm and clarity to my
        space. Quality, fast delivery, and beautiful simplicity in one place."
      </p>
      <div className="flex items-center gap-4">
        <div className="rounded-full w-12 h-12 bg-black overflow-hidden">
          <img src="https://rairaksa.github.io/assets/img/rai.jpg" />
        </div>
        <div className="flex flex-col tracking-wider">
          <label className="text-gray-600 font-bold text-base">
            Lucky Dube
          </label>
          <label className="text-gray-400 font-normal text-sm">
            Lagos, Nigeria
          </label>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
