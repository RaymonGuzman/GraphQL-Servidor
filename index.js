import express from 'express';
//graphql
import graphqlHTTP from 'express-graphql';
import schema from './schema';


const app = express();

app.get('/', (req, res) => {
res.send('Todo Listo');
});

class Cliente {
   constructor(id, {nombre, apellido, empresa, email}){
      this.id=id;
      this.nombre=nombre;
      this.apellido=apellido;
      this.empresa=empresa;
      this.email=email;

   }
}

const ClientesDB = {};
// el resolver
const root = {cliente: () => {
   return{
      "id": 9381318131,
      "nombre": "Raymon",
      "apellido": "Guzmán Domínguez",
      "empresa": "SosS",
      "email":"frankguzman23@gmail.com"

   }
},
   crearCliente: ({input}) => {
      const id = require('crypto').randomBytes(10).toString('hex');
      ClientesDB[id] = input;
      return new Cliente(id, input);

   }
};

app.use('/graphql', graphqlHTTP({
   // que schema va a utilizar
   schema,
   // el resolver se para com rootValue
   rootValue: root,
   //utilziar graphiql
   graphiql: true 
}));

app.listen(8000, () => console.log('El servidor está funcionando'));