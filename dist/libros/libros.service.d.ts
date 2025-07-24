import { Libro } from './models/libro.model';
export declare class LibrosService {
    private readonly libros;
    findAll(): Libro[];
    findOneById(id: string): Libro;
    create(titulo: string, autor: string): Libro;
}
