const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const http = require('http');
const cors = require('cors');

// Esto simula una base de datos simple con algunos libros
const libros = [
  {
    id: '1',
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
  },
  {
    id: '2',
    titulo: 'Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes',
  },
];

// Define el esquema GraphQL: tipos de datos y operaciones (queries y mutations)
const typeDefs = `
  type Libro {
    id: ID!
    titulo: String!
    autor: String!
  }

  type Query {
    libros: [Libro]
    libro(id: ID!): Libro
  }

  type Mutation {
    agregarLibro(titulo: String!, autor: String!): Libro
  }
`;

// Implementa los 'resolvers': funciones que dicen cómo obtener los datos
const resolvers = {
  Query: {
    libros: () => libros,
    libro: (parent, { id }) => libros.find(libro => libro.id === id),
  },
  Mutation: {
    agregarLibro: (parent, { titulo, autor }) => {
      const nuevoLibro = {
        id: String(libros.length + 1), // Genera un ID simple
        titulo,
        autor,
      };
      libros.push(nuevoLibro);
      return nuevoLibro;
    },
  },
};

// Configura e inicia el servidor Apollo
async function iniciarServidorApollo() {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Inicia el servidor Apollo antes de aplicar el middleware
  await server.start(); 

  // Aplica el middleware de Apollo Server a la aplicación Express
  server.applyMiddleware({ 
    app, 
    path: '/graphql',
    cors: { origin: '*' } // Esto es para permitir solicitudes desde cualquier origen en el Playground
  });

  const PORT = 4000;
  await new Promise(resolve => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Servidor GraphQL listo en http://localhost:${PORT}/graphql`);
  console.log(`Usa el Playground de GraphQL en http://localhost:${PORT}/graphql`);
}

// Llama a la función para iniciar el servidor
iniciarServidorApollo();