import Link from 'next/link';
import { AiOutlineGithub } from 'react-icons/ai';
import { HiCode } from 'react-icons/hi';
import Slider from './Slider';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
interface Props {
    key: number;
    data: {
        name: string;
        description: string[];
        repoURL: string;
        demoURL: string;
        imagesDir: string;
        images: string[];
        stack: React.ReactNode[];
        stackName: string[];
        date: string;
    };
}

const Card: React.FC<Props> = ({ data, key }) => {
    return (
        <div key={key} className="rounded-md  mx-auto bg-main-teal-light/10 ">
            <div className="relative   overflow-hidden">
                <div className="text-transparent ">
                    <Slider key={key} data={data} />
                </div>
                <div className="absolute bottom-2 right-2 flex gap-2 scale-95   ">
                    {data.demoURL.includes('http') ? (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={data.demoURL}
                            className="rounded-md flex items-center justify-center gap-1  px-2 py-1 backdrop-blur-md font-text text-xs border border-main-teal-light/80  text-white bg-main-teal-light/80 hover:bg-main-teal-light transition ease-in-out "
                        >
                            <HiCode />
                            Demo
                        </a>
                    ) : (
                        <a className="disabled rounded-md flex items-center justify-center gap-1  px-2 py-1 backdrop-blur-md font-text text-xs border border-main-teal-light/30  text-white bg-main-teal-light/30">
                            <HiCode />
                            No Demo
                        </a>
                    )}
                    <Link href={data.repoURL}>
                        <a className="rounded-md flex items-center justify-center gap-1  px-2 py-1 backdrop-blur-md font-text text-xs border border-main-teal-light/80  text-white bg-main-teal-light/80 hover:bg-main-teal-light transition ease-in-out ">
                            <AiOutlineGithub className="" />
                            Code
                        </a>
                    </Link>
                </div>
            </div>
            <div className="relative p-1 pb-2 pl-3 tablet:px-7 tablet:py-5">
                <div className="flex justify-between items-center">
                    <h2 className="font-text text-left text-lg leading-8 text-main-black font-medium">
                        {data.name}
                    </h2>
                    <p className="font-text font-medium text-sm text-slate-700 ">
                        {data.date}
                    </p>
                </div>
                <div className="space-y-2">
                    {data.description.map((parag: string, key: number) => {
                        return (
                            <p
                                key={key}
                                className="font-text  text-justify text-sm indent-8 text-main-black font-normal"
                            >
                                {parag}
                            </p>
                        );
                    })}
                </div>

                <div className="flex items-center justify-start gap-4 mt-2 text-main-teal-dark text-2xl">
                    {data.stack.map((item, key) => {
                        return (
                            <Tippy
                                key={key}
                                content={<span>{data.stackName[key]}</span>}
                                placement={key % 2 == 0 ? 'bottom' : 'top'}
                                animation="scale-subtle"
                                arrow={true}
                                delay={[0, 0]}
                            >
                                <div className="">{item}</div>
                            </Tippy>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Card;
