import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
  <>
 
    <Header></Header> 
    <Router>
    <Routes>
     <Route   path="/" element={ <Cards/>} ></Route>
     <Route   path="/cart/:id" element={ <CardsDetails/>} ></Route>
    </Routes>
  </Router>

  </>
  );
}

export default App
