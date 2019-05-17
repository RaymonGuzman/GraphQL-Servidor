class Cliente {
    constructor(id, {nombre, apellido, empresa, email, tipo, pedido}){
       this.id=id;
       this.nombre=nombre;
       this.apellido=apellido;
       this.empresa=empresa;
       this.email=email;
       this.tipo=tipo;
       this.pedido=pedido;
 
    }
 }
 
 const ClientesDB = {};
 // el resolver
 const resolvers = {
     getCliente : ({id}) => {
         return new Cliente(id, ClientesDB[id]);

     },
    crearCliente: ({input}) => {
       const id = require('crypto').randomBytes(10).toString('hex');
       ClientesDB[id] = input;
       return new Cliente(id, input);
 
    }
 };

 export default resolvers;