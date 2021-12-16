import {gql} from '@apollo/client';

const GET_INSCRIPCIONES = gql `
query Inscripcion {
  Inscripcion {
    _id
    fechaIngreso
    fechaSalida
    estado
    proyecto {
      nombre
    }
    estudiante {
      nombre
    }
  }
}
`;

const GET_UNAINSCRIPCION = gql `
query BuscarInscripcion($_id: String!) {
  BuscarInscripcion(_id: $_id) {
    _id
    estudiante {
      nombre
    }
    estado
  }
}
`;

export {GET_INSCRIPCIONES,GET_UNAINSCRIPCION};