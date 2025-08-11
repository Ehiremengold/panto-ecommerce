import { Search } from "lucide-react";
import { motion } from "framer-motion";

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
      <div className="gap-3 w-full lg:px-0 px-5 text-center bg-black/10 absolute inset-0 grid place-content-center place-items-center">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white font-extrabold xl:text-9xl md:text-6xl text-3xl leading-normal"
        >
          Make Your Interior More{" "}
          <span className="bg-primary px-2">Minimalistic</span> & Modern
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-white lg:text-3xl text-xl max-w-4xl"
        >
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </motion.p>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="relative w-full lg:max-w-3xl max-w-xl"
        >
          <input
            type="text"
            placeholder="Search Furniture"
            className="bg-white/20 w-full border border-white rounded-4xl text-white px-6 py-4 outline-none placeholder:text-white/50 backdrop-blur-md"
          />
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-primary rounded-full h-10 w-10 absolute right-5 top-2 grid place-content-center shadow-lg cursor-pointer"
          >
            <Search color="white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
