import React from "react";
import { Skill } from "../../components/Skill/Skill";
import { skills } from "../../utils/skills";
import { Carousel } from "../../components/Carousel/Carousel";

export const Skills = () => {
  return (
    <div className="mt-12" id="skills">
      <div className="text-orange-600 text-4xl font-semibold drop-shadow justify-center flex text-center">
        Skills
      </div>

      {/* <div className="flex flex-row flex-wrap gap-6 justify-center mt-6">
        {skills.map((skill) => (
          <Skill name={skill} key={skill} />
        ))}
      </div> */}

      <div className="mt-6">
        <Carousel gap="6" autoSlide={true} height="14">
          {skills.map((skill) => (
            <Skill name={skill} key={skill} />
          ))}
          {skills.map((skill) => (
            <Skill name={skill} key={skill} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
