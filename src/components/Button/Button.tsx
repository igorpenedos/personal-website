import React from "react";

interface Props {
  text: string;
  link?: string;
  bgColor?: string;
  textColor?: string;
  icon?: React.ReactNode;
}

export const Button = (props: Props) => {
  const { text, link, bgColor, textColor, icon } = props;

  const nameClass = `flex flex-row font-xl gap-2 w-fit bg-${
    bgColor ? bgColor : "orange-600"
  } text-${
    textColor ? textColor : "white"
  } rounded-full px-4 py-1 hover:text-white hover:bg-orange-600 drop-shadow`;

  return (
    <a href={link} target="_blank" rel="noreferrer" className={nameClass}>
      {icon}
      {text}
    </a>
  );
};
