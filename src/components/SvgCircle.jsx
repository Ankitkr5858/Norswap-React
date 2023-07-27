import React from "react";

const SvgCircle = ({
  label,
  variant,
  className,
  onClick,
  img,
  svg,
  svg2,
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
  const isSVG = typeof svg === "object" && React.isValidElement(svg);
  return (
    <div
      {...props}
      onClick={handleClick}
      className={`inline-flex    items-center transition-all duration-300 justify-center gap-2 
      relative `}
    >
      <div
        className={`flex items-center justify-center h-[32px] w-[32px] rounded-full  items-center transition-all duration-300 justify-center gap-2 
      relative 
      
     ${classList} ${className} `}
      >
        {svg}
      </div>
      {label && (
        <span className="inline-block fontKaint text-[1rem] font-semibold leading-[1]">
          {label}
        </span>
      )}
      {svg2 && <span className="">{svg2}</span>}
    </div>
  );
};

export default SvgCircle;
