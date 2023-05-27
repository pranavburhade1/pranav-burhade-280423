import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import InfoComponent from './component/infoComponent';
import customerService from './services/customerService'
import Filter from './component/filter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponrnts from './component/homeComponent';
import AddNewCustomer from './addNewCustomer';


function App() {
  
  

  return (
    <div className="App" >
    <BrowserRouter>
    <Routes>
      <Route path='/' exact Component={HomeComponrnts}/>
      <Route path='/addNew' exact Component={AddNewCustomer}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;