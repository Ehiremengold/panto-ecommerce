import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight, FaRegStar } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { useRef } from "react";
import { breakpoints } from "../utils/constants";

const ProductsSlider = ({ sliderContent }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full py-10">
      {/* Custom Navigation buttons  */}
      <div className="absolute top-1/2 -left-5 z-10 transform -translate-y-1/2">
        <button
          ref={prevRef}
          className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center cursor-pointer"
        >
          <FaArrowLeft size={"1.5rem"} color="#1e1e1e" />
        </button>
      </div>

      <div className="absolute top-1/2 -right-5 z-10 transform -translate-y-1/2">
        <button
          ref={nextRef}
          className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center cursor-pointer"
        >
          <FaArrowRight size={"1.5rem"} color="#1e1e1e" />
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={breakpoints}
      >
        {sliderContent.map((item, indx) => (
          <SwiperSlide key={indx} className="">
            <div className="grid place-content-center">
              <img src={item?.image} alt={item?.title + indx} />
            </div>
            <div className="rounded-b-2xl bg-white p-6">
              <span className="text-base text-[#8d8d8d] font-normal capitalize mb-3">
                {item?.title}
              </span>
              <h4 className="text-xl text-[#0d1b39] font-semibold capitalize mb-3">
                {item?.description}
              </h4>
              <div className="flex items-center gap-1">
                {item?.rating &&
                  [...Array(Math.ceil(item?.rating))]?.map((_, i) => (
                    <span key={i} className="">
                      <FaRegStar color="#f6b76f" size={"1.5rem"} />
                    </span>
                  ))}
              </div>

              <div className="flex items-center justify-between w-full">
                <p className="text-xl text-[#0d1b39] font-semibold">
                  ${item?.price}
                </p>
                <button className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#1e1e1e] cursor-pointer ">
                  <GoPlus color="white" size={"1.5rem"} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
