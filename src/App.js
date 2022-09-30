import React, { useState } from 'react';

import './App.css';
import List from "./components/List";
import AddItem from './components/AddItem';

import data from "./data.json";





function App() {

  const [ list, setList ] = useState(data);
  

  const toggleStrike = (id) => {
    let mapped = list.map(item => {
      return item.id === Number(id) ? { ...item, complete: !item.complete } : { ...item};
    });
    mapped = mapped.sort((a, b) => a.complete > b.complete ? 1 : -1)
    setList(mapped);
  };

  const addItem = ( input ) => {
    let copy = [...list];
    copy = [...copy, { id: getID(), task: input, complete: false }];
    setList(copy);
  }

  const deleteItem = () => {

  }

  const getID = () =>{
    const ids = list.map(object => {
      return object.id;
    });

    const max = Math.max(...ids);
    return(max+1);
  }



  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>

      <AddItem addItem={addItem}/>
      <List list={list} setList={setList} toggleStrike={toggleStrike}/>
      

    </div>
  );
}

export default App;
