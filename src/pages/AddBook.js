import { useState, useEffect } from 'react';
import BooksList from '../components/BooksList';
import axios from 'axios';

const AddBook = () => {
    const [searchTitle, updateSearchTitle] = useState('');
    const [searchResults, updateSearchResults] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        const formatSearchTitle = searchTitle.replace(/ /g, '+');
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${formatSearchTitle}`
            )
            .then(({ data }) => {
                updateSearchResults(data.items);
            });
    };

    return (
        <div id='add-book-page'>
            <div className='page-header'>
                <div className='container'>
                    <h3>Search for a book</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            name='search'
                            id='search-box'
                            value={searchTitle}
                            onChange={e => updateSearchTitle(e.target.value)}
                        />
                        <button type='submit'>
                            <svg height='20' width='20'>
                                <path d='M19.756,18.58l-5.688-5.688a7.932,7.932,0,1,0-1.178,1.178l5.688,5.688a.833.833,0,1,0,1.178-1.178ZM7.917,14.17a6.25,6.25,0,1,1,6.25-6.25A6.257,6.257,0,0,1,7.917,14.17Z' />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
            <BooksList books={searchResults} />
        </div>
    );
};

export default AddBook;
