import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import Experience from '../components/Experience';
import Collaboration from '../components/Collaboration';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div>
            <Hero />
            <FeaturedProjects />
            <Experience />
            <Collaboration />
            <Contact />
        </div>
    );
};

export default Home;
