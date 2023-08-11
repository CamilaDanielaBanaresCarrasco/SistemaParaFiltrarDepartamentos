import { Router } from "express";
import { listarDepartamentosConHistorial } from "../controllers/departament.controler.js";

const departamentos = Router();

departamentos.get("/", listarDepartamentosConHistorial);

export { departamentos };