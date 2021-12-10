import { gql } from '@apollo/client';

const EDITAR_USUARIO = gql`
  mutation EditarUsuario(
    $_id: String!
    $nombre: String!
    $identificacion: String!
    $correo: String!
    $estado: Enum_EstadoUsuario!
  ) {
    editarUsuario(
      _id: $_id
      nombre: $nombre
      identificacion: $identificacion
      correo: $correo
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
