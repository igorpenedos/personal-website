import React from "react";
import "./Carousel.css";

interface Props {
  children: React.ReactNode;
  gap?: string;
  autoSlide?: boolean;
  height?: string;
}

export const Carousel = (props: Props) => {
  const { children, gap, autoSlide } = props;

  return (
    <div className="relative overflow-x-hidden h-14 w-full">
      <div className="absolute top-0 left-0 w-[100px] h-full z-10 bg-gradient-to-l from-transparent to-background"></div>
      <div className="absolute top-0 right-0 w-[100px] h-full z-10 bg-gradient-to-r from-transparent to-background"></div>
      <div
        className={`absolute left-0 flex flex-row pause gap-${gap ?? "0"} ${
          autoSlide ? "animate-slide" : ""
        } inner`}
      >
        {children}
      </div>
    </div>
  );
};
