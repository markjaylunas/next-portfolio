import Link from 'next/link';

const PageNotFound: React.FC = () => {
    return (
        <main className="max-h-full">
            <div className="h-64 mx-auto w-fit text-center mt-[10vh] max-w-sm tablet:max-w-xl">
                <h6 className="px-4 font-title font-bold text-4xl tablet:text-7xl text-main-teal-dark">
                    404 | Page Not Found
                </h6>
                <p className="font-text text-xs text-slate-700 tablet:text-2xl mb-5">
                    Whoops! Apparently the page doesn&apos;t exist.
                </p>
                <Link href="/">
                    <a className="rounded-md hover:bg-main-teal-light/80 hover:scale-105 bg-main-teal-light text-slate-100 px-4 py-2 mt-5">
                        Return to Home Page
                    </a>
                </Link>
            </div>
        </main>
    );
};

export default PageNotFound;
