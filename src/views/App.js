import logo from './logo.svg';
import './App.scss';

import ListTodo from './Todos/ListTodo';
import MyComponent from './Example/MyComponent';
import Home from './Example/Home';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Nav from './Nav/nav';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ListTodo />} />
            <Route
              path="/about"
              element={<MyComponent />}
            />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
