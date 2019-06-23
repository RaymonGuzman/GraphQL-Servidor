import gql from 'graphql-tag';

export const CLIENTES_QUERY = gql `{
    getClientes{
      id
      nombre
      apellido
      empresa
      email{email}
      tipo
    }
  }`;