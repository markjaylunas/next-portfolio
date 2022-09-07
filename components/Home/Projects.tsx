import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiChevronRight } from 'react-icons/fi';

const Projects: React.FC = () => {
    const router = useRouter();
    const onClick = () => router.push('/works');
    return (
        <section className=" mx-auto max-w-xl my-20 p-2 space-y-5">
            <h2 className="font-text font-semibold text-3xl text-center  text-main-teal-light my-5  mt-10">
                Latest Project
            </h2>
            <div className="">
                <Image
                    src="/images/temp/unsplash.jpg"
                    alt="image"
                    width={700}
                    height={400}
                    layout="responsive"
                    className="rounded-3xl object-cover "
                />
            </div>
            <div>
                <Link href="/works" scroll={false}>
                    <a className="">
                        <button
                            onClick={onClick}
                            className="flex items-center justify-center gap-2 rounded-md bg-main-teal-light text-white font-medium px-4 py-1.5 hover:scale-105 transition delay-75 ease-in-out"
                        >
                            More Projects
                            <FiChevronRight />
                        </button>
                    </a>
                </Link>
            </div>
        </section>
    );
};

export default Projects;
