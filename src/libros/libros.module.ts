import { Module } from '@nestjs/common';
import { LibrosResolver } from './libros.resolver';
import { LibrosService } from './libros.service';

@Module({
  providers: [LibrosResolver, LibrosService],
})
export class LibrosModule {}