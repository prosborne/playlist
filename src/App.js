import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Dashboard, List, User } from './components';

const Nav = () => (
    <nav>
        <Link className="item" to="/">Dashboard</Link>
        <Link className="item" to="/lists">Manage Lists</Link>
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
