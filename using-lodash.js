
const customers = ["hadeel", "lily", "layla"];
const activeCustomers = ["hadeel", "lily"];

// const theActive =customers.filter((p) => {
//   return activeCustomers.includes(p);
// });
// console.log(theActive);
/*-----------------------------------------------------------------------------------*/
//using lodash:
console.log(_.difference(customers, activeCustomers)); //['layla']