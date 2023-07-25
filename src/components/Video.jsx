import React from "react";
import ReadyForVideoBg from "../assets/video/ready_for_nordek.mp4";

const Video = () => {
  return (
    <video
      className="absolute top-0 left-0 z-[-1] min-w-full min-h-full"
      height="100%"
      width="100%"
      autoplay="autoplay"
      muted
      loop
    >
      <source src={ReadyForVideoBg} />
    </video>
  );
};

export default Video;
