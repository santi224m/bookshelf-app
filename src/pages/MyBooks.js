import { useState } from 'react';
import BooksList from '../components/BooksList';

const MyBooks = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    return (
        <div id="my-books-page">
            <div className="page-header">
                <div className="container">
                    <h2>My Books</h2>
                    <p>Books: 37</p>
                    <p>Pages: 16,432</p>
                    <div className="list-year-wrap">
                        <button onClick={() => setYear(year - 1)}>Prev</button>
                        <div className="list-year">{year}</div>
                        <button onClick={() => setYear(year + 1)}>Next</button>
                    </div>
                </div>
            </div>
            <BooksList />
        </div>
    );
};

export default MyBooks;
