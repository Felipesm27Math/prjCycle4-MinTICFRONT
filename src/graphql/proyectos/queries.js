import { gql } from '@apollo/client';

const PROYECTOS = gql`
query Proyectos {
  Proyectos {
    _id
    nombre
    presupuesto
   
    
    estado
    objetivos {
      tipo
      descripcion
    }
    
  }
}

`;

export { PROYECTOS };