import { gql } from "@apollo/client";

const EDITAR_PROYECTO = gql`
mutation EditarProyecto($id: String!, $nombre: String, $presupuesto: Float, $estado: Enum_EstadoProyecto, $fase: Enum_FaseProyecto) {
  editarProyecto(_id: $id, nombre: $nombre, presupuesto: $presupuesto,estado: $estado, fase: $fase) {
    _id
    nombre
    presupuesto
    estado
    fase
    
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
