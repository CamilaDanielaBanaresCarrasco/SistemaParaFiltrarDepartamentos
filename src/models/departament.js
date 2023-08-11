import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";

const Department = sequelize.define('Department', {
    departmentid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50)
    },
    groupname: {
        type: DataTypes.STRING(50)
    },
    modifieddate: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'department',
    timestamps: false
});


Department.obtenerTodosLosDepartamentos = async function() {
    try {
        const departamentos = await this.findAll();
       // console.log("Departamentos:", departamentos);
        return departamentos;
    } catch (error) {
        console.error("Error al obtener los departamentos:", error);
        throw error; 
    }
}

Department.obtenerTodosLosDepartamentos();

export {
    Department 
  };