//-----------------For/in-----------------------//

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim',
//   };
// console.log('Bem-vinda, ' + info.personagem);
// console.log(info['recorrente'] = 'sim');
// for (let key in info){
//     console.log(info[key]);
// }

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
// }
// console.log(info.personagem + ' e ' + info2.personagem);
// console.log(info.origem + ' e ' + info2.origem);
// console.log(info.nota + ' e ' + info2.nota);
// if (info.recorrente && info2.recorrente === 'Sim'){
// console.log('Ambos recorrentes');
// } else{
//     console.log('Nao sao recorrentes')
// }

//-----------------------------------------------------------//

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: ['O Pior Dia de Todos',' Harry Potter e o Prisioneiro de Azkaban'],
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);
// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);
// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos[0].titulo.length + ' livros favoritos');

//----------------------Function-------------------------//



// function palidromo (palavra){
//     let palavraInvertida = '';
//     for (let index = 0; index < palavra.length; index += 1){
//         palavraInvertida += palavra[palavra.length - 1 - index];
//     }
//     if (palavra === palavraInvertida){
//         return true;
//     } else {
//         return false;
//     }
// }


// console.log(palidromo('abacate'));

//-----------------------Retorna maior numero inteiro------------------//

// function numeroInteiro (array = []){
//     let numeroAtual = 0;
//     for (let index = 0; index < array.length; index += 1){
//         if (numeroAtual <= array[index]){
//            numeroAtual = array[index];
//         } else {};
//     }
//     return numeroAtual;
// }
// console.log(numeroInteiro([500,200,700,105,56,900,80,60]));

//-----------------------Retorna o menor numero inteiro----------------//

// function numeroInteiro (array = []){
//     let numeroAtual = array[0];
//     for (let index = 0; index < array.length; index += 1){
//         if (array[index] <= numeroAtual){
//            numeroAtual = array[index];
//         } else {};
//     }
//     return numeroAtual;
// }
// console.log(numeroInteiro([500,-50,700,105,56,900,80,60]));

//--------------Retorna o maior quantidade de caracteres-------------//

// function maiorPalavra (array = ['']){
//     let palavraSelecionada = '';
//     let aMaiorPalavra = '';
//     for (let index = 0; index < array.length; index += 1){
//         palavraSelecionada = array[index];
//         if (aMaiorPalavra.length < palavraSelecionada.length){
//             aMaiorPalavra = palavraSelecionada;
//     }   else {}

//     }
//     return aMaiorPalavra;
// }
// console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo','Joana']));

//-----------------Retorna o numero que mais se repete-------------------------//

// function maisRepetido(numeros) {
//     let contRepetido = 0;
//     let contNumero = 0;
//     let indexNumeroRepetido = 0;

//     for (let index in numeros) {
//       let verificaNumero = numeros[index];
//       for (let index2 in numeros) {
//         if (verificaNumero === numeros[index2]) {
//           contNumero += 1;
//         }
//       }
//       if (contNumero > contRepetido) {
//         contRepetido = contNumero;
//         indexNumeroRepetido = index;
//       }
//       contNumero = 0;
//     }

//     return numeros[indexNumeroRepetido];
//   }

//   console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3, 5, 5]));

//------------------------retorna soma--------------------------//