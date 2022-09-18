import Image from 'next/image';
import { motion } from 'framer-motion';
import { motionHero } from '../../transitions/transHero';

const Hero: React.FC = () => {
    return (
        <section className="relative h-full w-full flex flex-col justify-center items-center">
            <motion.div
                variants={motionHero}
                initial="initial"
                animate="final"
                exit="exit"
            >
                <Image
                    src="/images/svg/makje.svg"
                    width="500"
                    height="500"
                    alt="logo"
                    className="animate-pulse  transition-all  ease-in-out"
                />
            </motion.div>
            <div className=" absolute z-10 flex flex-col justify-center items-center  text-center  backdrop-blur-2xl w-full h-full">
                <span className="absolute z-20 flex items-center justify-center ">
                    <span className="font-title font-black text-zinc-500/10  text-[30rem] leading-snug tracking-wide">
                        Hi
                    </span>
                    <div className="absolute z-30 top-0 flex flex-col justify-center items-center  h-full w-full font-black">
                        <span className="flex justify-start w-full font-text text-4xl text-main-teal-light">
                            I&apos;m
                        </span>
                        <h2 className=" font-text text-7xl text-left text-main-teal-light">
                            Mark Jay Lunas
                        </h2>
                        <h3 className=" flex justify-end items-center  w-full text-right font-text text-main-teal-dark text-2xl">
                            Front-end Web Developer
                        </h3>
                    </div>
                </span>
            </div>
        </section>
    );
};

export default Hero;
