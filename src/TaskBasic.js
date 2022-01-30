import React, { useState } from 'react';

const TaskBasic = () => {
    const [items, setItems] = useState('');
    const [arrayItems, setArrayItems] = useState([]);
    const iterationItems = (e) =>{
        e.preventDefault();
        setItems('');
        setArrayItems([...arrayItems, items])
        console.log(arrayItems);
    } 
  return (
    <div className='taskMother'>
        <h1>Task Basic</h1>
        <form>
            <h4>Enter a task</h4>
            <input 
                type= 'text'
                value={ items }
                onChange={ (e) => setItems(e.target.value)}
            />
            <button onClick={ iterationItems } >Add Task</button>
        </form>
    <ul>
        {
            arrayItems.map(item => <li key={ item } >{ item }</li>)
        }
    </ul>
    </div>
  )
};

export default TaskBasic;
