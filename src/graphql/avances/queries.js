import {gql} from '@apollo/client';

const GET_AVANCES = gql `
query Avances {
  Avances {
    descripcion
    observaciones
    fecha
    usuario {
      nombre
    }
    proyecto {
      nombre
      lider {
        nombre
      }
    }
  }
}
`;


const GET_UNAVANCE = gql `
query BuscarAvance($_id: String!) {
  BuscarAvance(_id: $_id) {
    descripcion
    observaciones
  }
}
`;

export {GET_AVANCES,GET_UNAVANCE};