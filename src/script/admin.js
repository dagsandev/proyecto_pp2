const BASE_API_URL = "http://localhost:5140/api/";

const usuariosBtn = document.getElementById('usuariosBtn');
const tableBody = document.getElementById('tableBody');

function actualizarTabla(data) {
    tableBody.innerHTML = "";
  
    data.forEach((user) => {
      const rowData = `
              <tr>
                  <td>${user.id}</td> 
                  <td>${user.fullname}</td>
                  <td>${user.username}</td>                  
              </tr>
          `;
  
      tableBody.innerHTML += rowData;
    });
  }

function obtenerUsuarios() {
    fetch(`${BASE_API_URL}user/`)
      .then((response) => response.json())
      .then((user) => actualizarTabla(user))
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }
  
  usuariosBtn.onclick = () => {
    obtenerUsuarios();
  };