import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";

const Employee = sequelize.define('Employee', {
    businessentityid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nationalidnumber: {
        type: DataTypes.STRING(15)
    },
    loginid: {
        type: DataTypes.STRING(256)
    },
    jobtitle: {
        type: DataTypes.STRING(50)
    },
    birthdate: {
        type: DataTypes.DATEONLY
    },
    maritalstatus: {
        type: DataTypes.CHAR
    },
    gender: {
        type: DataTypes.CHAR
    },
    hiredate: {
        type: DataTypes.DATEONLY
    },
    salariedflag: {
        type: DataTypes.BOOLEAN
    },
    vacationhours: {
        type: DataTypes.SMALLINT
    },
    sickleavehours: {
        type: DataTypes.SMALLINT
    },
    currentflag: {
        type: DataTypes.BOOLEAN
    },
    modifieddate: {
        type: DataTypes.DATE
    },
    organizationnode: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'employee',
    timestamps: false
});


Employee.obtenerTodosLosEmpleados = async function() {
    try {
        const empleados = await this.findAll();
       // console.log("Estos son los empleados:", empleados);
        return empleados;
    } catch (error) {
        console.error("Error al obtener los empleados:", error);
        throw error;
    }
}

Employee.obtenerTodosLosEmpleados();

export {
    Employee 
  };