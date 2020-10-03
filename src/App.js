import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

const App = () => {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default App;

// Tarea
// 1 - Implementar Edicion de articulo
// 2 - Implementar Todas las acciones necesarias con Api Json placeholder (/posts)
// 3 - Implementar menu y header para todas las pantallas
