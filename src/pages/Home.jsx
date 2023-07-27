import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import NordekCommunityVote from "../components/NordekCommunityVote";
import ReadyForNordek from "../components/ReadyForNordek";
import Footer from "../components/Footer.jsx";
// import SwapPage from "../components/SwapPage";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <NordekCommunityVote />
      <ReadyForNordek />
      <Footer />
      {/* <SwapPage/> */}
    </>
  );
};
export default Home;
