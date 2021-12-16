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
    lider {
      nombre
      identificacion
    }
  }
}

`;

const UN_PROYECTO = gql`
query ProyectoLider($_id: String!) {
  ProyectoLider(_id: $_id) {
    _id
    nombre
    presupuesto
    estado
  }
}
`;

export { PROYECTOS, UN_PROYECTO };