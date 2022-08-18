const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

//Um laço FOR para exibir titulo,ano e diretor 
for (let i = 0; i < filmes.length; i++) {
   console.log(filmes[i].titulo, filmes[i].ano, filmes[i].diretor)
  
  // um laço para exibir elenco em uma string 
  for (let z = 0; z < filmes[i].elenco.length; z++) {
       console.log('Tem no elenco:',filmes[i].elenco[0],', ', filmes[i].elenco[1], filmes[i].elenco[2], filmes[i].elenco[3])
       console.log(filmes[i].elenco) //mostra o indice e o valor 
}
}



//mudando o laço externo para for ...in ,e o laço interno for..of
for (let i in filmes) {
    console.log(filmes[i].titulo, filmes[i].ano, filmes[i].diretor)

  for (let z of filmes) {
       console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)
      console.log(`Tem como elenco: ${z.elenco}`)
  }
}