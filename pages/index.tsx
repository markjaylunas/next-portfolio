import { NextPage } from 'next';
import HomeHeader from '../components/heads/HomeHeader';
import Hero from '../components/Home/Hero';

const Home: NextPage = () => {
    return (
        <div className="font-text scroll-smooth">
            <HomeHeader />
            <main className="h-full">
                <Hero />
            </main>
        </div>
    );
};

export default Home;
