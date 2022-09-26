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

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: ['O Pior Dia de Todos',' Harry Potter e o Prisioneiro de Azkaban'],
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);
// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos[0].titulo.length + ' livros favoritos');