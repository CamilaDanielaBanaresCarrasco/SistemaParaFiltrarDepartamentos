import { Router } from "express";
import { pruebaConexion } from "../controllers/pruebaControllers.js";
import { listarDepartamentosConHistorial } from "../controllers/departament.controler.js";

const routerConexion = Router();

routerConexion.get("/", pruebaConexion);
routerConexion.get("/listar", listarDepartamentosConHistorial);


export { routerConexion };