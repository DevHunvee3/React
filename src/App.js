import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
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
