import React from "react";
import './todoCounter.css'

function TodoCounter(){
    return(
        <div className="titleContainer">
            <h2> Has complentado 2 de 4 ToDos</h2>
            <div className="progressBar"><span className="progressCurrent">50%</span></div>
        </div>
            
        
    )
}

export {TodoCounter};