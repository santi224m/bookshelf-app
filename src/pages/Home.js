import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div id='home-page'>
            <Helmet>
                <title>Bookshelf</title>
            </Helmet>
            <div className='container'>
                <div className='home-content'>
                    <h1>Keep track of your books</h1>
                    <p>
                        Now you can visualize how many books you have read
                        throughout the years.
                    </p>
                    <div className='home-buttons'>
                        <Link to='/add-book' className='btn'>
                            Add a book
                        </Link>
                        <Link to='/my-books' className='btn btn-outline'>
                            View my books
                        </Link>
                    </div>
                </div>
                <div className='home-img'>
                    <img src='/img/icons/books.svg' alt='Books' />
                </div>
            </div>
        </div>
    );
};

export default Home;
