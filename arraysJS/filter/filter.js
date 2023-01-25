// es inmutable
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: false,
  },
  {
    customerName: "Nico",
    total: 122240,
    delivered: false,
  },
];

/* const newOrders = orders.filter((order) => order.total > 150 && order.delivered);
console.log("alv perro", newOrders); */

const search = (query) => {
  return orders.filter((each) => {
    return each.customerName.includes(query);
  });
};
let query = "nico";
console.log(search(query.toLowerCase()));
