const { option } = require('yargs')
const argv = require('yargs')
.option('b', {
    alias : 'base',
    type : 'number',
    demandOption : true,
    describe : 'Es la tabla de multiplicar'
})
.option('l', {
    alias : 'listar',
    type : 'boolean',
    demandOption : true,
    default : false,
    describe : 'Muestra los cambios en consola'

})
.option('h', {
    alias : 'hasta',
    type : 'number',
    demandOption : true,
    describe : 'hasta que numero multiplicar'

})
.check( (argv, options) => {
    if (isNaN ( argv.b )){
        throw 'La base tiene que ser un numero'
    }
    return true;
})
.check( (argv, options) => {
    if (isNaN ( argv.h )){
        throw 'Hasta tiene que ser un numero'
    }
    return true;
})
.argv;

module.exports = argv;