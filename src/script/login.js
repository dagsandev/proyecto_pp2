const loginForm = document.querySelector('form');

loginForm.addEventListener("submit", async (e) =>{
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
        username: email,
        password: password
    };

    try {
        const response = await fetch('http://localhost:4000/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if(response.ok){
            alert(result.message);
            window.location.href = 'index.html';
        } else {
            alert(result.message);
        }

    } catch (error){
            alert("Error al intentar iniciar sesión")
        }
});
