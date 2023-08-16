import { useState } from "react";

function Form({onAddEstudiante}){

    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [materiasAprobadas,setMateriasAprobadas] = useState(0);

    const manejadorSubmit = (e) =>{
        e.preventDefault();
        if(nombre && apellido){
            onAddEstudiante({nombre,apellido,materiasAprobadas});
            setNombre("");
            setApellido("");
            setMateriasAprobadas(0)
        }
    }

    return (

        <form onSubmit={manejadorSubmit}>
            <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
            <input type="text" placeholder="Ingrese su Apellido" value={apellido} onChange={(e)=>setApellido(e.target.value)} />
            <input type="number" placeholder="Ingrese Cantidad de Materias" value={materiasAprobadas} onChange={(e)=>setMateriasAprobadas(e.target.value)} />
            <button type="submit">Agregar Estudiante</button> 
    
        </form>
    )

}

export default Form;