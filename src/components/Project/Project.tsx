import React, { useState } from "react";
import { Carousel } from "../Carousel/Carousel";
import { Button } from "../Button/Button";
import { FaGithub } from "react-icons/fa";

interface Props {
  name: string;
  languages: string[];
  points: string[];
  photos: string[];
  link?: string;
}

export const Project = (props: Props) => {
  const { name, languages, points, photos, link } = props;
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="flex flex-col gap-2">
      <div className="text-4xl font-semibold">{name}</div>
      <div className="flex flex-row flex-wrap gap-2">
        {languages.map((language) => (
          <div
            className="bg-white text-blue-900 px-2 rounded-full"
            key={language}
          >
            {language}
          </div>
        ))}
      </div>
      <div className="my-2">
        <Button
          text="Github"
          link={link}
          bgColor="gray-600"
          icon={<FaGithub size="24px" />}
        />
      </div>
      <div>
        <ul className="list-disc pl-8">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
