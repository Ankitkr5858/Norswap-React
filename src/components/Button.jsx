import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Button = ({
  label,
  variant,
  className,
  children,
  isLoading,
  onClick,
  ...props
}) => {
  let classList = ``;
  if (!variant || variant === "dark") {
    classList = "bg-black text-white";
  } else if (variant === "light") {
    classList = "bg-red-500 text-white hover:bg-[#272727]";
  }

  function handleClick(e) {
    if (!props?.disabled && !isLoading && onClick) {
      onClick(e);
    }
  }

  return (
    <button
      {...props}
      onClick={handleClick}
      className={`d-flex sourceCodePro items-center transition-all duration-300 justify-center gap-2 py-3 
      px-3 border border-solid border-2 relative after:content-[""] after:w-full after:h-full ml-[6px] mb-[6px]
       after:absolute after:z-[-1] after:left-[-6px] after:top-[6px] hover:after:left-0 hover:after:top-0 
       after:bg-white ${classList} ${className} hover:after:transition-all hover:after:transition hover:after:duration-300 ease-in-out
      after:transition-all after:transition after:duration-300 ease-in-out  disabled:bg-disabled`}
    >
      {label}
      {children}
      {isLoading && (
        <div className="text-inherit text-[20px] animate-spin flex justify-center items-center">
          <FontAwesomeIcon icon={faSpinner} />
        </div>
      )}
    </button>
  );
};

export default Button;
