import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";

// Definición del modelo Turno
const Shift = sequelize.define('Shift', {
    shiftid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50)
    },
    starttime: {
        type: DataTypes.TIME
    },
    endtime: {
        type: DataTypes.TIME
    },
    modifieddate: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'shift',
    timestamps: false
});

// Método para obtener todos los turnos
Shift.obtenerTodosLosTurnos = async function() {
    try {
        const turnos = await this.findAll();
       // console.log("Turnos:", turnos);
        return turnos;
    } catch (error) {
        console.error("Error al obtener los turnos:", error);
        throw error;
    }
}


Shift.obtenerTodosLosTurnos();
export {
    Shift 
};