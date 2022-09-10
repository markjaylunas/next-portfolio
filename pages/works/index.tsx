import Card from '../../components/Works/Card';
import { projects, otherProjects } from '../../data/data';

const Works: React.FC = () => {
    return (
        <main className="text-center max-w-xl mx-auto space-y-10">
            <h1 className="text-center font-text font-semibold text-main-teal-light mt-5 text-xl">
                Works
            </h1>

            <section className="  laptopSM:max-w-xl tablet:max-w-lg mobile:max-w-md   mobileMD:max-w-sm max-w-xs mx-auto ">
                <h2 className="text-left my-5 font-text font-semibold">
                    Projects
                </h2>
                {projects.map((project, key) => {
                    return <Card data={project} key={key} />;
                })}
            </section>
            <section className="  laptopSM:max-w-xl tablet:max-w-lg mobile:max-w-md   mobileMD:max-w-sm max-w-xs mx-auto ">
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
