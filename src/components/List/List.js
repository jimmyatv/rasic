import React from 'react';
import './List.css';

const List = ({persons, setPersons}) => {

    const deleteBtn = (idx) => {
        let newState = [...persons];
        newState.splice(idx, 1);

        setPersons(newState)
    }

  return (
    <div>
        <h2>Persons</h2>
        <ul style={{listStyle:'none'}}>
            {persons.map((person, idx) => {
                return (
                    <li key={idx}>
                        {person.name} {person.lname} {person.age} 
                        <button onClick={() => {deleteBtn(idx)}}>DELETE</button>
                        <hr/>
                    </li>
                )
            })}
        </ul>
    </div>
  )
};

export default List;