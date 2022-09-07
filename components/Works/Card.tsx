import Link from 'next/link';
import { AiOutlineGithub } from 'react-icons/ai';
import { HiCode } from 'react-icons/hi';
import Slider from './Slider';

interface Props {
    key: number;
    data: {
        name: string;
        description: string;
        repoURL: string;
        demoURL: string;
        imagesDir: string;
        images: string[];
        stack: React.ReactNode[];
    };
}

const Card: React.FC<Props> = ({ data, key }) => {
    return (
        <div key={key} className="rounded-md  mx-auto bg-main-teal-light/10 ">
            <div className="relative  max-w-xs overflow-hidden">
                <div className="text-transparent ">
                    <Slider key={key} data={data} />
                </div>
                <div className="absolute bottom-2 right-2 flex gap-2 scale-95   ">
                    {data.demoURL.includes('http') ? (
                        <Link href={data.demoURL}>
                            <a className="rounded-md flex items-center justify-center gap-1  px-2 py-1 backdrop-blur-md font-text text-xs border border-main-teal-light/80  text-white bg-main-teal-light/80 hover:bg-main-teal-light transition ease-in-out ">
                                <HiCode />
                                Demo
                            </a>
                        </Link>
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
            <div className="p-1 pb-2 pl-3">
                <h2 className="font-text text-left text-lg leading-8 text-main-black font-medium">
                    {data.name}
                </h2>
                <p className="font-text text-left text-sm  text-main-black font-normal">
                    {data.description}
                </p>
                <div className="flex items-center justify-start gap-2 mt-2 text-main-teal-light text-xl">
                    {data.stack.map((item, key) => {
                        return (
                            <div key={key} className="">
                                {item}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Card;
