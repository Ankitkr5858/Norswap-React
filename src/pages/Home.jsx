import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import NordekCommunityVote from "../components/NordekCommunityVote";
import ReadyForNordek from "../components/ReadyForNordek";
import Footer from "../components/Footer.jsx";


const Home = () => {
    return (
        <>
            <Navbar/>
            <Slider/>
            <NordekCommunityVote/>
            <ReadyForNordek/>
            <Footer/>
        </>
    );
};
export default Home;
