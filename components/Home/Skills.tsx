import Skill from './Skill';
import { frontend, backend, tools } from '../../data/data';

const Skills: React.FC = () => {
    return (
        <section className="rounded-xl  laptop:max-w-4xl   mx-auto my-10 px-1 pb-4 mt-24">
            <h2 className="font-text font-semibold text-3xl text-center  text-main-teal-light my-5  mt-10">
                Skills I have
            </h2>
            <div className="flex justify-evenly items-start p-2 flex-wrap w-full">
                {/* Front end */}
                <div className="scale-95 rounded-2xl laptopSM:w-1/2 w-full  laptopSM:px-0  mobileMD:px-5  py-3 gap-5  flex flex-col justify-center items-center bg-main-teal-light/10 border-3 border-main-teal-dark  pb-8">
                    <h3 className="font-text font-bold text-xl text-main-teal-dark/80 text-center mt-5">
                        Front End
                    </h3>
                    <div className="grid tablet:grid-cols-3 laptopSM:grid-cols-2 grid-cols-2 laptopSM:w-96  tablet:w-[700px] mobile:w-[500px] w-96 gap-y-3 justify-center  mx-auto">
                        {frontend.map((skill) => {
                            return (
                                <Skill
                                    key={skill.name}
                                    logo={skill.logo}
                                    name={skill.name}
                                    exp={skill.exp}
                                />
                            );
                        })}
                    </div>
                </div>
                {/* Backend */}
                <div className="scale-95 rounded-2xl laptopSM:w-1/2 w-full  laptopSM:px-0  mobileMD:px-5  py-3 gap-5  flex flex-col justify-center items-center bg-main-teal-light/10 border-3 border-main-teal-dark pb-8">
                    <h3 className="font-text font-bold text-xl text-main-teal-dark/80 text-center mt-5">
                        Back End
                    </h3>
                    <div className="grid tablet:grid-cols-3 laptopSM:grid-cols-2 grid-cols-2 laptopSM:w-96  tablet:w-[700px] mobile:w-[500px] w-96 gap-y-3 justify-center  mx-auto">
                        {backend.map((skill) => {
                            return (
                                <Skill
                                    key={skill.name}
                                    logo={skill.logo}
                                    name={skill.name}
                                    exp={skill.exp}
                                />
                            );
                        })}
                    </div>
                </div>
                {/* Tools */}
                <div className="scale-95 rounded-2xl laptopSM:w-1/2 w-full  laptopSM:px-0  mobileMD:px-5  py-3 gap-5  flex flex-col justify-center items-center bg-main-teal-light/10 border-3 border-main-teal-dark  pb-8">
                    <h3 className="font-text font-bold text-xl text-main-teal-dark/80 text-center mt-5">
                        Tools
                    </h3>
                    <div className="grid tablet:grid-cols-3 laptopSM:grid-cols-2 grid-cols-2 laptopSM:w-96  tablet:w-[700px] mobile:w-[500px] w-96 gap-y-3 justify-center  mx-auto">
                        {tools.map((skill) => {
                            return (
                                <Skill
                                    key={skill.name}
                                    logo={skill.logo}
                                    name={skill.name}
                                    exp={skill.exp}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
