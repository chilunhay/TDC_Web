import './App.css';
import Header from './component/layout/Header/Header.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React from 'react';
import Footer from './component/layout/Footer/Footer.js';
import Home from './component/Home/Home.js';

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto","Droid Sans", "Chilanka"],
      },
    });
  }, []);
  
  return (
    <Router>
      <Header />
      
      <.banner {
  background-image: url("../../images/cover.jfif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vmin;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: white;
}

.banner > h1 {
  margin: 5vmax;

  font: 600 2.5vmax "Roboto";
}

.banner > p {
  font: 300 1.4vmax "Lucida Sans";
}

.banner > a > button {
  margin-bottom: 5vmax;
  cursor: pointer;
  background-color: white;
  border: 1px solid white;
  border-radius: 0;
  padding: 1vmax;
  transition: all 0.5s;
  width: 9vmax;
  font: 500 1vmax "Roboto";
}
.banner > a > button:hover {
  background-color: rgba(255, 255, 255, 0);
  color: white;
}

.banner::after {
  content: "";
  width: 100vw;
  height: 100vmin;
  background-color: #ffffff;
  position: absolute;
  top: 0%;
  left: 0;
  clip-path: polygon(100% 68%, 0 100%, 100% 100%);
  max-width: 100%;
}

.homeHeading {
  text-align: center;
  font-family: Roboto;
  font-size: 1.4vmax;
  border-bottom: 1px solid rgba(21, 21, 21, 0.5);
  width: 20vmax;
  padding: 1vmax;
  margin: 5vmax auto;
  color: rgb(0, 0, 0, 0.7);
}

.container {
  display: flex;
  margin: 2vmax auto;
  width: 80vw;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
}

.productCard {
  width: 14vmax;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: rgb(48, 48, 48);
  margin: 2vmax;
  transition: all 0.5s;
  padding-bottom: 0.5vmax;
}

.productCard > img {
  width: 14vmax;
}

.productCard > div {
  margin: 0.5vmax;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.productCardSpan {
  margin: 0.5vmax;
  font: 300 0.7vmax "Roboto";
}

.productCard > p {
  font-family: "Roboto";
  font-size: 1.2vmax;
  margin: 1vmax 0.5vmax;
  margin-bottom: 0;
}

.productCard > span {
  margin: 0.5vmax;
  color: tomato;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1vmax;
}

.productCard:hover {
  box-shadow: 0 0 5px rgba(15, 15, 15, 0.26);

  transform: translateY(-1vmax);
}

@media screen and (max-width: 600px) {
  .productCard > p {
    font-size: 1.7vmax;
  }

  .productCard > div {
    margin: 0vmax;
    display: block;
  }

  .productCard > span {
    font-size: 1.5vmax;
  }

  .productCard > div > span {
    margin: 0 0.5vmax;
    font: 300 1vmax "Roboto";
  }
}
>
        <Route exact path="/" component={Home} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
