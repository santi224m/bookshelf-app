const BooksList = () => {
    const renderList = () => {
        const arr = [1,2,3,4,5,6,7,8,9,10,11,12];
        return arr.map(card => {
            return (
                <div key={card} className="book-card">
                    <div className="book-card-img">
                        <img src="https://covers.openlibrary.org/b/id/1-M.jpg" alt="Book Cover"/>
                        <div className="book-card-hover">
                            <button className="btn btn-light">Add Book</button>
                        </div>
                    </div>
                    <p className="book-title">Survival of the Fittest</p>
                    <p className="book-length">411 pages</p>
                </div>
            );
        })
    }

    return (
        <div id="books-list">
            <div className="container">
                {renderList()}
            </div>
        </div>
    );
}

export default BooksList;