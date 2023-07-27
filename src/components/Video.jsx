const Video = () => {
  return (
    <video
      className="absolute top-[-70px] left-0 z-[-1] min-w-full min-h-full"
      height="100%"
      width="100%"
      autoplay="autoplay"
      muted
      loop
    >
      <source src="/videos/ready_for_nordek.mp4" />
    </video>
  );
};

export default Video;
