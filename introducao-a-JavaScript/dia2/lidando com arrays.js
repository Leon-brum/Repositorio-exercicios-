let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//for (let index = 0; index < numbers.length; index += 1){
//    console.log(numbers[index]);
//}

//////////////////////////SOMA DA ARRAY////////////////////////

// let somaTotal = 0;
// for(let index = 0; index < numbers.length; index++){
//     somaTotal += numbers[index];    
// }
// console.log(somaTotal);

////////////////////////MEDIA ARITMETICA//////////////////////////

// let somaTotal = 0;
// for(let index = 0; index < numbers.length; index++){
//     somaTotal += numbers[index];    
// }
// console.log(somaTotal / numbers.length);

//////////////////////////////////////////////////////////

// let somaTotal = 0;
// let mediaAritmetica = 0;
// for(let index = 0; index < numbers.length; index++){
//     somaTotal += numbers[index];    
// }
// mediaAritmetica = somaTotal / numbers.length;
// if (mediaAritmetica > 20){
//     console.log('valor maior que 20');
// } else {
//     console.log('valor menor ou igual a 20');
// }

/////////////////////////////DESCOBRIR O MAIOR VALOR DA ARRAY//////////////////////////////

// let maiorValor = 0;
// for(let index = 0; index < numbers.length; index++){
//     if (numbers[index] > maiorValor){
//         maiorValor = numbers[index];
//     }
// }
// console.log(maiorValor);

/////////////////////////////NUMERO IMPAR//////////////////////////////
let valor = 0;
for (let index = 0; index < numbers.length; index++){
    if (numbers[index] % 2 !== 0){
        valor += 1;
    }
}   
if(valor === 0) {
    console.log('nenhum valor impar')
} else {
    console.log(valor);
}
