"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibrosService = void 0;
const common_1 = require("@nestjs/common");
let LibrosService = class LibrosService {
    constructor() {
        this.libros = [
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
    }
    findAll() {
        return this.libros;
    }
    findOneById(id) {
        return this.libros.find(libro => libro.id === id);
    }
    create(titulo, autor) {
        const nuevoLibro = {
            id: String(this.libros.length + 1),
            titulo,
            autor,
        };
        this.libros.push(nuevoLibro);
        return nuevoLibro;
    }
};
exports.LibrosService = LibrosService;
exports.LibrosService = LibrosService = __decorate([
    (0, common_1.Injectable)()
], LibrosService);
//# sourceMappingURL=libros.service.js.map