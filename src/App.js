import React from 'react'
import {useState} from 'react';
import ToDoList from './components/ToDoList';
const App = ()=> {
  const [inputList, setInputList]=useState("");
  const[items,setItems]= useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };
  const listOfItems=()=> {
  setItems((oldItems)=>
  {
    return[...oldItems,inputList];
  }
  );
  setInputList("");
  };
  const deleteItem=(id)=> {
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
return index !==id;
      });
    });
  };
  return (
    <>
    <div className="main-div">
    <div className="center-div">
    <br/>
    <h1>ToDo List</h1>
    <br/>
    <input type="text" placeholder='Add a Item' value={inputList}onChange={itemEvent}/>
    <button onClick={listOfItems}> + </button>

    <ol> {
      items.map((itemvalue, index)=> {
      return <ToDoList key={index} id={index} 
        text={itemvalue}
        onSelect={deleteItem}
      />;
     } )
    }
    </ol>
    </div>
      
    </div>
    </>
  );
};
export default App;

