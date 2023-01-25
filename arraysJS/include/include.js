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
/* console.log(newArray); */

function filterByTerm(array, term) {
  return array.filter((item) => {
    item.includes(term);
  });
}
const arra = ["ana", "santi", "nico", "anastasia"];
const ter = "ana";

console.log(filterByTerm(arra, ter));
