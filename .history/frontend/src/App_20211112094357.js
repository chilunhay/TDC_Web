import './App.css';
import Header from './component/layout/Header.js';
import { BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader";
import React from 'react';

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        famili
      }
    })
  })
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
