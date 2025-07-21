📚 API GraphQL de Gestión de Libros
Este proyecto implementa una API GraphQL básica para gestionar una colección de libros. Su función principal es proporcionar operaciones para crear, leer (obtener todos y por ID) libros, utilizando un sistema de datos en memoria para simplificar la configuración.

🚀 Tecnologías Utilizadas
Node.js: Entorno de ejecución de JavaScript del lado del servidor.

Express: Un framework web rápido y minimalista para Node.js, utilizado para manejar las solicitudes HTTP.

Apollo Server v3 (apollo-server-express): Una implementación de GraphQL compatible con Express, utilizada para construir el servidor GraphQL.

GraphQL: Un lenguaje de consulta para APIs y un tiempo de ejecución para ejecutar esas consultas con tus datos existentes.

📡 Detalles del Servicio API
Rol: Provee las funcionalidades CRUD (Crear, Leer) para la entidad Libro.

Puerto de Escucha: 4000

Endpoint GraphQL: http://localhost:4000/graphql

Base de Datos: En memoria (los datos se pierden al reiniciar el servidor).

📦 Modelo de Datos (En Memoria - Libro)
La API gestiona la entidad Libro con el siguiente esquema simple:

GraphQL

type Libro {
  id: ID!
  titulo: String!
  autor: String!
}
⚙️ Funcionalidades Expuestas (Queries y Mutaciones GraphQL)
Esta API expone sus funcionalidades a través de los siguientes tipos de operaciones GraphQL.

Tipo de Operación	Nombre de la Operación	Descripción	Argumentos Esperados	Retorno
Query	libros	Obtiene una lista de todos los libros disponibles.	N/A (ninguno)	[Libro]
Query	libro	Busca y devuelve un libro específico por su ID.	id: ID! (ej. "1")	Libro
Mutation	agregarLibro	Crea y añade un nuevo libro a la colección.	titulo: String!, autor: String!	Libro (el libro creado)

Exportar a Hojas de cálculo
🚀 Cómo Poner en Marcha la API
Sigue estos pasos para configurar y ejecutar la API GraphQL en tu entorno de desarrollo.

Prerrequisitos
Asegúrate de tener instalado:

Node.js (versión 16.x o superior recomendada, tu v22.16.0 es compatible con esta configuración).

npm (viene con Node.js).

Configuración del Entorno
Navegar al Directorio del Proyecto:
Abre tu terminal y navega al directorio del proyecto mi-api-graphql-libros:

Bash

cd C:\Users\shida\DesarrolloDeSoftware\Ciclo3\Herramientas\mi-api-graphql-libros
Limpiar Instalaciones Previas (Recomendado):
Asegúrate de que no haya dependencias antiguas que causen conflictos:

Bash

Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
Instalar Dependencias del Proyecto:
Instala todas las librerías necesarias definidas en package.json:

Bash

npm install
Iniciar la API
Una vez configurado todo lo anterior, para levantar la API GraphQL:

Bash

node index.js
Deberías ver un mensaje en tu consola indicando que el servidor está listo y escuchando en el puerto 4000, junto con la URL para acceder al Playground de GraphQL:

🚀 Servidor GraphQL listo en http://localhost:4000/graphql
Usa el Playground de GraphQL en http://localhost:4000/graphql
🧪 Cómo Probar el Funcionamiento (GraphQL Playground)
Una vez que el servidor esté corriendo, abre tu navegador web y ve a la URL indicada: http://localhost:4000/graphql. Esto abrirá el GraphQL Playground (también conocido como Apollo Sandbox), donde podrás interactuar con tu API.

Ejecuta las siguientes operaciones en el panel de la izquierda del Playground (el editor de operaciones) y observa los resultados en el panel de la derecha.

1. Obtener todos los libros (Query)
GraphQL

query ObtenerTodosLosLibros {
  libros {
    id
    titulo
    autor
  }
}
2. Obtener un libro por ID (Query)
Puedes cambiar el id a "2" para obtener el segundo libro de los datos iniciales.

GraphQL

query ObtenerLibroPorID {
  libro(id: "1") {
    id
    titulo
    autor
  }
}
3. Agregar un nuevo libro (Mutation)
Después de ejecutar esta mutación, puedes volver a ejecutar la query ObtenerTodosLosLibros para verificar que el nuevo libro ha sido añadido a la lista.

GraphQL

mutation AgregarNuevoLibro {
  agregarLibro(titulo: "1984", autor: "George Orwell") {
    id
    titulo
    autor
  }
}