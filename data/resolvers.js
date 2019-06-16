import mongoose from 'mongoose';
import { Clientes } from './db';
import { rejects } from 'assert';



export const resolvers = {
   Query: {

      getCliente: ({ id }) => {
         return new Cliente(id, ClientesDB[id]);

      },
      getClientes: (root, {limite}) => {
         return Clientes.find({}).limit(limite);
      }
   },
   Mutation: {

      crearCliente: (root, { input }) => {

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
            nuevoCliente.save((error) => {
               if (error) rejects(error)
               else resolve(nuevoCliente)
            })

         });

      },
      actualizarCliente: (root, { input }) => {
         return new Promise((resolve, object) => {
            Clientes.findOneAndUpdate({ _id: input.id }, input, { new: true }, (error, cliente) => {
               if (error) rejects(error)
               else resolve(cliente)
            });
         });

      },
      eliminarCliente: (root, { id }) => {
         return new Promise((resolve, object) => {
            Clientes.findOneAndRemove({ _id: id }, (error) => {
               if (error) rejects(error)
               else resolve("Se ha borrado el cliente exitosamente")
            });

         });
      }
   }
}

export default resolvers;