import { useState } from 'react';
import './App.css';
import Card from './Card';
import Form from './form';

function App() {

  const [estudiantes,setEstudiantes] =useState([]);

    const addEstudiante = (estudiante) =>{
      setEstudiantes([...estudiantes.estudiante]);
    };

  return (
    <div className='App'>
      <h1>Carga de Estudiantes</h1>
      <Form onAddEstudiante={addEstudiante}/>
      <Card estudiantes={estudiantes}/>
    </div>
  );
}

export default App;
