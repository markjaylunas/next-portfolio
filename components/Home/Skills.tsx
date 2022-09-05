import { BsCheckCircleFill } from 'react-icons/bs';

const Skills: React.FC = () => {
    return (
        <section className="laptop: max-w-4xl bg-red-50 mx-auto my-10">
            <h2 className="text-center">Skills I have</h2>
            <div className="flex justify-between items-center p-2">
                <div className="rounded-md px-5 py-3 gap-5 flex-1 flex ">
                    <h3>Front End</h3>
                    <div className="flex justify-between items-center">
                        <div className="flex justify-between items-start">
                            <BsCheckCircleFill />
                            <div>
                                <p>HTML</p>
                                <span>Experienced</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <h3>Back End</h3>
                </div>
            </div>
        </section>
    );
};

export default Skills;
