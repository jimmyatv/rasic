import {React,useState} from 'react';
import './Form.css';

const Form = ({persons, setPersons}) => {

    const [name, setName] = useState('');
    const [lname, setLname] = useState('');
    const [age, setAge] = useState('');


    const submited = (e) => {
        e.preventDefault();

        const newPerson = {
          name: name,
          lname: lname,
          age: age
        }     

        if(name != '' && lname != '' && age != ''){
          setPersons(prev => [...prev, newPerson]);

          setName('');
          setLname('');
          setAge('');

          e.target.focused.focus()

        }
        
        

    }


  return (
    <div>
        <form onSubmit={submited}>
            <input onChange={(e) => {setName(e.target.value)}} name='focused' type='text' value={name} placeholder='Name'/>
            <input onChange={(e) => {setLname(e.target.value)}} type='text' value={lname} placeholder='Last Name'/>
            <input onChange={(e) => {setAge(e.target.value)}} type='number' min={4} max={75} value={age} placeholder='Age'/>
            <input type='submit' value='Add'/>
        </form>

        <h5>Name:{name}</h5>
        <h5>Last Name: {lname}</h5>
        <h5>Age: {age}</h5>
        <hr/>
    </div>
  )
};

export default Form;