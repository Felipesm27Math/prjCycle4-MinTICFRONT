
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



export {GET_USUARIOS}