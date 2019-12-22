import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Import Views for Retail Banking App */
import Home from "./views/home";
import Profile from "./views/profile";
import Transfer from "./views/transfer";
import Transactions from "./views/transactions";
import { slide as Menu } from 'react-burger-menu';
import styles from "./components/Menu"

/* Style Sheet */
import "./styles/app.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Menu styles={ styles }>
          <a id="Transfer History" className="menu-item" href="/">Transfer History</a>
          <a id="Transaction History" className="menu-item" href="/about">Transaction History</a>
        </Menu>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
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
