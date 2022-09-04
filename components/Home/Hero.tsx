import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <div className="relative h-full w-full flex flex-col justify-center items-center">
            <Image
                src="/images/svg/makje.svg"
                width="500"
                height="500"
                alt="logo"
                className="animate-pulse  transition-all  ease-in-out"
            />
            <section className=" absolute z-10 flex flex-col justify-center items-center  text-center  backdrop-blur-2xl w-full h-full">
                <h6 className="absolute z-20 flex items-center justify-center font-title font-black text-main-teal-dark/10  text-[30rem] leading-none">
                    Hi
                    <div className="absolute z-30 top-0 flex flex-col justify-center items-center  h-full w-full">
                        <span className="flex justify-start w-full font-text text-4xl text-main-teal-light">
                            I&apos;m
                        </span>
                        <span className=" font-text text-7xl text-left text-main-teal-light">
                            Mark Jay Lunas
                        </span>
                        <span className=" flex justify-end items-center  w-full text-right font-text text-main-teal-dark text-2xl">
                            Front-end Web Developer
                        </span>
                    </div>
                </h6>
            </section>
        </div>
    );
};

export default Hero;
