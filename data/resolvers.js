import mongoose from 'mongoose';
import {Clientes} from './db';
import { rejects } from 'assert';


 
 export const resolvers = {
     Query:{

      getCliente : ({id}) => {
         return new Cliente(id, ClientesDB[id]);

     },
     },
     Mutation: {
    
      crearCliente: (root, {input}) => {

         const nuevoCliente = new Clientes({
            nombre: input.nombre,
            apellido: input.apellido,
            empresa: input.empresa,
            email: input.email,
            edad: input.edad,
            tipo: input.tipo,
            pedido: input.pedido

         });
         nuevoCliente.id = nuevoCliente._id;

         return new Promise((resolve, object) => {
            nuevoCliente.save((error)=>{
               if(error) rejects(error)
               else resolve(nuevoCliente)
            })

         });

      }
     }
 }
 
 export default resolvers;