import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";



const EmployeeDepartmentHistory = sequelize.define('EmployeeDepartmentHistory', {
    employeedepartmenthistoryid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    businessentityid: {
        type: DataTypes.INTEGER
    },
    departmentid: {
        type: DataTypes.SMALLINT
    },
    shiftid: {
        type: DataTypes.SMALLINT
    },
    startdate: {
        type: DataTypes.DATEONLY
    },
    enddate: {
        type: DataTypes.DATEONLY
    },
    modifieddate: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'employeedepartmenthistory',
    timestamps: false
});


EmployeeDepartmentHistory.obtenerTodoElHistorial = async function() {
    try {
        const historiales = await this.findAll();
       // console.log("Historiales Empleado-Departamento: ESTAS SON *************", historiales);
        return historiales;
    } catch (error) {
        console.error("Error al obtener el historial de Empleado-Departamento:", error);
        throw error;
    }
}


EmployeeDepartmentHistory.obtenerTodoElHistorial();
export {
    EmployeeDepartmentHistory 
};