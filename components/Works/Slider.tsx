import Image from 'next/image';
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from 'react-icons/io';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

interface Props {
    key: number;
    data: {
        name: string;
        description: string[];
        repoURL: string;
        demoURL: string;
        imagesDir: string;
        images: string[];
    };
}

const slideProps = {
    autoplay: true,
    pauseOnHover: true,
    transitionDuration: 1,
    canSwipe: false,
    cssClass: 'select-none',
    infinite: true,
    prevArrow: (
        <IoMdArrowRoundBack className=" text-2xl rounded-full mx-1 hover:bg-white/40 transition ease-in-out" />
    ),
    nextArrow: (
        <IoMdArrowRoundForward className="text-2xl rounded-full mx-1    hover:bg-white/40 transition ease-in-out" />
    ),
};

const Slider: React.FC<Props> = ({ data }) => {
    return (
        <div className=" select-none h-full w-full hover:[&>*]:text-main-teal-light/80 ">
            <Slide {...slideProps}>
                {data.images.map((image, key) => {
                    return (
                        <div key={key} className=" select-none w-full h-full ">
                            <Image
                                src={data.imagesDir + image}
                                alt={data.name}
                                width={300}
                                height={200}
                                layout="responsive"
                                className="select-none hover:cursor-default object-cover rounded-t-xl overflow-hidden"
                            />
                        </div>
                    );
                })}
            </Slide>
        </div>
    );
};

export default Slider;
