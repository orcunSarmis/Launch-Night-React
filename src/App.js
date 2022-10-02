import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;

{
  /* <div className="App">
</div> */
}
