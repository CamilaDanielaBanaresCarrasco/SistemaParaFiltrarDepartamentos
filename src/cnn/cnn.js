import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('postgres://postgres:Kamila123@localhost:5433/humanResourcesDos');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();