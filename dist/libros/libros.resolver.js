"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibrosResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const libros_service_1 = require("./libros.service");
const libro_model_1 = require("./models/libro.model");
let LibrosResolver = class LibrosResolver {
    constructor(librosService) {
        this.librosService = librosService;
    }
    findAll() {
        return this.librosService.findAll();
    }
    findOne(id) {
        return this.librosService.findOneById(id);
    }
    agregarLibro(titulo, autor) {
        return this.librosService.create(titulo, autor);
    }
};
exports.LibrosResolver = LibrosResolver;
__decorate([
    (0, graphql_1.Query)(() => [libro_model_1.Libro], { name: 'libros' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], LibrosResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => libro_model_1.Libro, { name: 'libro', nullable: true }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", libro_model_1.Libro)
], LibrosResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => libro_model_1.Libro),
    __param(0, (0, graphql_1.Args)('titulo')),
    __param(1, (0, graphql_1.Args)('autor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", libro_model_1.Libro)
], LibrosResolver.prototype, "agregarLibro", null);
exports.LibrosResolver = LibrosResolver = __decorate([
    (0, graphql_1.Resolver)(() => libro_model_1.Libro),
    __metadata("design:paramtypes", [libros_service_1.LibrosService])
], LibrosResolver);
//# sourceMappingURL=libros.resolver.js.map