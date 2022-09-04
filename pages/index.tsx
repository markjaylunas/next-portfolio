import { NextPage } from 'next';
import HomeHeader from '../components/heads/HomeHeader';

const Home: NextPage = () => {
    return (
        <div className="font-text scroll-smooth">
            <HomeHeader />
            <main className="h-full"></main>
        </div>
    );
};

export default Home;
