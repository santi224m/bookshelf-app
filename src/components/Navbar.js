import { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <nav id='navbar'>
                <div className='container'>
                    <Link to='/' className='logo'>
                        Bookshelf
                    </Link>
                    <div className='links'>
                        <Link to='/' className='link'>
                            Home
                        </Link>
                        <Link to='/my-books' className='link'>
                            My Books
                        </Link>
                        <Link to='/' className='link'>
                            Sign In
                        </Link>
                        <Link to='/add-book' className='btn'>
                            Add Book
                        </Link>
                    </div>
                    <div
                        id='mobile-menu'
                        className={navOpen ? 'change' : ''}
                        onClick={() => setNavOpen(!navOpen)}
                    >
                        <div className={`bar1`}></div>
                        <div className={`bar2`}></div>
                        <div className={`bar3`}></div>
                    </div>
                </div>
            </nav>
            {navOpen && <MobileNavbar />}
        </>
    );
};

export default Navbar;
