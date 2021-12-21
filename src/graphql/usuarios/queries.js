
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



const GET_UNUSUARIO = gql`
query UsuarioFiltro($_id: String!) {
  UsuarioFiltro(_id: $_id) {
    _id
    nombre
    correo
    identificacion
    rol
    estado
  }
}
`;



export {GET_USUARIOS, GET_UNUSUARIO}

