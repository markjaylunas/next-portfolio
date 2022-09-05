import { ImLinkedin, ImFacebook2 } from 'react-icons/im';
import { FaGithubSquare } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="backdrop-blur-md h-14 flex flex-col items-center justify-center divide-y divide-main-teal-light/50 mt-20">
            <section className="my-5">
                <div className="flex flex-col justify-center items-center gap-3 ">
                    <h4 className="font-text text-xl font-semibold">
                        On the web
                    </h4>
                    <div className="flex gap-5 text-main-teal-light text-2xl ">
                        <a
                            href="https://github.com/markjaylunas"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithubSquare className="scale-110" />
                        </a>
                        <a
                            href="https://linkedin.com/in/markjaylunas"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ImLinkedin />
                        </a>
                        <a
                            href="https://facebook.com/markjay.lunas"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ImFacebook2 />
                        </a>
                    </div>
                </div>
            </section>
            <section className="py-4">
                <p className="text-center font-text text-main-black/80 font-light text-sm">
                    &copy; 2022 Mark Jay Lunas. All Rights Reserved.
                </p>
            </section>
        </footer>
    );
};

export default Footer;
