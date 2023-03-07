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

