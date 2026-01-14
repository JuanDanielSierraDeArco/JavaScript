// WeakSet y WeakMaps

// ❌ Esto NO funciona porque WeakSet solo acepta objetos
// const ws = new WeakSet([1,2,3,true,"hola"]);

const ws = new WeakSet();

// Objetos (referencias válidas)
let valor1 = { "valor1": 1 };
let valor2 = { "valor2": 2 };
let valor3 = { "valor3": 3 };

// Agregando objetos al WeakSet
ws.add(valor1);
ws.add(valor2);

// Verifica si un objeto existe en el WeakSet
console.log(ws.has(valor1)); // true
console.log(ws.has(valor3)); // false

// Elimina un objeto
ws.delete(valor2);

// WeakSet no se puede inspeccionar directamente
console.log(ws); // WeakSet {}

ws.add(valor2);
ws.add(valor3);

// Aunque agreguemos, no podemos iterarlo
console.log(ws);

// Si quitamos las referencias, el Garbage Collector los elimina
// setTimeout(() => {
//   valor1 = null;
//   valor2 = null;
//   valor3 = null;
// }, 3000);
