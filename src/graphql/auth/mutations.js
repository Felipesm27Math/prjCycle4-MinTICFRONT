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

const VALIDAR_TOKEN = gql`
  mutation ValiarToken {
    valiarToken {
      token
      error
    }
  }
`;

export { REGISTRO, LOGIN, VALIDAR_TOKEN };
