import { useState, useEffect } from 'react';
import UserBooksList from '../components/UserBooksList';
import { connect } from 'react-redux';
import { db } from '../firebase/config';
import { Helmet } from 'react-helmet';

const MyBooks = props => {
    const [year, setYear] = useState(null);
    const [userBooks, setUserBooks] = useState([]);
    const [filteredUserBooks, updateFilteredUserBooks] = useState([]);

    useEffect(() => {
        setYear(new Date().getFullYear());

        return () => {
            setYear(null);
        };
    }, []);

    useEffect(() => {
        db.ref(`/users/${props.userId}`).on('value', snapshot => {
            const data = snapshot.val();
            if (data) {
                if (data.books) {
                    setUserBooks([]);
                    Object.values(data.books).forEach(book => {
                        setUserBooks(oldArr => [...oldArr, book]);
                    });
                }
            }
        });
    }, [props.userId]);

    useEffect(() => {
        let newArr = userBooks.filter(book => book.dateAdded === year);
        updateFilteredUserBooks(newArr.map(book => book.book));
    }, [userBooks, year]);

    const renderPagesRead = () => {
        let pagesCount = 0;
        filteredUserBooks.forEach(book => {
            pagesCount += book.volumeInfo.pageCount;
        });

        return pagesCount;
    };

    return (
        <div id='my-books-page'>
            <Helmet>
                <title>Bookshelf | My Books</title>
            </Helmet>
            <div className='page-header'>
                <div className='container'>
                    <h2>My Books</h2>
                    <p>Books: {filteredUserBooks.length}</p>
                    <p>Pages: {renderPagesRead()}</p>
                    <div className='list-year-wrap'>
                        <button onClick={() => setYear(year - 1)}>
                            <img
                                src='/img/icons/arrow-left.svg'
                                alt='Previous'
                            />
                        </button>
                        <div className='list-year'>{year}</div>
                        <button onClick={() => setYear(year + 1)}>
                            <img src='/img/icons/arrow-right.svg' alt='Next' />
                        </button>
                    </div>
                </div>
            </div>
            <UserBooksList books={filteredUserBooks} />
            {props.userId && filteredUserBooks.length === 0 && (
                <div className='no-books-message container'>
                    No books for this year
                </div>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return { userId: state.auth.userId };
};

export default connect(mapStateToProps)(MyBooks);
