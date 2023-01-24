const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 11,
  },
];

//si todos son o no son, some va uno por uno, este recorre todos
const result = team.every((item) => {
  if (item.age <= 12) console.log("Califican");
  else console.log("no califican");
});
