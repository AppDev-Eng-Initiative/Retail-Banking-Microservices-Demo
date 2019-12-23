import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Import Views for Retail Banking App */
import Home from "./views/home";
import Transfer from "./views/transfer";
import Transactions from "./views/transactions";
import { slide as Menu } from 'react-burger-menu';
import menuStyles from "./components/Menu"
import profileStyles from "./components/Profile"
import Header from "./components/layout/Header"

/* Style Sheet */
import "./styles/app.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">

        <Header></Header>
        
        <Menu disableAutoFocus styles={ menuStyles }>
          <a id="Transfer History" className="menu-item" href="/">Home</a>
          <a id="Transfer History" className="menu-item" href="/transfer">Transfer</a>
          <a id="Transaction History" className="menu-item" href="/transactions">Transactions</a>
        </Menu>

        <Menu right customBurgerIcon={ <img width="20" src={require("./img/user.svg")} alt="Profile"/> } styles={ profileStyles }>
          <a id="Transfer History" className="menu-item" href="/">Username</a>
          <a id="Transaction History" className="menu-item" href="/about">Email</a>
          <a id="Transaction History" className="menu-item" href="/about">Account balance</a>
          <a id="Transaction History" className="menu-item" href="/about">Address</a>
        </Menu>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/transfer">
            <Transfer />
          </Route>
          <Route path="/transactions">
            <Transactions />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
