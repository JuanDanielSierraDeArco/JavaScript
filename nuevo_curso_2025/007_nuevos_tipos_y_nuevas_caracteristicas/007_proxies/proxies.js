// PROXIES
// Un Proxy permite interceptar operaciones sobre un objeto
// como lectura, escritura, borrado, etc.

// Objeto original que queremos proteger/controlar
const persona = {
    nombre: "",
    apellido: "",
    edad: 0,
};

// Handler (manejador)
// Aquí definimos qué hacer cuando alguien intente modificar el objeto
const manejador = {
    // El método set se ejecuta cada vez que se intenta asignar una propiedad
    set(objeto, propiedad, valor){

        // 1️⃣ Validar que la propiedad exista en el objeto original
        if (Object.keys(objeto).indexOf(propiedad) === -1) {
            console.log(`La propiedad "${propiedad}" no existe en el objeto persona`);
            return false; // Bloquea la asignación
        }

        // 2️⃣ Validar nombre y apellido (solo letras y espacios)
        if (
            (propiedad === "nombre" || propiedad === "apellido") &&
            !/^[A-Za-zÑñáéíóúüÁÉÍÓÚÜ\s]+$/.test(valor)
        ) {
            console.error(`La propiedad "${propiedad}" solo acepta letras y espacios en blanco`);
            return false;
        }

        // 3️⃣ Validar edad
        // - Debe ser número
        // - Debe estar entre 0 y 120
        if (
            propiedad === "edad" &&
            (
                typeof valor !== "number" ||
                valor < 0 ||
                valor > 120
            )
        ) {
            console.error(
                `La propiedad "${propiedad}" debe ser un número entre 0 y 120`);
            return false;
        }

        // 4️⃣ Si todo es válido, se asigna el valor
        objeto[propiedad] = valor;
        return true; // IMPORTANTE: siempre retornar true si se asigna
    },
};

// Creamos el proxy
const juan = new Proxy(persona, manejador);

// Pruebas
juan.nombre = "Juan Daniel";      // ✅ válido
juan.nombre = "Juan Daniel5";     // ❌ inválido
juan.apellido = "Sierra De Arco"; // ✅ válido
juan.edad = "27";                 // ❌ inválido (string)
juan.edad = 223;                 // ❌ fuera de rango
juan.edad = 27;                   // ✅ válido
juan.correo = "juandaniel@12345"; // ❌ propiedad inexistente

console.log(juan);
