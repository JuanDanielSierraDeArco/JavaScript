//ejercicos con find


const users = [
    {id: 1, name:'ana'},
    {id: 2, name:'Juan'},
    {id: 3, name: 'marta'}
]
console.log(users);

//Busca el usuario cuyo nombre tenga mas de tres letras
const nombreMayortresLetras = users.find(nombre => nombre.name.length > 3);

console.log(nombreMayortresLetras);

const words = ['sol', 'luna', 'estella', 'cielo'];

//encontrar el indice de la primera palabra que tenga mas de 5 letras

const indexWords = words.findIndex(palabra => palabra.length > 5)

console.log(indexWords)
console.log(words[indexWords])