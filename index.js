import express from 'express';
//graphql
import graphqlHTTP from 'express-graphql';
import schema from './schema';


const app = express();

app.get('/', (req, res) => {
res.send('Todo Listo');
});

// el resolver
const root = {cliente: () => {
   return{
      "id": 9381318131,
      "nombre": "Raymon",
      "apellido": "Guzmán Domínguez",
      "empresa": "SosS",
      "emails":[
   
         {email:"frankguzman23@gmail.com"},
         {email: "evil_thebadman@hotmail.com"}
      ] 


   }
}};

app.use('/graphql', graphqlHTTP({
   // que schema va a utilizar
   schema,
   // el resolver se para com rootValue
   rootValue: root,
   //utilziar graphiql
   graphiql: true 
}));

app.listen(8000, () => console.log('El servidor está funcionando'));