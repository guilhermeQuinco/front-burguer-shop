"use client";

import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./slider.css";

import { IItem } from "@/@types";
import Link from "next/link";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { Layout } from "./_layout";

const Slide = ({ items }: { items: IItem[] }) => {
  return (
    <>
      <Swiper
        slidesPerView={5 / 1.2}
        slidesPerGroupSkip={3}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={14}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="flex flex-col justify-center">
            <Link
              href={"/"}
              className=" w-full flex flex-col justify-center items-center border rounded-lg shadow-lg p-5 bg-white"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                width={200}
                height={200}
              />
              <span>{item.name}</span>
            </Link>
          </SwiperSlide>
        ))}

        <SlideButtons />
      </Swiper>
    </>
  );
};

export default Slide;

const SlideButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="">
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute top-24 left-[20px] bg-white border p-3 rounded-full"
      >
        <ChevronsLeft />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="absolute top-24 right-[20px] border bg-white p-3 rounded-full"
      >
        <ChevronsRight />
      </button>
    </div>
  );
};
