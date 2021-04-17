import { useState } from 'react';

const AddBook = () => {
    const [searchTitle, updateSearchTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        alert(searchTitle);
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
                            <img src='img/icons/search.svg' />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBook;
