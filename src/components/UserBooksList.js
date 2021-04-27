import { db } from '../firebase/config';
import { connect } from 'react-redux';
import history from '../history';

const UserBooksList = ({ books, userId }) => {
    const handleRemoveBook = book => {
        if (userId) {
            db.ref('users/' + userId + '/books/' + book.id).remove();
        } else {
            alert('Please sign in');
        }
    };

    const renderList = () => {
        // Remove books that don't have covers
        if (!books) {
            return;
        }
        const booksArr = books.filter(
            book =>
                book.volumeInfo.imageLinks &&
                book.volumeInfo.pageCount &&
                book.volumeInfo.authors
        );
        return booksArr.map(book => {
            return (
                <div key={book.id} className='book-card'>
                    <div className='book-wrapper'>
                        <div className='book-card-img'>
                            <img
                                src={book.volumeInfo.imageLinks.thumbnail}
                                alt={book.volumeInfo.title}
                            />
                            <div
                                id='user-books-hover'
                                className='book-card-hover'
                                style={{ display: `${!userId ? 'none' : ''}` }}
                            >
                                <button
                                    className='btn btn-light'
                                    onClick={() => handleRemoveBook(book)}
                                >
                                    Remove Book
                                </button>
                            </div>
                        </div>
                        <p className='book-title'>{book.volumeInfo.title}</p>
                        <p className='book-title'>
                            {book.volumeInfo.authors[0]}
                        </p>
                        <p className='book-length'>
                            {book.volumeInfo.pageCount} Pages
                        </p>
                    </div>
                </div>
            );
        });
    };

    return (
        <div id='books-list'>
            {!userId && (
                <div className='no-books-message container'>
                    Please sign in to add a book to your account
                </div>
            )}
            <div className='container'>{renderList()}</div>
        </div>
    );
};

const mapStateToProps = state => {
    return { userId: state.auth.userId };
};

export default connect(mapStateToProps)(UserBooksList);
