const BASE_API_URL = "http://localhost:5140/api/";

const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const formData = {
    fullname: fullname,
    username: username,
    password: password,
  };

  registrarUsuario(formData);
});

async function registrarUsuario(formData) {
  try {
    const response = await fetch(BASE_API_URL + "auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json();
      alert("Usuario registrado exitosamente.");

      window.location.href = `${BASE_API_URL}auth/login`;
    } else {
      const error = await response.json();
      alert(
        "Error al registrar usuario: " +
          "\n" +
          error.title +
          "\n" +
          error.message +
          "\n" +
          error.detail
      );
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    alert("Hubo un problema al registrar el usuario.");
  }
}
