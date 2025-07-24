import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { LibrosModule } from './libros/libros.module'; // Lo crearemos en el siguiente paso

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Generará el esquema aquí
      sortSchema: true,
      playground: true, // Habilita el Playground
    }),
    LibrosModule, // Importa el módulo de tus libros
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}