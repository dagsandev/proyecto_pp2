# ComicApp

## Introducción
Desarrollo de una aplicación académica para la materia Desarrollo de sistemas de Información del IFTS 11. Consiste

## Integrantes
* Bleile Franco
* Daglio Santiago
* Zamojski Paula

## Tecnologías utilizadas
* Javascript
* HTML
* CSS
* Bootstrap
* C#
* SQLServer

## Librerías utilizadas en Visual Studio:

![Img readme](/img-readme/15.png)

* BCrypt.Net-Next(4.0.3): Esta librería se utiliza para el hashing de contraseñas. 
* Microsoft.AspNet.WebApi.Cors(5.3.0): Esta librería proporciona soporte para CORS (Cross-Origin Resource Sharing) en aplicaciones ASP.NET Web API.
* Microsoft.EntityFrameworkCore(8.0.10): Entity Framework Core es una librería de ORM (Object-Relational Mapping) para aplicaciones .NET. Permite trabajar con bases de datos utilizando objetos C# en lugar de SQL, facilitando la interacción con las bases de datos y el manejo de datos.
* Microsoft.EntityFrameworkCore.Design(8.0.10): Esta librería proporciona herramientas de diseño para trabajar con Entity Framework Core en el contexto de la migración de bases de datos y la generación de modelos.
* Microsoft.EntityFrameworkCore.SqlServer(8.0.10): Esta librería proporciona soporte para usar SQL Server como el proveedor de base de datos con Entity Framework Core. Permite la conexión a bases de datos de Microsoft SQL Server desde aplicaciones .NET.
* Swashbuckle.AspNetCore(6.4.0): Esta librería facilita la integración de Swagger en aplicaciones ASP.NET Core. Swagger es una herramienta que permite generar documentación interactiva para APIs de manera automática.


## Endpoints

### Backend
- **Base URL:** `https://localhost:5140/api/`
- **Auth Login:** `https://localhost:5140/api/auth/login`
- **Auth Registro:** `https://localhost:5140/api/auth/register`
- **Swagger UI URL:** `https://localhost:5140/swagger/index.html`

### Frontend
- **Home:** `https://127.0.0.1:5500/src/pages/index.html`

# Pasos para configurar el proyecto

## Paso 1: Clonar el repositorio

Es necesario clonar el repositorio dos veces: una para la rama de desarrollo del frontend y otra para la del backend.

### 1. Crear la carpeta principal del proyecto

* crear carpeta en el lugar deseado:
```
 mkdir pp2
```

* moverse dentro de la carpeta creada:
```
cd pp2
```

* crear carpeta frontend: 
```
mkdir frontend
```

* crear carpeta backend: 
```
mkdir backend
```

* moverse dentro de frontend: 
```
cd frontend
```

* clonar repo: (se clona la rama main por defecto que es donde tenemos el desarrollo del front)
```
git clone  https://github.com/blejj/proyecto_pp2.git
```

* moverse una carpeta para atras (hacia pp2):
```
cd ..
```

* moverse a carpeta backend:   
```
cd backend
```

*  clonar repo: 
```
git clone https://github.com/blejj/proyecto_pp2.git
```

*  ejecutamos el comando 'git branch' y nos dirá que estamos en main, tenemos que cambiar a la rama backend para tener los cambios de esa rama.
```
git checkout backend
```


* Abrimos Visual Studio 2022, y elegimos “Abrir Proyecto o solución”
  
![Img readme](/img-readme/1.png)

* Elegimos el archivo solución:
  
![Img readme](/img-readme/2.png)

* Listo, tenemos el proyecto importado en VS:

![Img readme](/img-readme/3.png)

* Con el botón de play iniciamos el proyecto y se abrirá la pagina de Swagger en el navegador automáticamente:

![Img readme](/img-readme/4.png)

![Img readme](/img-readme/5.png)

* Los únicos métodos implementados son el de Login y Registro, los de User no se realizaron y son parte de la plantilla importada por defecto al crear el proyecto.

* Para Abrir el proyecto FrontEnd, abrir Visual Studio Code y presionar el botón de ‘Abrir carpeta’

![Img readme](/img-readme/6.png)

* Seleccionamos proyecto_pp2 y presionamos ‘Seleccionar Carpeta’

![Img readme](/img-readme/7.png)

* Listo, proyecto importado en VS Code:

![Img readme](/img-readme/8.png)

* Posicionarse en la pagina de login.html, botón derecho, y seleccionar  ‘abrir en el navegador por defecto’ o ‘abrir con servidor en vivo’

![Img readme](/img-readme/9.png)

![Img readme](/img-readme/10.png)

* Podemos crear una cuenta si no tenemos, para eso nos dirigmos al link:
¿No tienes una cuenta? Crear una
* Nos dirige al formulario de Registro:

![Img readme](/img-readme/11.png)

* Antes de registrarse debemos abrir SQL Server y nos conectamos, sino no podremos registrarnos:

![Img readme](/img-readme/12.png)

* En Visual Studio, en el archivo appsetting.json

![Img readme](/img-readme/13.png)

* Se encuentra la configuración para conectarse a la Base de Datos en Sql Server:
"ConnectionStrings": {
   "DefaultConnection": "Data Source=(local)\\SQLEXPRESS;Initial Catalog=PP2Database;Integrated Security=True;Trusted_Connection=True;TrustServerCertificate=True;"
 }
El campo “Catalog=……………..” es el nombre que le daremos a la base de datos cuando se la creemos.

* Para crear la base de datos, vamos a Tools – NuGet Package Manager – Package Manager Console

![Img readme](/img-readme/14.png)

* En la consola que se despliega, ejecutaremos el siguiente comando:
```
Add-Migration InitialCreate
```
* Luego de aplicar la migración, actualizamos la base de datos:
```
Update-Database
```
