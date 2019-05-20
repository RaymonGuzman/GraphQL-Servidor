import mongoose from 'mongoose';
import {Clientes} from './db';


class Cliente {
    constructor(id, {nombre, apellido, empresa, email, edad, tipo, pedido}){
       this.id=id;
       this.nombre=nombre;
       this.apellido=apellido;
       this.empresa=empresa;
       this.email=email;
       this.edad=edad;
       this.tipo=tipo;
       this.pedido=pedido;
 
    }
 }

 export const resolvers = {
     Query:{

      getCliente : ({id}) => {
         return new Cliente(id, ClientesDB[id]);

     },
     },
     Mutation: {
    
      crearCliente: (root, {input}) => {
         const id = require('crypto').randomBytes(10).toString('hex');
         ClientesDB[id] = input;
         return new Cliente(id, input);
   
      }
     }
 }
 
 export default resolvers;