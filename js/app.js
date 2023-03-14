// task 1
import {employees} from "./employees.js";
import {totalSalary} from "./methods.js";
console.log(totalSalary(employees));

// task 2

import { departmentQuantity } from "./methods.js";
console.log(departmentQuantity(employees));

// task 3

// import employees from "./employees.js";

import * as employeesMethods from "./methods.js";
console.log(employeesMethods.departmentSalary(employees));