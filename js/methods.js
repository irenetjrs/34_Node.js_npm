// task 1

import {employees} from "./employees.js";
export function totalSalary(employees){
   let sum = 0;
   employees.forEach(item => {
      sum += item.salary;
   });
   return sum;
};
console.log(totalSalary(employees));

// task 2

export function departmentQuantity(employees){
   let quantity = [];
   employees.forEach(item =>{
      quantity.push(item.department);
   });
   return new Set(quantity).size;
};
console.log(departmentQuantity(employees));