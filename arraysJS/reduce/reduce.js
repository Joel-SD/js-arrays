const totales = [1, 2, 3, 4];

let suma = 0;
// dos valores, metodo y estado inicial
// acumulador, elemento iterando, valor inicial = 0
//process suma =0  + elelemto de totates = 1, return = 1
//        suma = 1 + elemento de totales  = 2, return 3
const rta = totales.reduce((suma, element) => suma + element, 0);
/* console.log(rta); */

const numeros = [1, 1, 2, 3, 3, 4];
//process el objeto inicia vacio
// se busca si el item esta dentor de objeto
// si no esta, se agrega la prop y se inicia en uno
// si esta, se toma esa prop mas uno
const reduceObjeto = numeros.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});
/* console.log(reduceObjeto); */
const info = [
    { name: "hello", level: "mid" },
    { name: "hello", level: "mid" },
    { name: "hola", level: "top" },
    { name: "hola", level: "top" },
];

const rta1 = info
    .map((item) => item.level)
    .reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item] = obj[item] + 1;
        }
        return obj;
    }, {});
/* console.log(rta1); */

function calcSum(numbers) {
    return numbers.reduce((acumulador, onItem) => {
        acumulador = acumulador + onItem;
        console.log("item is " + acumulador);
        return acumulador;
    }, 0);
}

console.log(calcSum([1, 1, 1, 1, 1, 1, 1]));
