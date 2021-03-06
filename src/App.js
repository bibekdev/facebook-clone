import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import Feed from './Feed';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
