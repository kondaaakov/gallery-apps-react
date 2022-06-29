import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/UI/header/Header";
import Footer from "./components/UI/footer/Footer";
import './styles/App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />

        <AppRouter />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
