import { Department } from "../models/departament.js";
import { EmployeeDepartmentHistory } from "../models/employeeDepartmentHistory.js";


const listarDepartamentosConHistorial = async (req, res) => {
    try {
        const historiales = await EmployeeDepartmentHistory.findAll({
            attributes: ['businessentityid', 'startdate'],
            include: [{
                model: Department,
                attributes: ['departmentid', 'name', 'groupname'],
                required: false
            }],
            order: [['businessentityid', 'ASC']]
        });

        res.json(historiales);
    } catch (error) {
        console.error("Error al obtener la lista de historiales con departamentos:", error);
        res.status(500).json({ mensaje: "Error Interno del Servidor" });
    }
};

export { listarDepartamentosConHistorial  };