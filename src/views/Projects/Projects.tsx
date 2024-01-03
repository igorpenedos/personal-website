import React, { useState } from "react";
import { Project } from "../../components/Project/Project";
import { projects, Project as ProjectPayload } from "../../utils/projects";

export const Projects = () => {
  const [showProject, setShowProject] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectPayload>({
    name: "",
    languages: [],
    points: [],
    photos: [],
  });

  const changeSelectedProject = (e: any) => {
    const projectSelected = projects.find(
      (project) => project.name === e.target?.textContent
    );

    if (projectSelected) setSelectedProject(projectSelected);

    setShowProject(true);
  };

  const changeToDefaultProject = () => {
    setShowProject(false);
    setSelectedProject({
      name: "",
      languages: [],
      points: [],
      photos: [],
    });
  };

  return (
    <div className="mt-12" id="projects">
      <div className="text-orange-600 text-4xl font-semibold drop-shadow justify-center flex text-center">
        Projects
      </div>
      <div
        className="flex flex-row gap-0 w-100 flex-1 h-[300px] mt-6"
        onMouseLeave={changeToDefaultProject}
      >
        <div className="flex flex-col w-1/3 text-xl overflow-auto">
          {projects.map((project) => (
            <div
              onMouseEnter={changeSelectedProject}
              // onMouseLeave={changeToDefaultProject}
              className={`p-2 hover:drop-shadow cursor-pointer ${
                selectedProject === project
                  ? "bg-blue-900 text-white"
                  : "odd:bg-orange-200 even:bg-transparent"
              }`}
              key={project.name}
            >
              {project.name}
            </div>
          ))}
        </div>
        <div
          className={`flex w-2/3 flex-1 py-2 px-4 overflow-auto  ${
            showProject ? "bg-blue-900 text-white" : ""
          }`}
        >
          {showProject ? (
            <Project
              name={selectedProject?.name}
              languages={selectedProject?.languages}
              points={selectedProject?.points}
              photos={selectedProject?.photos}
              link={selectedProject?.link}
              key={selectedProject?.name}
            />
          ) : (
            <div className="flex w-100 justify-center m-auto text-center text-blue-900 text-2xl font-semibold">
              NO PROJECT SELECTED
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
