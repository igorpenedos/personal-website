import React from "react";

interface Props {
  children: React.ReactNode;
  toolTip: boolean;
  toolTipText?: string;
  openOnNewTab: boolean;
  href: string;
}

export const Icon = (props: Props) => {
  const { children, toolTip, toolTipText, openOnNewTab, href } = props;
  return (
    <div className="group relative">
      {href ? (
        <a href={href} target={openOnNewTab ? "_blank" : ""} rel="noreferrer">
          {children}
        </a>
      ) : (
        <div>
          {children}
        </div>
      )}
      {toolTip ? (
        <div className="absolute hidden text-sm group-hover:block left-1/2 -translate-x-1/2 w-fit font-semibold">
          <div>{toolTipText}</div>
        </div>
      ) : null}
    </div>
  );
};
