import React from "react";
import { Icon } from "../../components/Icon/Icon";
import { Button } from "../../components/Button/Button";
import { links } from "../../utils/link";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export const Intro = () => {
  return (
    <div className="mt-16 md:mt-32 flex flex-col" id="about">
      <div className="text-6xl md:text-7xl w-100 text-center font-semibold">
        <div className="drop-shadow-lg">Igor Goncalves Penedos</div>
      </div>
      <div className="flex flex-col text-center md:text-start mt-12 md:mt-24 text-xl font-semibold ">
        <div>Software Developer</div>
        <div>TMU</div>
        <div>Toronto, ON</div>
        <div className="flex flex-row justify-center md:justify-start mt-6 gap-2 font-normal">
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
        <div className="flex mt-6 font-normal justify-center md:justify-start">
          <Button
            text="Resume"
            bgColor="blue-900"
            textColor="white"
            link="/IgorGoncalvesPenedos_Resume.pdf"
          />
        </div>
      </div>
      <div className="mt-12">
        <div className="text-4xl font-semibold text-orange-600 drop-shadow flex justify-center text-center">
          About Me
        </div>
        <div className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat modi
          dolorum adipisci earum at in. Saepe modi expedita non recusandae
          temporibus nulla atque sint vitae impedit asperiores voluptate dolor
          magnam exercitationem aliquid porro molestias deleniti illum, alias
          commodi. Fugit tempore dignissimos numquam temporibus, quisquam
          cupiditate vero laudantium labore optio, vitae, alias quia vel velit.
        </div>
      </div>
    </div>
  );
};
