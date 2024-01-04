import React from "react";

interface Props {
  text: string;
  link?: string;
  icon?: React.ReactNode;
}

export const Button = (props: Props) => {
  const { text, link, icon } = props;
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex flex-row font-xl gap-2 w-fit bg-blue-900 text-white rounded-full px-4 py-1 hover:text-white hover:bg-orange-600 drop-shadow"
    >
      {icon}
      {text}
    </a>
  );
};
