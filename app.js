/*
correr la aplicacion desde consola con la siguiente instrucción:
node app -b 5 -l true -a 20
*/
//const { argv } = require('process');
const {crearArchivo} = require('./varios/multiplicar')
const argv = require('./config/yargs');
require('colors');

console.clear();


// Ejemplo sin yargs
// const [,,arg3='base=1']=process.argv;
// const [,base=1]= arg3.split('=');
// console.log(arg3);

// crearArchivo(base)
// .then(nombreArchivo=>console.log(nombreArchivo,'creado'))
// .catch(err=>console.log(err))

//Ejemplo con yargs

/* 
Así se manda llamar: node app -b=5 -l=true
*/

console.log(process.argv);
console.log(argv);

console.log('base: yargs', argv.base);
console.log('listar:',argv.l);
console.log('Hasta:',argv.h);


crearArchivo(argv.base, argv.l, argv.h)
.then(nombreArchivo=>console.log(nombreArchivo.rainbow,'creado'))
.catch(err=>console.log(err))



