import React from "react";

interface Props {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  points: string[];
}

export const Experience = (props: Props) => {
  const { company, position, startDate, endDate, location, points } = props;
  return (
    <div className="relative text-xl mt-6 flex flex-col">
      <div className="flex flex-col xl:flex-row w-100 justify-start">
        <div className="text-4xl font-semibold">{company}</div>
        <div className="flex flex-1 xl:justify-end items-end">
          {startDate}-{endDate}
        </div>
      </div>
      <div className="">{position}</div>
      <div>{location}</div>
      <ul className="flex flex-col list-disc gap-2 ml-12 mt-2">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};
