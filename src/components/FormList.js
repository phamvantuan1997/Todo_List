import React,{useContext} from 'react';
import ListItem from "./ListItem";
import {DataContext} from './Dataprovider';

function FormList() {

  const [todos, setTodos] = useContext(DataContext);
  const switchComplete = id => {
    const newTodos = [...todos]
    newTodos.forEach((todo, index) =>{
      if(index === id){
        todo.complete = !todo.complete
      }
    })
    setTodos(newTodos)
  }
    return (
        <div>
        <div className="form_list">
        <input type="text" name="Search" className="text_input" placeholder="Search....."/>
          <div className="Rectangle">
            {
              todos.map((todo, index) => (
                <ListItem todo={todo} key={index} id={index} 
                checkComplete = {switchComplete} />
              ))
            }
          </div>
        
        </div> 
        </div> 
    );
  }
  
  export default FormList;