import React from "react";
import Image from "next/image";
const BannerItem = ({ slide }) => {
  console.log(slide);
  const { image, id, prev, next, title, description } = slide;
  console.log(image);
  return (
    <div
      id={`slide${id}`}
      className="carousel-item relative w-full md:w-full h-full"
    >
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-black opacity-100 to-transparent"></div>
      <div className="carousel-img">
        <Image src={image} alt="a" className="w-screen h-screen" />
      </div>

      <div className="absolute transform md:left-20 left-2 top-14 mt-16">
        <h1 className=" font-bold text-white">{title}</h1>
        <p className="text-4xl text-white lg:w-1/2 mt-5 w-full">
          {description}
        </p>
        <div className="flex sm:flex-row gap-4 mt-6 flex-col">
          <button className="outline-button">Get Started</button>
          <button className="bg-button">Get Started</button>
        </div>
      </div>
      <div className="absolute flex justify-end w-2/5 transform left-20 top-64"></div>

      <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-12 bottom-24">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
