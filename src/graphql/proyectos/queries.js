import { gql } from '@apollo/client';

const PROYECTOS = gql`
query Proyectos {
  Proyectos {
    _id
    nombre
    presupuesto
    estado
    fase
    objetivos {
      tipo
      descripcion
    }
    
  }
}

`;

export { PROYECTOS };