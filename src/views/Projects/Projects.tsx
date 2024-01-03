import React from "react";
import { Project } from "../../components/Project/Project";
import { projects } from "../../utils/projects";

export const Projects = () => {
  return (
    <div className="mt-12" id="projects">
      <div className="text-orange-600 text-4xl font-semibold drop-shadow justify-center flex text-center">
        Projects
      </div>
      <div className="hidden lg:flex flex-row gap-4">
        <div className="flex flex-col gap-4 w-full mt-6 h-fit">
          {projects.map((project, index) =>
            !(index % 2) ? (
              <Project
                name={project?.name}
                languages={project?.languages}
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
        <div className="flex flex-col gap-4 w-full mt-6 h-fit">
          {projects.map((project, index) =>
            index % 2 ? (
              <Project
                name={project?.name}
                languages={project?.languages}
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
