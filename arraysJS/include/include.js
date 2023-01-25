const pets = ["perro", "gato", "caballo", "gato"];

//se puede buscar un
const hasIt = pets.map((item) => {
  item.includes("gat");
});
/* console.log(hasIt); */

const array = ["tenis", "aroz", "arroz", "arbeja"];

const newArray = array.filter((item) => {
  return item.includes("a");
});
console.log(newArray);
