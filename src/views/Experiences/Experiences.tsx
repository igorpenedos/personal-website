import React, { useRef, useState, useEffect } from "react";
import { Experience } from "../../components/Experience/Experience";
import { experiences } from "../../utils/experiences";
import { Title } from "../../components/Title/Title";

export const Experiences = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(targetRef.current!);
  }, []);

  return (
    <div className="mt-12 overflow-hidden" id="experiences" ref={targetRef}>
      <Title text="Professional Journey" />
      <div
        className={`relative duration-1000 ${
          animate ? "scale-100 opacity-100" : " scale-50 opacity-0"
        }`}
      >
        <div className="absolute left-[20px]  border-l-2 border-tertiary border-dashed h-full"></div>
        {experiences.map((experience, index) => (
          <Experience
            company={experience.company}
            position={experience.position}
            startDate={experience.startDate}
            endDate={experience.endDate}
            location={experience.location}
            points={experience.points}
            logo={experience.logo}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
