import Footer from './Footer/Footer';
import Header from './Header/Header';

interface Props {
    children: JSX.Element;
}
const Layout = ({ children }: Props) => {
    return (
        <div className="overflow-hidden">
            <Header />

            {children}

            <Footer />
        </div>
    );
};

export default Layout;
