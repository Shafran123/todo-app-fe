import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home/Home';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import EditTodo from './components/pages/EditTodo/EditTodo';
import AddTodo from './components/pages/AddTodo/AddTodo';

function App() {
  return (
    <div className="App">
      <h1>
        Todo App
      </h1>
      <BrowserRouter>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/add-todo">
            <AddTodo />
          </Route>

          <Route path="/edit-todo/:id">
            <EditTodo />
          </Route>
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
