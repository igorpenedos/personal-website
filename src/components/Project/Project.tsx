import React from "react";
import "./Project.css";

interface Props {
  name: string;
  languages: string[];
  description: string;
  points: string[];
  photos: string[];
  link?: string;
}

export const Project = (props: Props) => {
  const { name, languages, description, photos, link } = props;

  return (
    <a
      className="relative flex flex-1 drop-shadow-xl group w-full h-min border-2 border-blue-900 rounded-xl overflow-hidden"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={`./assets/${photos[0]}`}
        alt={name}
        className="w-full h-auto group-hover:blur-sm"
      />
      <div className="absolute bottom-0 left-0 w-full px-2 pb-2 pt-4 bg-gradient-to-t from-gray-600 from-5% to-transparent transition-all ease-in-out duration-500">
        <div className="text-white transition-all ease-in-out duration-500 w-fit font-bold text-2xl lg:text-base xl:text-2xl drop-shadow">
          {name}
        </div>
        <div className="md:max-h-0 md:translate-y-full md:opacity-0 max-h-none translate-y-0 opacity-100 group-hover:max-h-96 group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-1000 overflow-hidden flex flex-row flex-wrap mt-2 gap-2 font-semibold">
          <div className="text-white text-sm font-normal">{description}</div>
          {languages.map((language) => (
            <div
              className="bg-white text-blue-900 px-2 lg:px-3 rounded-full text-sm md:text-xs lg:text-xs xl:text-sm"
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
