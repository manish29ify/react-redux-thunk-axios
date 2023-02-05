import logo from './logo.svg';
import './App.css';
import Login from './login';
import { Provider } from 'react-redux';
import store from './store';
import Post from './pages/post.page'
import User from './pages/user.page'


function App() {
  return (
    <Provider store={store}>
      <User />
      <Post />
    </Provider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <Login />
  );
}

export default App;
