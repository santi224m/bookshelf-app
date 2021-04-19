import { Link } from 'react-router-dom';
import { authSignIn, authSignOut } from '../modules/firebaseAuth';
import * as actions from '../actions';
import { connect } from 'react-redux';

const MobileNavbar = props => {
    const handleClick = () => {
        props.updateNav(false);
    };

    const handleSignOut = () => {
        authSignOut(props);
        props.updateNav(false);
    };

    const handleSignIn = () => {
        authSignIn(props);
        props.updateNav(false);
    };

    return (
        <div id='mobile-navbar'>
            <Link to='/' onClick={handleClick}>
                Home
            </Link>
            <Link to='/my-books' onClick={handleClick}>
                My Books
            </Link>
            <Link to='/add-book' onClick={handleClick}>
                Add Book
            </Link>
            {props.isSignedIn && (
                <button className='btn' onClick={handleSignOut}>
                    Sign Out
                </button>
            )}
            {!props.isSignedIn && (
                <button className='btn' onClick={handleSignIn}>
                    Sign In
                </button>
            )}
        </div>
    );
};

export default connect(null, actions)(MobileNavbar);
