import React from 'react';
import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';


function App() {
  return (
    <div className="App">
      <h1>Welcome to sahulat app</h1>
      {/* <Homepage /> */}
      <Login />
      {/* <Register /> */}
    </div>
  );
}

export default App;