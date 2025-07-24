import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { LibrosService } from './libros.service';
import { Libro } from './models/libro.model';

@Resolver(() => Libro)
export class LibrosResolver {
  constructor(private readonly librosService: LibrosService) {}

  @Query(() => [Libro], { name: 'libros' })
  findAll(): Libro[] {
    return this.librosService.findAll();
  }

  @Query(() => Libro, { name: 'libro', nullable: true })
  findOne(@Args('id', { type: () => ID }) id: string): Libro {
    return this.librosService.findOneById(id);
  }

  @Mutation(() => Libro)
  agregarLibro(
    @Args('titulo') titulo: string,
    @Args('autor') autor: string,
  ): Libro {
    return this.librosService.create(titulo, autor);
  }
}