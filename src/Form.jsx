import { useState } from "react";

function Form({onAddEstudiante}){

    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [materiasAprobadas,setMateriasAprobadas] = useState(0);
    const [error, setError] = useState(false);
    

    const manejadorSubmit = (e) => {
        e.preventDefault();

        validarPrimerInput(nombre);
        validarSegundoInput(apellido);

        if (error && nombre && apellido) {
            onAddEstudiante({ nombre, apellido, materiasAprobadas });
            setNombre("");
            setApellido("");
            setMateriasAprobadas(0);
        }
    }

  

    function validarPrimerInput(nombre){
        if(nombre.length < 3){
            setError(true);
        }else{
            setError(false)
        }
    }
    function validarSegundoInput(apellido){
        if(apellido.length < 6){
            setError(true);
        }else{
            setError(false)
        }
    }

    return (

        <form onSubmit={manejadorSubmit}>
            <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
            <input type="text" placeholder="Ingrese su Apellido" value={apellido} onChange={(e)=>setApellido(e.target.value)} />
            <input type="number" placeholder="Ingrese Cantidad de Materias" value={materiasAprobadas} onChange={(e)=>setMateriasAprobadas(e.target.value)} />
            <button type="submit">Agregar Estudiante</button> 
            {error && <h2 style={{ color: 'red' }}>Por favor chequea que la información sea correcta</h2>}
        </form>
        
        
    )

}

export default Form;