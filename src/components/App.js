import { Router, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import AddBook from '../pages/AddBook';
import MyBooks from '../pages/MyBooks';
import history from '../history';

const App = () => {
    return (
        <>
            <Router history={history}>
                <Navbar />
                <Route path='/add-book' exact component={AddBook} />
                <Route path='/my-books' exact component={MyBooks} />
                <Route path='/' exact component={Home} />
            </Router>
        </>
    );
};

export default App;
