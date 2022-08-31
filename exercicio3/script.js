//Crie a const para a frase aqui
//Jorge tem uma casa verde e com portão azul, com os dizeres: BOAS VINDAS, mas não deixe o gato sair"

let frasePrincipal = ('Jorge tem uma casa verde e com portão azul, com os dizeres: "\BOAS VINDAS, mas não deixe o gato sair \"')

console.log(frasePrincipal)

let novaFrase = frasePrincipal.replace('verde', 'rosa').replace('azul','laranja')
console.log(novaFrase)

console.log(novaFrase.includes('verde'))
console.log(novaFrase.includes('laranja'))

fraseMaiuscula = frasePrincipal.toUpperCase()
console.log(fraseMaiuscula)