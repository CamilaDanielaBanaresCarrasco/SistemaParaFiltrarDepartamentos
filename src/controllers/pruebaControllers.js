
const pruebaConexion = async (req, res) => {
  try {
    res.json({message: "Tenemos conexion"});
  } catch (error) {
    console.error("Error al obtener las comunas:", error);
    res.status(500).json({ message: "No tenemos conexion" });
  }
};

export { pruebaConexion };