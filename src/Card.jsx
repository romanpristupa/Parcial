import React from "react";


const Card =({estudiantes} ) => {

    return (
        <div>
            <h2>Lista Estudiantes</h2>
            {estudiantes.map((estudiante, index) => (
            <div key={index} className="card">
            <h3>{estudiante.nombre} {estudiante.apellido} {estudiante.materiasAprobadas}</h3>
            </div>))}
        </div>
        
    )
}

export default Card;