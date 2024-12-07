import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import GlobalIcon from "./wrapper";

const SvgCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const svgsPaths = [
      { path: "/next-icon.svg", name: "Next.js" },
      { path: "/react-icon.svg", name: "React" },
      { path: "/js-icon.svg", name: "JavaScript" },
      { path: "/django-icon.svg", name: "Django" },
      { path: "/tailwind-icon.svg", name: "Tailwind CSS" },
      { path: "/firebas-icon.svg", name: "Firebase" },
      { path: "/python-icon.svg", name: "Python" },
      { path: "/selenium-icon.svg", name: "Selenium" },
      { path: "/git-icon.svg", name: "Git" },
      { path: "/css-icon.svg", name: "CSS" },
    { path: "/html-icon.svg", name: "HTML" },
    { path: "/postgresql-icon.svg", name: "PostgreSQL" },
];

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className=" md:w-full  ">
      {/* Custom Navigation Buttons */}
      {/* <button
        ref={prevRef}
        className="rotate-180 flex text-end items-end self-end w-min absolute top-1/2 left-0 -translate-y-1/2 bg-[#30302d] rounded-full aspect-square -translate-x-7 duration-300 transition ease-in-out"
      >
        <GlobalIcon sx={{ cursor: "pointer" }}>
          <KeyboardArrowRightIcon />
        </GlobalIcon>
      </button>

      <button
        ref={nextRef}
        className="flex text-end items-end self-end w-min absolute top-1/2 right-0 -translate-y-1/2 bg-[#30302d] rounded-full aspect-square translate-x-7 duration-300 transition ease-in-out"
      >
        <GlobalIcon>
          <KeyboardArrowRightIcon />
        </GlobalIcon>
      </button> */}

      <Swiper
        modules={[Navigation, Pagination]}
        onSwiper={setSwiperInstance}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        spaceBetween={5}
        slidesPerView={12.3}

      >
        {svgsPaths.map((svg, index) => (
          <SwiperSlide key={index}>
            <div className="">
              <Image
                src={svg.path}
                width={50}
                height={50}
                alt={`${svg.name}`}
                title={svg.name}               />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SvgCarousel;
