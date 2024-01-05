import React from "react";
import { navbarContent } from "../../utils/navbar";
import { links } from "../../utils/link";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Icon } from "../Icon/Icon";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Navbar = (props: Props) => {
  const { open, setOpen } = props;

  return (
    <div>
      <div className="hidden md:flex sticky w-98 top-0 flex-row justify-center text-2xl gap-10 my-2 font-semibold">
        <div className="absolute left-5 flex text-orange-600">IP</div>
        {navbarContent.map((content) => (
          <a href={content.href} className="hover:underline" key={content.name}>
            {content.name}
          </a>
        ))}
        <div className="absolute flex gap-5 mr-5 right-0">
          <Icon href={links.github} openOnNewTab toolTip toolTipText="Github">
            <AiFillGithub size="32px" />
          </Icon>
          <Icon
            href={links.linkedin}
            openOnNewTab
            toolTip
            toolTipText="Linkedin"
          >
            <AiFillLinkedin size="32px" />
          </Icon>
        </div>
      </div>
      <div className="flex md:hidden w-full justify-end pr-5 pt-5 text-2xl font-semibold z-10">
        <div
          className={`flex ${
            open ? "bg-black" : "bg-orange-600"
          } rounded-full w-[48px] h-[48px] justify-center z-20 cursor-pointer`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className="flex flex-col gap-1 justify-center">
            <div
              className={`flex bg-yellow-100 w-[25px] h-1 duration-500 ${
                open ? "rotate-45 translate-y-full" : ""
              }`}
            ></div>
            <div
              className={`flex bg-yellow-100 w-[25px] duration-500 h-1 ${
                open ? "hidden" : ""
              }`}
            ></div>
            <div
              className={`flex bg-yellow-100 w-[25px] h-1 duration-500 ${
                open ? "-rotate-45 -translate-y-full" : ""
              }`}
            ></div>
          </div>
        </div>
        <div
          className={`flex absolute flex-col text-center bg-black text-background h-screen w-screen pt-[64px] top-0 left-0 right-0 bottom-0 z-10 ${
            open ? "translate-x-0" : "translate-x-full"
          } transition-all ease-in-out duration-500`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {navbarContent.map((content) => (
            <a
              href={content.href}
              key={content.name}
              className="hover:drop-shadow hover:bg-gray-900 w-full h-full px-4 py-2 flex justify-center items-center"
            >
              {content.name}
            </a>
          ))}
          <a
            href={links.github}
            className="hover:drop-shadow hover:bg-gray-900 w-full h-full px-4 py-2 flex justify-center items-center"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href={links.linkedin}
            className="hover:drop-shadow hover:bg-gray-900 w-full h-full px-4 py-2 flex justify-center items-center"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};
