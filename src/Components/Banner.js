import React from "react";
import Image from "next/image";

// import  {banner1} from '../images'
import BannerItem from "./BannerItem";
import { banner1, banner2, banner3 } from "@/images";

const Banner = () => {
  const bannerData = [
    {
      image: banner1,
      prev: 3,
      id: 1,
      next: 2,
      title: "Shared living space",
      description:
        "What fun could we have more than having roommate with similar interest.",
    },
    {
      image: banner2,
      prev: 1,
      id: 2,
      next: 3,
      title: "Find places around you",
      description:
        "than having roommate with similar interest. What fun could we have more ",
    },
    {
      image: banner3,
      prev: 2,
      id: 3,
      next: 1,
      title: "Shared living space",
      description:
        "What fun could we have more than having roommate with similar interest.",
    },
  ];
  return (
    <div className="carousel w-full">
      {bannerData.map((slide) => (
        <BannerItem key={slide.id} slide={slide} />
      ))}
    </div>
  );
};

export default Banner;
