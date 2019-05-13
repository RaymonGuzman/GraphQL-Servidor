import {buildSchema} from 'graphql';

const schema= buildSchema(`

type Cliente{
    id: ID
    nombre: String
    apellido:String
    empresa: String
    email: [emails]
    tipo: TipoCliente
    pedido:[pedidos]
}

type emails{
    email:String
}
type pedidos{
    producto: String
    precio: Int
}



type Query {
     getCliente(id: ID) : Cliente
 }
    
enum TipoCliente{
    CLASICO
    PREMIUM
}
     
 
input pedidosInput{
    producto: String
    precio: Int
}
input emailsInput{
    email:String
}
 input ClienteInput{
    id: ID
    nombre: String!
    apellido:String!
    empresa: String!
    email: [emailsInput]
    tipo: TipoCliente!
    pedido: [pedidosInput]
 }

 type Mutation {
    crearCliente(input: ClienteInput) : Cliente
 }
`);

export default schema;