import Head from 'next/head';

const HomeHeader: React.FC = () => {
    return (
        <Head>
            <title>Mark Jay Lunas</title>
            <meta
                name="description"
                content="Portfolio Website of Mark Jay Lunas, a Frontend Web Developer from Lipa City, Batangas"
            />
            <link rel="icon" href="/images/ico/makje.ico" />
        </Head>
    );
};

export default HomeHeader;
