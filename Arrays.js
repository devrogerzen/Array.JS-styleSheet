const mokeArray = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10];


function findNumber(array, number) {
  return array.find((item) => item === number);
}
//devuelve el primer elemento que encuentra en el array que cumple la condición
//console.log(findNumber(mokeArray, 2)); // 2 || si no se encuentra undefined


function findIndex(array, number) {
  return array.findIndex((item) => item === number);
}
//devuelve el índice[] del primer elemento que encuentra en el array que cumple la condición
//console.log(findIndex(mokeArray, 2)); // 1 || si no se encuentra -1


function filterNumber(array, number) {
  return array.filter((item) => item === number);
}
//devuelve un array con todos los elementos que cumplan la condición
//console.log(filterNumber(mokeArray, 3)); // [3, 3] || si no se encuentra []


function mapNumber(array, number) {
  return array.map((item) => item * number);
}
//devuelve un array con todos los elementos modificados por la función
//console.log(mapNumber(mokeArray, 2)); // [2, 4, 6, 6, 8, 10, 12, 14, 16, 18, 20]




//Métodos que no modifican el array original
//Estos métodos toman el array original, hacen algo con él y luego devuelven un nuevo array. 
//El array original no se modifica. Algunos ejemplos de estos métodos son map, filter, reduce, find, findIndex.


//Métodos que modifican el array original
//Estos métodos cambian el array original directamente. Algunos ejemplos de estos métodos son push, pop, shift, unshift, splice, sort, reverse.

//Es importante tener en cuenta si un método modifica o no el array original, 
//ya que esto puede afectar cómo y cuándo usas ese método. Si no quieres que el array original se modifique, 
//debes usar métodos que no lo hagan, o hacer una copia del array antes de usar métodos que lo modifiquen.



function reduceNumber(array, number) {
  return array.
  reduce((acc, item) => acc * item, number);
}
//devuelve un valor único que es el resultado de la función
console.log(reduceNumber(mokeArray, 1)); // 58 || si no se encuentra 0

//Encontrar el valor máximo o mínimo: Puedes usar reduce para encontrar el valor más grande o más pequeño en un array.
function findMax(array) {
  return array.reduce((acc, item) => (item > acc ? item : acc), array[0]);
}

//ontar ocurrencias: Puedes usar reduce para contar cuántas veces aparece un elemento en un array.
function countOccurrences(array, value) {
  return array.reduce((acc, item) => (item === value ? acc + 1 : acc), 0);
}

//Aplanar un array de arrays: Puedes usar reduce para convertir un array de arrays en un solo array que contiene todos los elementos.
function flatten(array) {
  return array.reduce((acc, item) => acc.concat(item), []);
}

//Eliminar duplicados: Puedes usar reduce para eliminar elementos duplicados de un array.
function removeDuplicates(array) {
  return array.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
}

//Calcular el promedio: Puedes usar reduce para calcular el promedio de los valores de un array.
function average(array) {
  return array.reduce((acc, val) => acc + val, 0) / array.length;
}

//Transformar un array en un objeto: Puedes usar reduce para convertir un array en un objeto, donde cada elemento del array se convierte en una propiedad del objeto.
function arrayToObject(array) {
  return array.reduce((acc, item, index) => {
    acc[index] = item;
    return acc;
  }, {});
}


//Agrupar objetos por una propiedad: Puedes usar reduce para agrupar objetos por una propiedad.
function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

//Dividir un array en partes: Puedes usar reduce para dividir un array en partes de un tamaño determinado.
function splitArray(array, size) {
  return array.reduce((acc, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(item);
    return acc;
  }, []);
}









//Combinar un array de arrays: Puedes usar reduce para combinar un array de arrays en un solo array.
function combineArrays(arrays) {
  return arrays.reduce((acc, array) => acc.concat(array), []);
}

//Combinar un array de objetos: Puedes usar reduce para combinar un array de objetos en un solo objeto.
function combineObjects(objects) {
  return objects.reduce((acc, object) => ({ ...acc, ...object }), {});
}




function everyNumber(array, number) {
  return array.every((item) => item === number);
}

function someNumber(array, number) {
  return array.some((item) => item === number);
}

function includesNumber(array, number) {
  return array.includes(number);
}

function indexOfNumber(array, number) {
  return array.indexOf(number);
}

function lastIndexOfNumber(array, number) {
  return array.lastIndexOf(number);
}

function joinNumber(array, number) {
  return array.join(number);
}

function sliceNumber(array, number) {
  return array.slice(number);
}

function spliceNumber(array, number) {
  return array.splice(number);
}

function concatNumber(array, number) {
  return array.concat(number);
}

function flatNumber(array, number) {
  return array.flat(number);
}

function flatMapNumber(array, number) {
  return array.flatMap((item) => item * number);
}

function sortNumber(array, number) {
  return array.sort((a, b) => a - b);
}

function reverseNumber(array, number) {
  return array.reverse();
}

function fillNumber(array, number) {
  return array.fill(number);
}

function copyWithinNumber(array, number) {
  return array.copyWithin(number);
}

function ofNumber(array, number) {
  return Array.of(number);
}

function fromNumber(array, number) {
  return Array.from(number);
}

function isArrayNumber(array, number) {
  return Array.isArray(number);
}

