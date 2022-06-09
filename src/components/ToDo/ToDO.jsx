import { useState } from 'react';
import React from 'react';
import NoName from '../NoName/NoName'
import styles from './ToDo.module.scss'
import ToDoElement from '../ToDoElemet/ToDoElement';


function ToDO(props) {
  const changeInput = function(e) {setValue(e.target.value)}
  const months = ['January', 'February', 'March', 'April', 
    'May', 'June', 'July', 'August', 'September', 'October', 'November',
    'December'
  ]
  const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
    'Thursday', 'Friday', 'Saturday'
  ];
  const resetApp = () => {
    localStorage.removeItem('userName');
    setName('');
    setValue('');
    setTodos([]);
    window.location.reload();
  }
  const addTask = () => {
    if(value) {
      const newItem = {
        id: Math.random().toString(36).substring(2,9),
        task: value,
        complete: false,
      }
      setTodos([...todos, newItem]);
      setValue('');
    }
  }
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => 
      todo.id === id ? {...todo, complete: !todo.complete} : 
      {...todo}
      )
    ])
  }
  const handleKeyPless = (e) => {if(e.key === 'Enter') {addTask()}}

  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');
  const [name, setName] = useState(localStorage.getItem('userName') || '') 
  const updateName = function(name) {
    setName(name);
  }
  const now = new Date();
  return (
    <div className={styles.container}>
      <NoName updateName={updateName} />
      <div className={styles.wrap}>
        <h2>Hello,</h2> <br />
        <h1>{name}!</h1>
        <div className={styles.date}>
          <div className={styles['date-month-year']}>
            <p id={styles.num}>{now.getDate()}</p>
            <div className={styles['month-year']}>
              <p>{months[now.getMonth()]}</p>
              <p>{now.getFullYear()}</p>
            </div>
          </div>
            <div className={styles.week}>
              <p>{weeks[now.getDay()]}</p>
            </div>
        </div>
        <div className={styles['write-input']}>
          <input value={value} onChange={changeInput} onKeyDown={handleKeyPless} type="text" />
          <button onClick={addTask}>add</button>
        </div> 
        <div>
          {todos.map((todo) => {
            return(
              <ToDoElement
                key={todo.id}
                todo={todo}
                toggleTask={handleToggle}
                removeTask={removeTask}
              />
            )
          })}
        </div>     
        <button onClick={resetApp} className={styles.reset}>reset all</button>  
      </div>   
    </div>
  );
}

export default ToDO;