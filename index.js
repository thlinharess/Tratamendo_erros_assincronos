import fs from 'fs';
import chalk from 'chalk';
import { text } from 'express';
import { compileFunction } from 'vm';

function trataErro(erro) {
    console.log(erro);
    throw new Error (chalk.red(erro.code, 'no such file or directory'))
}
 
//async/await

async function pegaArquivo(caminhoDoArquivo){
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises
        .readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto));
    } catch(erro) {
        trataErro(erro);
    }
}

pegaArquivo('./firstLib/texto.md');
pegaArquivo('./firstLib');

// promises com then

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.promises
//       .readFile(caminhoDoArquivo , encoding)
//       .then((texto) => console.log(chalk.green(texto) ) )
//       .catch(trataErro); 
// }

//Código Síncrono

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//      fs.readFile(caminhoDoArquivo, encoding , (erro,texto) =>{
//         if(erro){
//             trataErro(erro);
//         }
//         console.log(chalk.red(texto))
//      })
// }
