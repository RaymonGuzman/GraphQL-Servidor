
/* importamos esto para poder usar importSchema
y así luego poder importar schema.graphql en 
donde están los typeDefs */
import {importSchema} from 'graphql-import';



//Aqui importamos los typesDefs encontrandos en schema.graphql
const typeDefs = importSchema('data/schema.graphql');
//creando el schema y haciendo tipo ejecutable


export { typeDefs };