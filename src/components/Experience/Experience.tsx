import React, { useState } from "react";

interface Props {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  points: string[];
  logo: string;
}

export const Experience = (props: Props) => {
  const { company, position, startDate, endDate, location, points, logo } =
    props;
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="relative text-xl mt-6 flex flex-col overflow-hidden pl-12">
      <div className="absolute left-0">
        <img
          src={`assets/${logo}`}
          alt={`logo of ${company}`}
          className="w-[40px] h-[40px] rounded-full drop-shadow"
        />
      </div>
      <div className="bg-background text-secondary">
        <div className="flex flex-col xl:flex-row w-100 justify-start">
          <div className="text-4xl font-semibold text-quaternary drop-shadow">
            {company}
          </div>
          <div className="flex flex-1 xl:justify-end items-end">
            {startDate}-{endDate}
          </div>
        </div>
        <div>{position}</div>
        <div>{location}</div>
        <div
          className="flex flex-row gap-2 cursor-pointer w-fit bg-quaternary py-1 px-2 rounded-full text-sm mt-2 text-white"
          onClick={() => {
            setOpen(!open);
          }}
        >
          Click for {open ? "less" : "more"} info
        </div>
      </div>
      <div
        className={`${
          open ? "max-h-96" : "max-h-0"
        } flex transition-all duration-500 ease-in-out -z-10`}
      >
        <ul className="flex flex-col list-disc gap-2 ml-12 mt-2 text-base text-secondary">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
