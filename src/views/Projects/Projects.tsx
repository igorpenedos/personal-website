import React, { useRef, useState, useEffect } from "react";
import { Project } from "../../components/Project/Project";
import { projects } from "../../utils/projects";
import { Title } from "../../components/Title/Title";

export const Projects = () => {
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
    <div className="mt-12" id="projects" ref={targetRef}>
      <Title text="Projects" />
      <div className="hidden lg:flex flex-row gap-4">
        <div
          className={`flex flex-col gap-4 w-full mt-6 h-fit ${
            animate ? "opacity-100 animate-slide-in-left" : " opacity-0"
          }`}
        >
          {projects.map((project, index) =>
            !(index % 2) ? (
              <Project
                name={project?.name}
                languages={project?.languages}
                description={project?.description}
                points={project?.points}
                photos={project?.photos}
                link={project?.link}
                key={project?.name}
              />
            ) : (
              <></>
            )
          )}
        </div>
        <div
          className={`flex flex-col gap-4 w-full mt-6 h-fit ${
            animate ? "opacity-100 animate-slide-in-right" : "opacity-0"
          }`}
        >
          {projects.map((project, index) =>
            index % 2 ? (
              <Project
                name={project?.name}
                languages={project?.languages}
                description={project?.description}
                points={project?.points}
                photos={project?.photos}
                link={project?.link}
                key={project?.name}
              />
            ) : (
              <></>
            )
          )}
        </div>
      </div>
      <div className="flex lg:hidden flex-col gap-4 w-full mt-6">
        {projects.map((project) => (
          <Project
            name={project?.name}
            languages={project?.languages}
            description={project?.description}
            points={project?.points}
            photos={project?.photos}
            link={project?.link}
            key={project?.name}
          />
        ))}
      </div>
    </div>
  );
};
