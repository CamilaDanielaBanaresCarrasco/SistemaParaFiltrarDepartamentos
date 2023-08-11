function formatInputString(str) {
    str = str.trim().replace(/\s+/g, ' '); // Eliminar espacios al inicio/final y reemplazar múltiples espacios con un solo espacio
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

async function obtenerYFiltrarDatos() {
    const nameValue = formatInputString(document.getElementById('name').value);
    const groupNameValue = document.getElementById('groupName').value;
    const fechaInicioValue = document.getElementById('fechaRangoInicio').value;
    const fechaTerminoValue = document.getElementById('fechaRangoTérmino').value;

    console.log("Valores de los inputs:");
    console.log("nameValue:", nameValue);
    console.log("groupNameValue:", groupNameValue);
    console.log("fechaInicioValue:", fechaInicioValue);
    console.log("fechaTerminoValue:", fechaTerminoValue);

    const response = await fetch('http://localhost:8081/departamentos/');
    
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Datos recibidos:", data);

    const filteredData = data.filter(item => {
        let match = true;

        if (nameValue && item.Department.name !== nameValue) match = false;
        if (groupNameValue && item.Department.groupname !== groupNameValue) match = false;
        if (fechaInicioValue && new Date(item.startdate) < new Date(fechaInicioValue)) match = false;
        if (fechaTerminoValue && new Date(item.startdate) > new Date(fechaTerminoValue)) match = false;

        return match;
    });

    console.log("Datos después de filtrar:", filteredData);
    return filteredData;
}

function mostrarEnTabla(data) {
    const tableBody = document.getElementById('tablaResultados').querySelector('tbody');
    tableBody.innerHTML = "";

    data.forEach(item => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = item.Department.departmentid;
        row.insertCell(1).textContent = item.Department.name;
        row.insertCell(2).textContent = item.Department.groupname;
        row.insertCell(3).textContent = item.businessentityid;
        row.insertCell(4).textContent = item.startdate;
    });
}

window.addEventListener('load', async () => {
    const data = await obtenerYFiltrarDatos();
    mostrarEnTabla(data);
});

document.getElementById('btnFiltrar').addEventListener('click', async () => {
    const data = await obtenerYFiltrarDatos();
    mostrarEnTabla(data);
});