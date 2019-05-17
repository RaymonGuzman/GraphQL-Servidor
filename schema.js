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
   
 """ Categoría del cliente"""
enum TipoCliente{
    CLASICO
    PREMIUM
}
     
 """Pedidos, nombre del producto y precio del producto"""
input pedidosInput{
    producto: String
    precio: Int
    
}

input emailsInput{
    email:String
}
""" Campos para Insertar los clientes con sus tipos de datos"""
 input ClienteInput{
    id: ID
    nombre: String!
    apellido:String!
    empresa: String!
    email: [emailsInput]
    tipo: TipoCliente!
    pedido: [pedidosInput]
 }

 """ Aqui el mutation para crear los clientes"""
 type Mutation {
     #Nombre del Resolver, Input con Datos y Valor que Retorna
     """Te Permite crear Nuevos Clientes """
    crearCliente(input: ClienteInput) : Cliente
 }
`);

export default schema;