// No cambies los nombres de las funciones.

// Devuelve el primer elemento de un array
// Tu código:
const devolverPrimerElemento = array => array[0];

// Devuelve el último elemento de un array
// Tu código:
const devolverUltimoElemento = array => array[array.length - 1];

// Devuelve el largo de un array
// Tu código:
const obtenerLargoDelArray = array => array.length;

const incrementarPorUno = array => {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (array[i] === Math.floor(array[i])) {
      array[i]++;
    }
  }
  return array;
}


const agregarItemAlFinalDelArray = (array, elemento) => {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


const agregarItemAlComienzoDelArray = (array, elemento) => {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


const dePalabrasAFrase = palabras => {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let palabra = "";
  for (let i = 0; i < palabras.length; i++) {
    palabra += palabras[i] + " ";
  }
  return palabra.trim();
}

// Comprueba si el elemento existe dentro de "array"
// Devuelve "true" si está, o "false" si no está
// Tu código:
const arrayContiene = (array, elemento) => array.includes(elemento);

const agregarNumeros = numeros => {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  return suma;
}


const promedioResultadosTest = resultadosTest => {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let promedio = 0;
  let suma = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
  }

  promedio = suma / resultadosTest.length;

  return promedio;
}


const numeroMasGrande = numeros => {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let esMayor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (esMayor < numeros[i]) {
      esMayor = numeros[i];
    }
  }

  return esMayor;
}


const multiplicarArgumentos = (...args) => {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  if (!args.length) {
    return 0;
  }

  let producto = 1;
  for (let i = 0; i < args.length; i++) {
    producto *= args[i];
  }

  return producto;
}


const cuentoElementos = arreglo => {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  let cantidad = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 19) {
      cantidad++;
    }
  }

  return cantidad;
}


const diaDeLaSemana = numeroDeDia => {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch (numeroDeDia) {
    case 1:
    case 7:
      return "Es fin de semana";
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return "Es dia Laboral";
  }
}


//Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
//inicia con 9 y false en otro caso.
//Escribe tu código aquí
const empiezaConNueve = n => String(n)[0] === '9';

const todosIguales = arreglo => {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let primero = arreglo[0];
  for (let i = 0; i < arreglo.length; i++) {
    if (primero !== arreglo[i]) {
      return false;
    }
  }
  return true;
}


const mesesDelAño = array => {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let mesesBuscados = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
      mesesBuscados.push(array[i]);
    }
  }

  if (mesesBuscados.length === 3) {
    return mesesBuscados;
  } else {
    return "No se encontraron los meses pedidos";
  }
}


const mayorACien = array => {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      nuevoArray.push(array[i]);
    }
  }

  return nuevoArray;
}


const breakStatement = numero => {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  let nuevoArray = []; //genero un array vacio
  for (let i = 1; i <= 10; i++) {  //con esto hago 10 iteraciones (fijate que dice ITERAR hasta un límite de 10 veces)
    numero += 2; //aumento numero en 2 como pide el enunciado.

    if (numero === i) {
      return "Se interrumpió la ejecución"; //si numero y la cantidad de iteraciones son iguales devuelve "Se interrumpió la ejecución"
    }
    nuevoArray.push(numero); //guardo el valor de numero, en la ultima posicion del Array.
  }

  return nuevoArray; //retorno el nuevoArray.
}


const continueStatement = numero => {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let nuevoArray = []; //genero un array vacio
  for (let i = 1; i <= 10; i++) { //con esto hago 10 iteraciones (fijate que dice ITERAR hasta un límite de 10 veces)
    if (i === 5) {  //Cuando el número de iteraciones (i) alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
      continue;
    }
    numero += 2; //aumento numero en 2 como pide el enunciado.
    nuevoArray.push(numero); //guardo el valor de numero en la ultima posicion del Array.
  }


  return nuevoArray; //retorno el nuevoArray.

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
