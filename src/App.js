import { useState } from 'react';
import Form from './components/Form/Form';
import List from './components/List/List';
import './App.css';

const App = () => {

  const [persons, setPersons] = useState([
    {
      name: 'Anja',
      lname: 'Rasic',
      age: '11'
    },
    {
      name: 'Biljana',
      lname: 'Rasic',
      age: '32'
    },
    {
      name: 'Aleksandar',
      lname: 'Rasic',
      age: '35'
    },
    {
      name: 'Teodor',
      lname: 'Rasic',
      age: '6'
    },
    {
      name: 'Veljko',
      lname: 'Rasic',
      age: '6'
    }
  ])


  return (
    <div className="App">
      <Form persons={persons} setPersons={setPersons} />
      <List persons={persons} setPersons={setPersons} />
    </div>
  );
};

export default App;
