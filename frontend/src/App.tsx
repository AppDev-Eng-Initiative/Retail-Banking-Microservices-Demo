import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Import Views for Retail Banking App */
import Home from "./views/home";
import Transactions from "./views/transactions";
import Transfer from "./views/transfer";
import Login from "./views/login";
import Menus from "./components/Menus";
import Header from "./components/layout/Header";

/* Style Sheet */
import "./styles/app.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Login></Login>
          </Route>

          <Route path="/home/:userId?" render={(props) =>
            <div>
              <Menus {...props} />
              <Header></Header>
              <Home></Home>
            </div>}>
          </Route>

          <Route exact path="/transfer"  render={(props) =>
            <div>
              <Menus {...props} />
              <Header></Header>
              <Transfer></Transfer>
            </div>}>
          </Route>
          <Route path="/transactions"  render={(props) =>
            <div>
              <Menus {...props} />
              <Header></Header>
              <Transactions></Transactions>
            </div>}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
