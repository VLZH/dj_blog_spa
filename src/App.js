import React from "react";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import MainPage from "./pages/main.jsx";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Route path="/" exact>
          <MainPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
