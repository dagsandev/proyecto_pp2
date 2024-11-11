const registerForm = document.getElementById("register-form");

      
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault(); 

           
            const nombreCompleto = document.getElementById("nombre-completo").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            
            const data = {
                nombreCompleto: nombreCompleto,
                email: email,
                password: password
            };

          
            try {
                const response = await fetch("http://localhost:4000/auth/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();
                if (response.ok) {
                    alert(result.message);  
                } else {
                    alert(result.message); 
                }
            } catch (error) {
                alert("Hubo un error al enviar el formulario.");
            }
        });