import { gql } from '@apollo/client';

const GET_USUARIOS = gql`
  query Query($filtro: FiltroUsuarios) {
    Usuarios(filtro: $filtro) {
      _id
      nombre      
      correo
      estado
      identificacion
      rol
    }
  }
`;

export {GET_USUARIOS}
