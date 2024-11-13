const BASE_API_URL = "http://localhost:5140/api/";

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const formData = {
    username: email,
    password: password,
  };

  loginUser(formData);
});

async function loginUser(formData) {
  try {
    const response = await fetch(BASE_API_URL + "auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    

    if (response.ok) {
        const result = await response.json();
        alert(result.message);
        window.location.href = "index.html";
    } else {
        const error = await response.json();
      alert(
        "Error al iniciar sesión: " +
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
        alert("Error al intentar iniciar sesión");
    }
}
