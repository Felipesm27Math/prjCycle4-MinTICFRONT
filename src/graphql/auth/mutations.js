import { gql } from "@apollo/client";

const REGISTRO = gql`
  mutation Registro(
    $nombre: String!
    $correo: String!
    $identificacion: String!
    $password: String!
    $rol: Enum_Rol!
  ) {
    registro(
      nombre: $nombre
      correo: $correo
      identificacion: $identificacion
      password: $password
      rol: $rol
    ) {
      token
      error
    }
  }
`;

const LOGIN = gql`
  mutation Login($correo: String!, $password: String!) {
    login(correo: $correo, password: $password) {
      token
      error
    }
  }
`;

const REFRESCAR_TOKEN = gql`
  mutation RefrescarToken {
    refrescarToken {
      token
      error
    } 
  }
`;

export { REGISTRO, LOGIN, REFRESCAR_TOKEN };
