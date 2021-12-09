import {gql} from '@apollo/client';

const GET_USUARIOS = gql `
query Usuarios {
  Usuarios {
    _id
    nombre
    identificacion
    correo
    estado
    rol
  }
}
`;

const GET_AVANCES = gql `
query Avances {
  Avances {
    _id
    fecha
    descripcion
    observaciones
  }
}
`;

export {GET_USUARIOS, GET_AVANCES}