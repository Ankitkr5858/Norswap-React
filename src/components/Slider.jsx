import SliderVideo from "./SliderVideo";
import HeroSection from "./HeroSection";
const Slider = () => {
  return (
    <div className="slider relative bg-gray w-full  xl:!py-[8rem] 2xl:!py-[10rem]">
      <SliderVideo />
      <HeroSection />
    </div>
  );
};

export default Slider;
