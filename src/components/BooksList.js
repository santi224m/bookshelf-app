const BooksList = ({ books }) => {
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
                    <div className='book-card-img'>
                        <img
                            src={book.volumeInfo.imageLinks.thumbnail}
                            alt={book.volumeInfo.title}
                        />
                        <div className='book-card-hover'>
                            <button className='btn btn-light'>Add Book</button>
                        </div>
                    </div>
                    <p className='book-title'>{book.volumeInfo.title}</p>
                    <p className='book-title'>{book.volumeInfo.authors[0]}</p>
                    <p className='book-length'>
                        {book.volumeInfo.pageCount} Pages
                    </p>
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

export default BooksList;
