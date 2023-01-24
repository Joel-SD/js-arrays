const numbers = [132, 3, 1, 2, 3];

///busca si hay un 3, se detiene en el primero que encuentra
const result = numbers.find((item, index) => item === 3);
const position = numbers.findIndex((item) => item === 3);
console.log(result, " can be found at index ", position + 1);
