import { useState, useEffect } from 'react';
import BooksList from '../components/BooksList';
import { connect } from 'react-redux';
import { db } from '../firebase/config';

const MyBooks = props => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [userBooks, setUserBooks] = useState([]);

    useEffect(() => {
        db.ref(`/users/${props.userId}`).on('value', snapshot => {
            const data = snapshot.val();
            if (data) {
                Object.values(data.books).forEach(book => {
                    setUserBooks(oldArr => [...oldArr, book.book]);
                });
            }
        });
    }, [props.userId]);

    return (
        <div id='my-books-page'>
            <div className='page-header'>
                <div className='container'>
                    <h2>My Books</h2>
                    <p>Books: 37</p>
                    <p>Pages: 16,432</p>
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
            <BooksList books={userBooks} />
        </div>
    );
};

const mapStateToProps = state => {
    return { userId: state.auth.userId };
};

export default connect(mapStateToProps)(MyBooks);
