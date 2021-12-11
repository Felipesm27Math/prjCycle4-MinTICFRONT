import {gql} from '@apollo/client';

const GET_AVANCES = gql `
query Avances {
  Avances {
    _id
    fecha
    descripcion
    observaciones
  }
}
`;

export {GET_AVANCES};