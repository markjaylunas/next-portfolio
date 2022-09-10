import { updates } from '../../data/data';

const Updates: React.FC = () => {
    return (
        <section className=" laptopSM:max-w-xl tablet:max-w-lg mobile:max-w-md   mobileMD:max-w-sm max-w-xs mx-auto ">
            <h2 className="font-text text-center text-3xl text-main-teal-light font-semibold mb-5">
                What I&apos;ve been doing?
            </h2>
            {updates.map((update, key) => (
                <p className="text-justify text-slate-600 indent-6" key={key}>
                    {update}
                </p>
            ))}
        </section>
    );
};

export default Updates;
