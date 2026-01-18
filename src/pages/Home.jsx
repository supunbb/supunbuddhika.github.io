import Hero from '../components/Hero';
import MetricsStrip from '../components/MetricsStrip';
import FeaturedProjects from '../components/FeaturedProjects';
import Experience from '../components/Experience';
import Collaboration from '../components/Collaboration';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div>
            <Hero />
            <MetricsStrip />
            <FeaturedProjects />
            <Experience />
            {/* <Collaboration /> */}
            <Contact />
        </div>
    );
};

export default Home;
