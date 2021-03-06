import {buildSchema} from 'graphql';

const schema= buildSchema(`

type Cliente{
    id: ID
    nombre: String
    apellidos:String
    empresa: String
    emails:[Email]
}

type Email{
    email:String
}

type Query {
     cliente: Cliente
 }
`);

export default schema;