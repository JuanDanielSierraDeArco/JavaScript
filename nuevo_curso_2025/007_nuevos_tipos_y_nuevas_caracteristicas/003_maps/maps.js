// Map es una estructura de datos que almacena pares clave → valor
// Permite cualquier tipo de dato como clave

let mapa = new Map();

// Agregando pares clave-valor
mapa.set("nombre", "Juan Daniel Sierra");
mapa.set("apellido", "Sierra");
mapa.set("rol", "Developer");
mapa.set("edad", 27);

console.log(mapa);        // Muestra el Map completo
console.log(mapa.size);   // Número de elementos
console.log(mapa.has("correo")); // false → no existe
console.log(mapa.has("nombre")); // true
console.log(mapa.get("nombre")); // Obtiene el valor asociado

// Sobrescribe el valor si la clave ya existe
mapa.set("nombre", "Juan Daniel");
console.log(mapa);

// Elimina un par por su clave
mapa.delete("rol");

// Claves de cualquier tipo
mapa.set(19, "diecinueve");  // number como clave
mapa.set(false, "falso");    // boolean como clave
mapa.set({}, {});            // objeto como clave (referencia única)

console.log(mapa);

// Recorrer un Map con destructuring
for (let [key, value] of mapa) {
  console.log(`Llave: ${key}, Valor: ${value}`);
}

// Crear un Map a partir de un array de pares
const mapa2 = new Map([
  ["nombre", "rousen"],
  ["edad", 1],
  ["animal", "gato"],
  [null, "null"],   // null también puede ser clave
]);

console.log(mapa2);

// Obtener todas las claves como array
const llavesMapa2 = [...mapa2.keys()];
console.log(llavesMapa2);

// Obtener todos los valores como array
const valoresMapa2 = [...mapa2.values()];
console.log(valoresMapa2);