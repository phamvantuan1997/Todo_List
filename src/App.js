import React from 'react';
import './App.css';
import FormTask from './components/FormTask';
import FormList from './components/FormList';
import Footer from './components/Footer';
import {Dataprovider} from './components/Dataprovider';
function App() {
  
    return (
      <Dataprovider>
            <div className="container_fuild ">
              <div className="container">
              <div className = "newtask ">
                <div className="text_center">
                  <h4>New Task</h4>
                </div>
                <FormTask/>
              </div>

              <div className = "list">
                    <div className="text_center">
                        <h4>Todo List</h4> 
                    </div>
                    <FormList/>
                    <Footer/>
              </div>
              </div>
            </div>
     </Dataprovider>
  );
}

export default App;
