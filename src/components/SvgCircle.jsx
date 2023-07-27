import React from "react";

const SvgCircle = ({
  label,
  variant,
  className,
  onClick,
  svg,
  ...props
}) => {
  let classList = ``;
  if (!variant || variant === "yellow") {
    classList = "bg-[#F0B90B] text-white";
  } else if (variant === "light") {
    classList = "bg-red-500 text-white hover:bg-[#272727]";
  }

  function handleClick(e) {
    if (!props?.disabled && onClick) {
      onClick(e);
    }
  }

  return (
    <div
      {...props}
      onClick={handleClick}
      className={`flex items-center justify-between  items-center transition-all duration-300 justify-center gap-2 
      relative `}
    >  
      <div className={`flex items-center justify-center h-[32px] w-[32px] rounded-full  items-center transition-all duration-300 justify-center gap-2 
      relative 
      
     ${classList} ${className} `}>{svg}</div>
       {label && <span>{label}</span>}
    </div>
  );
};

export default SvgCircle;
