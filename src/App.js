import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import CreateEvent from "./components/CreateEvent/CreateEvent";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreateEvent />} />
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
