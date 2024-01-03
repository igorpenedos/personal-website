import React, { useState } from "react";
import { navbarContent } from "../../utils/navbar";
import { links } from "../../utils/link";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Icon } from "../Icon/Icon";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

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
      <button className="flex md:hidden sticky w-98 top-0 text-2xl mt-5 ml-5 font-semibold z-10 group">
        <div className="relative">
          <div
            className="flex bg-orange-600 rounded-full w-[48px] h-[48px] justify-center"
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
          {open ? (
            <div
              className="flex absolute flex-col bg-white h-100 top-0 left-12 shadow"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {navbarContent.map((content) => (
                <a
                  href={content.href}
                  key={content.name}
                  className="hover:drop-shadow hover:bg-gray-200 w-full h-full px-4 py-2"
                >
                  {content.name}
                </a>
              ))}
              <a
                href={links.github}
                className="hover:drop-shadow hover:bg-gray-200 w-full h-full px-4 py-2"
              >
                Github
              </a>
              <a
                href={links.linkedin}
                className="hover:drop-shadow hover:bg-gray-200 w-full h-full px-4 py-2"
              >
                Linkedin
              </a>
            </div>
          ) : (
            <></>
          )}
        </div>
      </button>
    </div>
  );
};
