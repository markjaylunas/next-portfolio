import { NextPage } from 'next';
import HomeHeader from '../components/heads/HomeHeader';
import Hero from '../components/Home/Hero';
import HeroBottom from '../components/Home/HeroBottom';
import Skills from '../components/Home/Skills';

const Home: NextPage = () => {
    return (
        <div className="font-text scroll-smooth">
            <HomeHeader />
            <main className=" mx-auto text-center">
                <Hero />
                <HeroBottom />
                <Skills />
            </main>
        </div>
    );
};

export default Home;
