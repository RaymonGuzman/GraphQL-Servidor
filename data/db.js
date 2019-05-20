import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/clientes', {useNewUrlParser: true});

//Definir el schema de clientes

const clientesSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    empresa: String,
    email: String,
    edad:Number,
    tipo:String,
    pedido:Array,

});

const Clientes = mongoose.model('clientes', clientesSchema);


export { Clientes };