import React from "react";
import { Experience } from "../../components/Experience/Experience";
import { experiences } from "../../utils/experiences";

export const Experiences = () => {
  return (
    <div className="mt-12" id="experiences">
      <div className="text-orange-600 text-4xl font-semibold drop-shadow justify-center flex text-center">
        Professional Experiences
      </div>
      {experiences.map((experience) => (
        <Experience
          company={experience.company}
          position={experience.position}
          startDate={experience.startDate}
          endDate={experience.endDate}
          location={experience.location}
          points={experience.points}
          key={experience.company}
        />
      ))}
    </div>
  );
};
