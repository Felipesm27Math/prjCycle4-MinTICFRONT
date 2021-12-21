import { gql } from "@apollo/client";

const EDITAR_PROYECTO = gql`
  mutation Mutation(
    $_id: String!
    $nombre: String
    $presupuesto: Float
    $objetivos: [crearObjetivo]
  ) {
    editarProyectoLider(
      _id: $_id
      nombre: $nombre
      presupuesto: $presupuesto
      objetivos: $objetivos
    ) {
      _id
      nombre
      presupuesto
      objetivos {
        tipo
        descripcion
      }
      presupuesto
    }
  }
`;

const CREAR_PROYECTO = gql`
  mutation CrearProyecto( 
    $nombre: String!
    $presupuesto: Float!
    $lider: String!
    $objetivos: [crearObjetivo]
  ) {
    crearProyecto(
      nombre: $nombre
      presupuesto: $presupuesto
      lider: $lider
      objetivos: $objetivos
    ) {
      _id
    }
  }
`;

export { EDITAR_PROYECTO, CREAR_PROYECTO };
