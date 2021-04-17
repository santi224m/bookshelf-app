import { Link } from 'react-router-dom';

const MobileNavbar = () => {
    return (
        <div id='mobile-navbar'>
            <Link to='/'>Home</Link>
            <Link to='/my-books'>My Books</Link>
            <Link to='/add-book'>Add Book</Link>
            <Link to='/' className='btn'>
                Sign Out
            </Link>
        </div>
    );
};

export default MobileNavbar;
