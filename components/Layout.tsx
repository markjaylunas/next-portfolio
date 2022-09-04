import Footer from './Footer/Footer';
import Header from './Header/Header';

interface Props {
    children: JSX.Element;
}
const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />

            {children}

            <Footer />
        </>
    );
};

export default Layout;
