// Set es una estructura de datos que SOLO almacena valores ÚNICOS

const set = new Set([
  1, 2, 3, 4, 5,
  true, false, false,   // false repetido → se elimina
  {}, {},               // objetos distintos → SÍ se agregan
  "hola", "HOla"]);        // distingue mayúsculas y minúsculas


console.log(set);       // Muestra el Set completo
console.log(set.size);  // Cantidad de elementos únicos

// Crear un Set vacío
const set2 = new Set();

// Agregando valores
set2.add(1);
set2.add(2);
set2.add(2);            // duplicado → no se agrega
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);         // duplicado → no se agrega
set2.add({});           // objeto único

console.log(set2);
console.log(set2.size);

// Recorrer un Set con for...of
console.log("Recorriendo set");
for (const item of set) {
  console.log(item);
}

// Recorrer un Set con forEach
console.log("Recorriendo set2");
set2.forEach(element => console.log(element));

// ❌ No se puede acceder por índice
console.log(set[0]); // undefined

// Convertir Set a Array
const arr = Array.from(set);
console.log(arr);
console.log(arr[0]); // ahora sí funciona

// Eliminar un elemento específico
set.delete("HOla");
console.log(set);

// Verificar si un valor existe
console.log(set.has("hola")); // true

// Vaciar completamente el Set
console.log(set2);
set2.clear();
console.log(set2);