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
    ){
      token
      error
    }
  }
`;

export {REGISTRO};