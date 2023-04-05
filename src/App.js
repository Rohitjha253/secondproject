import logo from './logo.svg';
import './App.css';
import { Provider, createStoreHook } from 'react-redux';

import store from './store';
import Posts from './Components/Posts';
import PostForm from './Components/PostForm';




function App() {
  return (
    <Provider store= {store}>
      <div className="App">
        <PostForm/>
        <Posts/>
      </div>
    </Provider>
  );
}

export default App;
