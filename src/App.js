import React, { useState } from 'react';

import './App.css';
import List from "./components/List";

import data from "./testdata.json";





function App() {

  const [ list, setList ] = useState(data);

  const toggleStrike = (id) => {
    let mapped = list.map(item => {
      return item.id === Number(id) ? { ...item, complete: !item.complete } : { ...item};
    });
    setList(mapped);
  };


  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>

      <List list={list} toggleStrike={toggleStrike}/>
      

    </div>
  );
}

export default App;
