//import { crearArchivo } from './helpers/multiplicar.js';
const colors = require ('colors')
const {crearArchivo} = require ('./helpers/multiplicar.cjs')
const argv = require ('./config/yargs.cjs')


console.clear()


crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log (nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err))
