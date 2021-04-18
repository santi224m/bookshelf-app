import { db } from '../firebase/config';
import { connect } from 'react-redux';
import history from '../history';

const BooksList = ({ books, userId, year }) => {
    const handleAddBook = book => {
        db.ref('users/' + userId + '/books/' + book.id).set({
            book: book,
            dateAdded: new Date().getFullYear(),
        });

        history.push('/my-books');
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
                            <div className='book-card-hover'>
                                <button
                                    className='btn btn-light'
                                    onClick={() => handleAddBook(book)}
                                >
                                    Add Book
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
            <div className='container'>{renderList()}</div>
        </div>
    );
};

const mapStateToProps = state => {
    return { userId: state.auth.userId };
};

export default connect(mapStateToProps)(BooksList);
