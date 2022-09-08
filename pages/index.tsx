import { NextPage } from 'next';
import HomeHeader from '../components/heads/HomeHeader';
import Hero from '../components/Home/Hero';
import HeroBottom from '../components/Home/HeroBottom';
import Projects from '../components/Home/Projects';
import Skills from '../components/Home/Skills';

const Home: NextPage = () => {
    return (
        <div className="font-text scroll-smooth overflow-x-hidden">
            <HomeHeader />
            <main className="relative mx-auto text-center">
                <Hero />
                <HeroBottom />
                <Projects />
                <Skills />
            </main>
        </div>
    );
};

export default Home;
