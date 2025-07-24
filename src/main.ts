import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Habilita CORS para el Playground
  const PORT = 4000;
  await app.listen(PORT);
  console.log(`🚀 Servidor GraphQL NestJS listo en http://localhost:${PORT}/graphql`);
  console.log(`Usa el Playground de GraphQL en http://localhost:${PORT}/graphql`);
}
bootstrap();