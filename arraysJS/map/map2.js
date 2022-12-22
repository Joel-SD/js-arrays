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
        delivered: true,
    },
];
//!mapear un solo array de todo el objeto
/* const newArray = orders.map((each) => each.total);
console.log("//mapear un solo array de todo el objeto");
console.log(newArray); */

//!agregar nuevo atributo al objeto pero se muta al original order
/* const itbms = orders.map((each) => {
    each.tax = each.total * 0.07;
    return each;
}); 
console.log("//agregar nuevo atributo al objeto se muta el original");
console.log("son lo mismo   ", orders, itbms);*/

//!agregar nuevo atributo al objeto sin mutar el original
const itbms2 = orders.map((each) => {
    return {
        //Sintaxis Spread
        ...each,
        tax: each.total * 0.07,
    };
});
console.log("//agregar nuevo atributo al objeto");
console.log("no son lo mismo   ", orders, itbms2);
