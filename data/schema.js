import { resolvers } from './resolvers';

/* importamos esto para poder usar importSchema
y así luego poder importar schema.graphql en 
donde están los typeDefs */
import {importSchema} from 'graphql-import';


import { makeExecutableSchema } from 'graphql-tools';
//Aqui importamos los typesDefs encontrandos en schema.graphql
const typeDefs = importSchema('data/schema.graphql');
//creando el schema y haciendo tipo ejecutable
const schema = makeExecutableSchema({typeDefs, resolvers});

export { schema };