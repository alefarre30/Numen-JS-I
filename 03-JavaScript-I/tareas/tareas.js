// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "casa";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 2;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

// "Return" la string provista: str
// Tu código:
const devolverString = str => str;

// "x" e "y" son números
// Suma "x" e "y" juntos y devuelve el valor
// Tu código:
const suma = (x, y) => x + y;

// Resta "y" de "x" y devuelve el valor
// Tu código:
const resta = (x, y) => x - y;

// Multiplica "x" por "y" y devuelve el valor
// Tu código:
const multiplica = (x, y) => x * y;

// Divide "x" entre "y" y devuelve el valor
// Tu código:
const divide = (x, y) => x / y;

// Devuelve "true" si "x" e "y" son iguales
// De lo contrario, devuelve "false"
// Tu código:
const sonIguales = (x, y) => x === y;

// Devuelve "true" si las dos strings tienen la misma longitud
// De lo contrario, devuelve "false"
// Tu código:
const tienenMismaLongitud = (str1, str2) => str1.length === str2.length;

const menosQueNoventa = num => num < 90;

// Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
// De lo contrario, devuelve "false"
// Tu código:
const mayorQueCincuenta = num => num > 50;

// Obten el resto de la división de "x" entre "y"
// Tu código:
const obtenerResto = (x, y) => x % y;

// Devuelve "true" si "num" es par
// De lo contrario, devuelve "false"
// Tu código:
const esPar = num => (num % 2) === 0;

// Devuelve "true" si "num" es impar
// De lo contrario, devuelve "false"
// Tu código:
const esImpar = num => (num % 2) !== 0;

// Devuelve el valor de "num" elevado al cuadrado
// ojo: No es raiz cuadrada!
// Tu código:
const elevarAlCuadrado = num => Math.pow(num, 2);

// Devuelve el valor de "num" elevado al cubo
// Tu código:
const elevarAlCubo = num => Math.pow(num, 3);

// Devuelve el valor de "num" elevado al exponente dado en "exponent"
// Tu código:
const elevar = (num, exponent) => Math.pow(num, exponent);

// Redondea "num" al entero más próximo y devuélvelo
// Tu código:
const redondearNumero = num => Math.round(num);

// Redondea "num" hacia arriba (al próximo entero) y devuélvelo
// Tu código:
const redondearHaciaArriba = (num) => Math.ceil(num);

//Generar un número al azar entre 0 y 1 y devolverlo
//Pista: investigá qué hace el método Math.random()
const numeroRandom = () => Math.random();

//La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
//Si el número es positivo, devolver ---> "Es positivo"
//Si el número es negativo, devolver ---> "Es negativo"
//Si el número es 0, devuelve false
const esPositivo = numero => {
  if (numero > 0) {
    return "Es positivo";
  } else if (numero < 0) {
    return "Es negativo";
  } else {
    return false;
  }
}

// Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
// Ejemplo: "hello world" pasaría a ser "hello world!"
// Tu código:
const agregarSimboloExclamacion = str => str + "!";

// Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
// Ejemplo: "Soy", "Cristian" -> "Soy Cristian"
// Tu código:
const combinarNombres = (nombre, apellido) => nombre + " " + apellido;

// Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
// "Nahuel" -> "Hola Nahuel!"
// Tu código:
const obtenerSaludo = nombre => "Hola " + nombre + "!";

// Retornar el area de un rectángulo teniendo su altura y ancho
// Tu código:
const obtenerAreaRectangulo = (alto, ancho) => alto * ancho;

//Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
//Escribe tu código aquí
const retornarPerimetro = lado => lado * 4;

//Desarrolle una función que calcule el área de un triángulo.
//Escribe tu código aquí
const areaDelTriangulo = (base, altura) => (base * altura) / 2;

//Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
//como parámetro un número de euros y calcule el cambio en dólares.
//Escribe tu código aquí
const deEuroAdolar = euro => euro * 1.20;

//Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
//Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
//que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
//Escribe tu código aquí
const esVocal = letra => {

  if (letra == "" || letra.length > 1) {
    return "Dato incorrecto";
  }

  switch (letra) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
      return "Es vocal";
    default:
      return "No es vocal";
  }

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
