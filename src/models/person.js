
import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";

// Definición del modelo Persona
const Person = sequelize.define('Person', {
    businessentityid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    persontype: {
        type: DataTypes.CHAR(2)
    },
    namestyle: {
        type: DataTypes.BOOLEAN
    },
    title: {
        type: DataTypes.STRING(8)
    },
    firstname: {
        type: DataTypes.STRING(50)
    },
    middlename: {
        type: DataTypes.STRING(50)
    },
    lastname: {
        type: DataTypes.STRING(50)
    },
    suffix: {
        type: DataTypes.STRING(10)
    },
    emailpromotion: {
        type: DataTypes.INTEGER
    },
    modifieddate: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'person',
    timestamps: false
});

// Método para obtener todas las personas
Person.obtenerTodasLasPersonas = async function() {
    try {
        const personas = await this.findAll();
      //  console.log("Personas encontradas:", personas);
        return personas;
    } catch (error) {
        console.error("Error al obtener las personas:", error);
        throw error;
    }
}
Person.obtenerTodasLasPersonas();
export {
    Person 
};