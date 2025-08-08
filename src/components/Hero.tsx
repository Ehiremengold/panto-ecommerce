import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url('/banner.png')`,
        objectFit: "cover",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="gap-3 w-full lg:px-0  px-5  text-center  bg-black/10 absolute inset-0 grid place-content-center place-items-center">
        <h1 className="text-white font-extrabold xl:text-9xl md:text-6xl text-3xl leading-normal">
          Make Your Interior More{" "}
          <span className="bg-primary">Minimalistic</span> & Modern
        </h1>
        <p className="text-white lg:text-3xl text-xl max-w-4xl">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
        <div className="relative w-full lg:max-w-3xl max-w-xl">
          <input
            type="text"
            placeholder="Search Furniture"
            className="bg-white/20 w-full border border-white rounded-4xl text-white px-6 py-4 outline-none placeholder:text-white/50"
          />
          <div className="bg-primary rounded-full h-10 w-10 absolute right-5 top-2 grid place-content-center">
            <Search color="white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
