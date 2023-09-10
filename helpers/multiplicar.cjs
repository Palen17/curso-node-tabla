//import { writeFile, writeFileSync } from 'node:fs';
const {writeFile, writeFileSync} = require ('node:fs');
const colors = require ('colors')


 const crearArchivo = async(base, listar = false, hasta) => {

    try {

        let salida = ''

        for (let i = 1 ; i <= hasta; i++ ){
    
        salida += `${base} x ${i} = ${base * i} \n`
            
    
        }

        if (listar){

            console.log('================='.green)
            console.log(` Tabla del ${base}`.blue)
            console.log('================='.green)
        
            console.log(salida)

        }
    
        
    
        writeFileSync(`./salida/tabla-${base}.txt`, salida)
    
        return `tabla-${base}.txt`
        
    } catch (err) {

        throw err
        
    }



    


}

module.exports = {
    crearArchivo
}