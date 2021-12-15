import { getByDisplayValue } from '@testing-library/react';
import React from 'react';
import "styles/homeStyles.css";

const Presentacion = () => {
    return (
        <div><div className = "contenedorPresentacion" >
            
<h1 className = "titulo">Gestión de proyectos NAFC-Code</h1>
<div>

<p className = "parrafo">Modelo de sistema de información que soporta la gestión de proyectos de investigación. Desarrollado en el ciclo 4 de la MisiónTic 2021 por el equipo NAFC-Code.</p>
<div className ="parrafo1">La aplicación cuenta con los siguientes módulos:
<li> Módulo de gestión de usuarios</li>
<li> Módulo de gestión de proyectos</li>
<li> Módulo de gestión de inscripciones</li>
<li> Módulo de gestión de avances</li>
</div>
</div>
</div>
<footer>
     
<div>
        <center>
          <span className="parrafo1">Desarrollado por 
            <p>NAFC-CODE</p> </span>
          
        </center>
      </div>
    </footer>
    </div>
    )
}

export default Presentacion;