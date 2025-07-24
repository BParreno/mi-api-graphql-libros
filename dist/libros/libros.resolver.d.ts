import { LibrosService } from './libros.service';
import { Libro } from './models/libro.model';
export declare class LibrosResolver {
    private readonly librosService;
    constructor(librosService: LibrosService);
    findAll(): Libro[];
    findOne(id: string): Libro;
    agregarLibro(titulo: string, autor: string): Libro;
}
