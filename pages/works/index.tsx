import Card from '../../components/Works/Card';
import { otherProjects } from '../../data/data';

const Works: React.FC = () => {
    return (
        <main className="text-center max-w-xl mx-auto">
            <h1 className="text-center font-text font-semibold text-main-teal-light mt-5 text-xl">
                Works
            </h1>

            <section className=" max-w-xs mx-auto">
                <h2 className="text-left my-5 font-text font-semibold">
                    Other Projects
                </h2>
                {otherProjects.map((project, key) => {
                    return <Card data={project} key={key} />;
                })}
            </section>
        </main>
    );
};

export default Works;
