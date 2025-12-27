// ===============================
// OBJETO DATE
// ===============================

// Devuelve la fecha y hora actual en formato texto
console.log(Date());

// Se crea una instancia del objeto Date con la fecha y hora actual
let fecha = new Date();
console.log(fecha);

// ===============================
// OBTENER PARTES DE LA FECHA
// ===============================

// Día del mes (1 - 31)
console.log(fecha.getDate());

// Día de la semana (0 = domingo, 6 = sábado)
console.log(fecha.getDay());

// Mes (0 = enero, 11 = diciembre)
console.log(fecha.getMonth());

// Año completo (YYYY)
console.log(fecha.getFullYear());

// Hora (0 - 23)
console.log(fecha.getHours());

// Minutos (0 - 59)
console.log(fecha.getMinutes());

// Segundos (0 - 59)
console.log(fecha.getSeconds());

// Milisegundos (0 - 999)
console.log(fecha.getMilliseconds());

// ===============================
// FORMATOS DE FECHA
// ===============================

// Fecha completa en formato largo
console.log(fecha.toString());

// Fecha sin la hora
console.log(fecha.toDateString());

// Fecha y hora en formato local
console.log(fecha.toLocaleString());

// Solo fecha en formato local
console.log(fecha.toLocaleDateString());

// Solo hora en formato local
console.log(fecha.toLocaleTimeString());

// ===============================
// ZONA HORARIA Y UTC
// ===============================

// Diferencia en minutos entre UTC y la hora local
console.log(fecha.getTimezoneOffset());

// Día del mes en formato UTC
console.log(fecha.getUTCDate());

// Hora en formato UTC
console.log(fecha.getUTCHours());

// ===============================
// TIMESTAMP
// ===============================

// Milisegundos transcurridos desde el 1 de enero de 1970
console.log(Date.now());

// ===============================
// FECHA PERSONALIZADA
// ===============================

// Crear una fecha específica (Año, Mes, Día)
// Ojo: el mes empieza en 0 (4 = mayo)
let cumpleJuan = new Date(1998, 4, 15);
console.log(cumpleJuan);
