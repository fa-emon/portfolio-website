import About from "../About/About";
import HeroSection from "../HeroSection/HeroSection";
import Learning from "../Learning/Learning";
import Projects from "../Projects/Projects";


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <Learning></Learning>
            <Projects></Projects>
        </div>
    );
};

export default Home;