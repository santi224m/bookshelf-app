import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import './styles/global.css';
import './styles/utilities.css';
import './styles/components/navbar.css';
import './styles/components/home.css';
import './styles/components/addBook.css';
import './styles/components/bookList.css';
import './styles/components/myBooks.css';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
