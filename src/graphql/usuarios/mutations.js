import { gql } from "@apollo/client";

const EDITAR_USUARIO = gql`
  mutation EditarDatosUsuario(
    $_id: String!
    $nombre: String
    $correo: String
    $identificacion: String
    $estado: Enum_EstadoUsuario
  ) {
    editarDatosUsuario(
      _id: $_id
      nombre: $nombre
      correo: $correo
      identificacion: $identificacion
      estado: $estado
    ) {
      _id
      nombre
      correo
      estado
      identificacion
      rol
    }
  }
`;

export { EDITAR_USUARIO };
