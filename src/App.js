import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Dashboard, List, User } from './components';
import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA9R1nXlaGx3YItB9I4PYs_Eb4PYIgmTtQ",
    authDomain: "plalist-2fb8b.firebaseapp.com",
    databaseURL: "https://plalist-2fb8b.firebaseio.com",
    projectId: "plalist-2fb8b",
    storageBucket: "plalist-2fb8b.appspot.com",
    messagingSenderId: "1055253613205"
};
firebase.initializeApp(config);


const Nav = () => (
    <nav>
        <Link className="item" to="/">Dashboard</Link>
        <Link className="item" to="/list">Manage Lists</Link>
        <Link className="item" to="/user">User Account</Link>
    </nav>
)

const NavBar = () => (
    <header>
        <div className="logo">
            <span></span>
        </div>
        <Nav />
    </header>
)

class App extends Component {
  render() {
    return (
        <div>
            <Router>
                <div className="global-container">
                    <NavBar />
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/list" component={List} />
                    <Route exact path="/user" component={User} />
                </div>
            </Router>
        </div>
    )
  }
}

export default App;
