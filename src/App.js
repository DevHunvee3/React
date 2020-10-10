import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import { Grid } from "@material-ui/core";
import { Provider } from "react-redux";
import store from './redux/store';

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Grid container justify="center">
            <Grid item xs={8} container direction="column" spacing={2}>
              <Switch>
                {routes.map((r, i) => (
                  <Route
                    key={i}
                    path={r.url}
                    exact={r.exact}
                    component={r.component}
                  ></Route>
                ))}
              </Switch>
            </Grid>
          </Grid>
        </div>
      </Provider>
    </Router>
  );
};

export default App;
