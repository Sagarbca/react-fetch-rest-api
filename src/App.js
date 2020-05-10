import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
//import css
import "bootstrap/dist/css/bootstrap.min.css";
// import CreateTodo from "./Components/create-todo.component";
import CreateUser from "./Components/CreateUser";
//import EditTodo from "./Components/edit-todo.component";
import TodoList from "./Components/todos-list.component";
//import Navbar from "./Components/Navbar";
import Partner from "./Components/Partner";
import FetchApi from "./Components/FetchApi";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Menu />
          <Route path="/" exact component={TodoList} />
          <Route path="/partner" exact component={Partner} />
          <Route path="/fetchApi" exact component={FetchApi} />
          <Route path="/createUser" exact component={CreateUser} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
