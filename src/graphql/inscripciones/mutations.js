import { gql } from "@apollo/client";

const CREAR_INSCRIPCION = gql`
  mutation Mutation($estudiante: String!, $proyecto: String!) {
    crearInscripcion(estudiante: $estudiante, proyecto: $proyecto) {
      _id
    }
  }
`;

const EDITAR_INSCRIPCION = gql`
  mutation EditarInscripcion($id: String!, $estado: Enum_EstadoInscripcion!) {
    editarInscripcion(_id: $id, estado: $estado) {
      _id 
    }
  }
`;

export { CREAR_INSCRIPCION };
