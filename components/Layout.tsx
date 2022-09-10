import Footer from './Footer/Footer';
import Header from './Header/Header';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';

interface Props {
    children: JSX.Element;
}
const Layout = ({ children }: Props) => {
    // const [load, setLoad] = useState(false);
    // useEffect(() => {
    //     if (!load) {
    //         toast(
    //             'This website is still under development. You may encounter some bugs and unfinished features.'
    //         );
    //     }
    // }, []);
    return (
        <div className="overscroll-x-contain ">
            <Header />

            {children}
            {/* <ToastContainer
                position="bottom-left"
                autoClose={15000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            /> */}
            <Footer />
        </div>
    );
};

export default Layout;
