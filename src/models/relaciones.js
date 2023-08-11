import { Department } from "../models/departament.js";
import { Employee } from "../models/employee.js";
import { Employeepayhistory } from "../models/employeepayhistory.js"; // Aquí está la corrección
import { EmployeeDepartmentHistory } from "../models/employeeDepartmentHistory.js";
import { Person } from "../models/person.js";
import { Shift } from "../models/shift.js";

// Employee is related to Person
Employee.belongsTo(Person, {
  foreignKey: 'businessentityid',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Person.hasOne(Employee, {
  foreignKey: 'businessentityid',
});

// EmployeeDepartmentHistory is related to Employee, Department, and Shift
EmployeeDepartmentHistory.belongsTo(Employee, {
  foreignKey: 'businessentityid',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

EmployeeDepartmentHistory.belongsTo(Department, {
  foreignKey: 'departmentid',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

EmployeeDepartmentHistory.belongsTo(Shift, {
  foreignKey: 'shiftid',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Employee.hasMany(EmployeeDepartmentHistory, {
  foreignKey: 'businessentityid',
});

Department.hasMany(EmployeeDepartmentHistory, {
  foreignKey: 'departmentid',
});

Shift.hasMany(EmployeeDepartmentHistory, {
  foreignKey: 'shiftid',
});

// Employeepayhistory is related to Employee
Employeepayhistory.belongsTo(Employee, { // Aquí también está corregido
  foreignKey: 'businessentityid',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Employee.hasMany(Employeepayhistory, { // Y aquí
  foreignKey: 'businessentityid',
});