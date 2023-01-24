const numbers = [
  { paquete: "1", delivered: true },
  { paquete: "2", delivered: true },
  { paquete: "3", delivered: false },
];
// return a true si la condicion es cierta, va uno por uno
const par = numbers.some((item) => {
  if (item.delivered == false) {
    console.log("el paquete: ", item.paquete, " no fue entregado");
  }
});

console.log("is par", par);
