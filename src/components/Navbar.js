import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';
import {
    authSignIn,
    authSignOut,
    updateUserSignedIn,
} from '../modules/firebaseAuth';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Navbar = props => {
    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        updateUserSignedIn(props);
    }, [props]);

    const renderAuthBtn = () => {
        if (props.isSignedIn === false) {
            return (
                <button className='btn' onClick={() => authSignIn(props)}>
                    Sign In
                </button>
            );
        } else if (props.isSignedIn) {
            return (
                <button className='link' onClick={() => authSignOut(props)}>
                    Sign Out
                </button>
            );
        }
    };

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
                        {props.isSignedIn && (
                            <Link to='/my-books' className='link'>
                                My Books
                            </Link>
                        )}
                        {renderAuthBtn()}
                        {props.isSignedIn && (
                            <Link to='/add-book' className='btn'>
                                Add Book
                            </Link>
                        )}
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
            {navOpen && (
                <MobileNavbar
                    updateNav={setNavOpen}
                    isSignedIn={props.isSignedIn}
                />
            )}
        </>
    );
};

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, actions)(Navbar);
