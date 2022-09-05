import { FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { motionSend } from '../../transitions/transHero';
import Link from 'next/link';
const HeroBottom: React.FC = () => {
    return (
        <div className="relative flex justify-center items-center mobileMD:pt-10 mobile:pt-0  pt-20">
            <section className="absolute z-40 flex gap-6  justify-between items-center text-center bottom-0 text-gray-500 font-text font-medium ">
                <div className="flex-1 max-w-sm">
                    <p className="text-justify text-sm flex flex-col px-5">
                        I build functional and responsive interface that users
                        see and interact with
                    </p>
                </div>
                <motion.div
                    variants={motionSend}
                    whileTap="tap"
                    whileHover="hover"
                    className="flex-1-right-10 mr-5 "
                >
                    <Link href="/contact" passHref>
                        <button className="rounded-full flex justify-center items-center   p-3 bg-main-teal-light text-white text-lg">
                            <FiSend />
                        </button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default HeroBottom;
