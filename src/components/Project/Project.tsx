import React from "react";
import "./Project.css";

interface Props {
  name: string;
  languages: string[];
  points: string[];
  photos: string[];
  link?: string;
}

export const Project = (props: Props) => {
  const { name, languages, photos, link } = props;

  return (
    <a
      className="relative flex flex-1 drop-shadow-xl group w-full h-min border-2 border-blue-900 rounded-xl"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={`./assets/${photos[0]}`}
        alt={name}
        className="w-full h-auto rounded-xl"
      />
      <div className="absolute bottom-0 left-0 w-full pl-2 pb-2 pt-6 bg-gradient-to-t from-gray-600 from-5% to-transparent rounded-b-xl">
        <div className="rounded-full text-white transition-all ease-in-out duration-1000 w-fit font-bold text-2xl lg:text-base xl:text-2xl drop-shadow">
          {name}
        </div>
        <div className="md:h-0 md:opacity-0 h-full opacity-100 group-hover:h-full group-hover:opacity-100 transition-all ease-in-out duration-500 overflow-hidden flex flex-row flex-wrap mt-2 gap-2 font-semibold text-sm md:text-xs lg:text-base">
          {languages.map((language) => (
            <div
              className="bg-white text-blue-900 px-2 lg:px-3 rounded-full"
              key={language}
            >
              {language}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
};
