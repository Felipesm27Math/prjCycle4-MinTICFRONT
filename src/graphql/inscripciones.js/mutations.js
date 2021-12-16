import { gql } from '@apollo/client';

const CREAR_INSCRIPCION = gql`
    mutation Mutation( $estudiante: String!, $proyecto: String! ) {
        crearInscripcion(estudiante: $estudiante, proyecto: $proyecto,) {
        _id
        }
    }
    `;

    
    

export { CREAR_INSCRIPCION };