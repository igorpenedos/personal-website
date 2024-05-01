import React from "react";
import { MdOutlineWork } from "react-icons/md";
import { FaBookmark, FaTools } from "react-icons/fa";

interface Props {
  text: string;
}

export const Title = (props: Props) => {
  const { text } = props;
  return (
    <div className="flex flex-row items-center">
      {/* <div className="flex grow h-[1px] bg-gradient-to-r from-transparent to-quaternary"></div> */}

      <div className="text-4xl font-semibold drop-shadow justify-center flex grow text-center gap-4">
        {(() => {
          switch (text) {
            case "Projects":
              return <FaBookmark />;
            case "Experiences":
              return <MdOutlineWork />;
            case "Skills":
              return <FaTools />;
            default:
              return <></>;
          }
        })()}
        {text}
      </div>
      {/* <div className="flex grow h-[1px] bg-gradient-to-l from-transparent to-quaternary"></div> */}
    </div>
  );
};
