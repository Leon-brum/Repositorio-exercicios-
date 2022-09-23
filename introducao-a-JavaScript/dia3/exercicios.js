//////////////////FATORIAL///////////////////

// let numero = 4;
// let fatorial = [];
// let resultado = 1;
// let resultadoIndex = 0;

// for(let index = 1; index <= numero; index += 1){
//     resultado = index * resultado;
   
// } 
// console.log(resultado);

//////////////////////////////INVERTER PALAVRA////////////////

// let palavra = 'banana'
// let palavraInvertida = '';

// for(let index = 0; index < palavra.length; index += 1){
//    palavraInvertida += palavra[palavra.length - 1 - index];
// }
//  console.log(palavraInvertida);

 ///////////////////////////////////////////////////////////

//  let array = ['java', 'javascript', 'python', 'html', 'css'];
//  let maiorPalavra = '';
//  let menorPalavra = '';

// for(let index = 0; index < array.length; index += 1){
//     if (array[index].length > maiorPalavra.length){
//         maiorPalavra = array[index];
//     }
//     if (array[index].length < menorPalavra.length){
//         menorPalavra = array[index];
//     }
// } 
// console.log(maiorPalavra);
// console.log(menorPalavra);

/////////////////////////////////////////////////////////////

let  maiorNumeroPrimo = 0;
for (let index = 2; index < 4; index += 1){
    let numeroPrimo = true
    for (let divisor = 2; divisor < index; divisor += 1){
        if(index % divisor === 0){
            numeroPrimo = false;
        }
    }
    if (numeroPrimo){
        maiorNumeroPrimo = index;
    }
}
console.log(maiorNumeroPrimo);
     


