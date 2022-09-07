import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';

import { motion, AnimatePresence } from 'framer-motion';
import { motionLayout } from '../transitions/transLayout';

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <Layout>
            <AnimatePresence
                exitBeforeEnter
                initial={true}
                onExitComplete={() => {
                    if (typeof window !== 'undefined') {
                        window.scrollTo({ top: 0 });
                    }
                }}
            >
                <motion.div
                    key={router.route}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={motionLayout}
                    transition={{ duration: 0.4, type: 'easeInOut' }}
                >
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </Layout>
    );
}

export default MyApp;
