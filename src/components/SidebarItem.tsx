import React from "react";

type sidebarItemProps = {
  Icon: React.ComponentType;
  text: string;
};

function SidebarItem({ Icon, text }: sidebarItemProps) {
  return (
    <div>
      <div
        className={`self-left  items-center space-x-2 flex mb-3 text-bkg dark:text-content px-5 py-3 w-72 rounded-md  ${
          decodeURIComponent(location.pathname) === `/${text}` || decodeURIComponent(location.pathname).includes(`${text}`)  
            ? "bg-green-500 text-white md:bg-green-500 md:text-white"
            : ""
        }`}
      >
        <Icon />
        <h1 className=" capitaliz md:capitalize">{text}</h1>
      </div>
    </div>
  );
}

export default SidebarItem;
