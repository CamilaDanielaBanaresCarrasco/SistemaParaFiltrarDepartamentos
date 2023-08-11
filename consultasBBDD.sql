Estamos seleccionando empleados que comenzaron en algún departamento en 2009

SELECT 
    employee.businessentityid,
    employee.nationalidnumber,
    department.departmentid,
    department.name AS _name,
    department.groupname,
    employeedepartmenthistory.startdate
FROM 
    employee
JOIN 
    employeedepartmenthistory ON employee.businessentityid = employeedepartmenthistory.businessentityid
JOIN 
    department ON employeedepartmenthistory.departmentid = department.departmentid
WHERE 
    EXTRACT(YEAR FROM employeedepartmenthistory.startdate) = 2009;

    Buscar a las personas que no tienen segundo nombre 

SELECT * 
FROM person 
WHERE middlename = 'NULL';

   Buscar personas agregadas por su sufijo suffix 

SELECT suffix, COUNT(*) AS cantidad
FROM person
WHERE suffix !='NULL' AND suffix != ''
GROUP BY suffix

