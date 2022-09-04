import Navbar from './Navbar';

const Header: React.FC = () => {
    return (
        <header className="relative text-main-black h-14">
            <div className="fixed z-50 w-full backdrop-blur-md   ">
                <Navbar />
                {/* <h2>Header</h2> */}
            </div>
        </header>
    );
};

export default Header;
