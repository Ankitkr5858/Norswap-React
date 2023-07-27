import React from "react";

const TimeRefreshSvg = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      className={className}
    >
      <path
        d="M12 0C7.02995 0 2.99995 4.03 2.99995 9H1.20706C0.761603 9 0.538523 9.5386 0.853503 9.8536L3.54599 12.546C3.73746 12.7375 4.04657 12.7418 4.24324 12.5556L7.088 9.8631C7.41635 9.5524 7.19641 9 6.7443 9H4.99995C4.99995 5.13 8.12995 2 12 2C15.87 2 19 5.13 19 9C19 12.87 15.87 16 12 16C10.4314 16 8.9817 15.4782 7.81734 14.601C7.37406 14.267 6.74099 14.259 6.34855 14.6514C5.9572 15.0428 5.95408 15.6823 6.38593 16.0284C7.92443 17.2615 9.87075 18 12 18C16.97 18 21 13.97 21 9C21 4.03 16.97 0 12 0ZM11 5V10L15.28 12.54L16 11.33L12.5 9.25V5H11Z"
        fill="white"
      />
    </svg>
  );
};

export default TimeRefreshSvg;