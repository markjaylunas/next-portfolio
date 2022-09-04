import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';

import { motion, AnimatePresence } from 'framer-motion';
import { motionLayout } from '../transitions/transLayout';

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <Layout>
            <AnimatePresence>
                <motion.div
                    key={router.route}
                    variants={motionLayout}
                    initial="initial"
                    animate="final"
                >
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </Layout>
    );
}

export default MyApp;
