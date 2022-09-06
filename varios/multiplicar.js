const colors = require('colors');
const fs=require('fs');

// const crearArchivo = async(base = 5) => {
//     try {
//         console.log('==========================\n');
//         console.log(`      Tabla del ${base}   \n`);
//         console.log('==========================\n');

//         salida+='==========================\n';
//         salida+=`      Tabla del ${base}   \n`;
//         salida+='==========================\n';
        
        
//         for(let i=1; i<11; i++){
//             salida+=`${base} X ${i} = ${base*i}\n`;
//         }
        
//         // fs.writeFile(`TablaDel${base}.txt`,salida, (err)=>{
//         //     if(err) throw err;
//         //     console.log(`TablaDel${base}.txt creada;`);     
//         // })
        
//         fs.writeFileSync(`TablaDel${base}.txt`,salida);

//         return `TablaDel${base}.txt`
//     } catch (error) {
//         throw error; 
//     }
    
// }

const crearArchivo = (base=5, listar=false, hasta=10)=> {
    const promesa=new Promise((resolve, reject)=>{
        try {

            let salida ='';
            let consola='';

            salida+='==========================\n';
            salida+=`Tabla del:${base}\n`;
            salida+='==========================\n';
            for(let i=1; i<=hasta; i++){
                consola+=`${base} ${'X'.blue} ${i} ${'='.blue} ${base*i}\n`;
                salida+=`${base} X ${i} = ${base*i}\n`;                
            }

            if(listar){
                console.log('=========================='.red);
                console.log('      Tabla del:'.blue, colors.green(base));
                console.log('=========================='.red);
                console.log(consola);
            }
            fs.writeFileSync(`./salida/tabla-del-${base}.txt`,salida);
            resolve(`tabla-del-${base}.txt`)
        } catch (error) {
            reject(`NO SE PUDO REALIZAR LA TABLA DEL ${base}`)
        }  
    });
    return promesa;
}

module.exports = {
    crearArchivo
}