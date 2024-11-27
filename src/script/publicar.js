const BASE_API_URL = "http://localhost:5140/api/";

const form = document.getElementById("formularioPublicar");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(`${BASE_API_URL}comics/upload`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Cómic subido exitosamente.");
    } else {
      const errorMessage = await response.text();
      console.error("Error al subir el cómic:", errorMessage);
      alert("Hubo un error al subir el cómic.");
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    alert("Hubo un error al subir el cómic.");
  }

});


function obtenerComics() {
    fetch(BASE_API_URL + "comics")
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = "";
            
            data.forEach(comic => {

                const fileUrl = "http://localhost:5140" + comic.file;

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${comic.title}</td>
                    <td>${comic.genre}</td>
                    <td><a href="${fileUrl}" target="_blank">Ver Cómic</a></td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error al obtener los cómics:', error));
}

obtenerComics();
