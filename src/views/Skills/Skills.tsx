import React from "react";
import { Skill } from "../../components/Skill/Skill";
import { skills } from "../../utils/skills";
import { Carousel } from "../../components/Carousel/Carousel";
import { Title } from "../../components/Title/Title";

export const Skills = () => {
  return (
    <div className="mt-12" id="skills">
      <Title text="Skills" />

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
