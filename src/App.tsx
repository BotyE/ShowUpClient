import React, { useState } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import AppRouter from './AppRouter';

function App() {
  const [pageNumber, setPageNumber] = useState(0)
  function handleCl() {
    setPageNumber(prev => prev +1)
    console.log(pageNumber)
  }
  return (
    <HashRouter> 
      <AppRouter/>
    </HashRouter>
  );
}

export default App;
