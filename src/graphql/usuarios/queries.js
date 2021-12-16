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
query UsuarioFiltro($id: String!) {
  UsuarioFiltro(_id: $id) {
    identificacion
    nombre
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

export {GET_USUARIOS, GET_AVANCES, GET_UNUSUARIO}