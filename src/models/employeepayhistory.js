import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";

// Definición del modelo HistorialPagoEmpleado
const Employeepayhistory = sequelize.define('Employeepayhistory', {
    employeepayhistoryid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    businessentityid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ratechangedate: {
        type: DataTypes.DATE
    },
    rate: {
        type: DataTypes.DECIMAL
    },
    payfrequency: {
        type: DataTypes.SMALLINT
    },
    modifieddate: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'employeepayhistory',
    timestamps: false
});

// Método para obtener todo el historial de pagos de los empleados
Employeepayhistory.obtenerTodoElHistorialPago = async function() {
    try {
        const historialesPago = await this.findAll();
        //console.log("Historiales de Pago de Empleados:", historialesPago);
        return historialesPago;
    } catch (error) {
        console.error("Error al obtener el historial de pagos de los empleados:", error);
        throw error;
    }
}

Employeepayhistory.obtenerTodoElHistorialPago();

export {
    Employeepayhistory 
};