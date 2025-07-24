import { Injectable } from '@nestjs/common';
import { Libro } from './models/libro.model';

@Injectable()
export class LibrosService {
  private readonly libros: Libro[] = [
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

  findAll(): Libro[] {
    return this.libros;
  }

  findOneById(id: string): Libro {
    return this.libros.find(libro => libro.id === id);
  }

  create(titulo: string, autor: string): Libro {
    const nuevoLibro: Libro = {
      id: String(this.libros.length + 1),
      titulo,
      autor,
    };
    this.libros.push(nuevoLibro);
    return nuevoLibro;
  }
}