"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompraControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const compra_1 = require("../models/compra");
const repositories_1 = require("../repositories");
let CompraControllerController = class CompraControllerController {
    constructor(CompraRepository) {
        this.CompraRepository = CompraRepository;
    }
    async create(Compra) {
        return this.CompraRepository.create(Compra);
    }
    async count(where) {
        return this.CompraRepository.count(where);
    }
    async find(filter) {
        return this.CompraRepository.find(filter);
    }
    async updateAll(Compra, where) {
        return this.CompraRepository.updateAll(Compra, where);
    }
    async findById(id, filter) {
        return this.CompraRepository.findById(id, filter);
    }
    async updateById(id, Compra) {
        await this.CompraRepository.updateById(id, Compra);
    }
    async replaceById(id, Compra) {
        await this.CompraRepository.replaceById(id, Compra);
    }
    async deleteById(id) {
        await this.CompraRepository.deleteById(id);
    }
};
exports.CompraControllerController = CompraControllerController;
tslib_1.__decorate([
    (0, rest_1.post)('/Compra'),
    (0, rest_1.response)(200, {
        description: 'Compra model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(compra_1.Compra) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(compra_1.Compra, {
                    title: 'NewCompra',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompraControllerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Compra/count'),
    (0, rest_1.response)(200, {
        description: 'Compra model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(compra_1.Compra)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompraControllerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Compra'),
    (0, rest_1.response)(200, {
        description: 'Array of Compra model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(compra_1.Compra, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(compra_1.Compra)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompraControllerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/Compra'),
    (0, rest_1.response)(200, {
        description: 'Compra PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(compra_1.Compra, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(compra_1.Compra)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [compra_1.Compra, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompraControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Compra/{id}'),
    (0, rest_1.response)(200, {
        description: 'Compra model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(compra_1.Compra, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(compra_1.Compra, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompraControllerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/Compra/{id}'),
    (0, rest_1.response)(204, {
        description: 'Compra PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(compra_1.Compra, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, compra_1.Compra]),
    tslib_1.__metadata("design:returntype", Promise)
], CompraControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/Compra/{id}'),
    (0, rest_1.response)(204, {
        description: 'Compra PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, compra_1.Compra]),
    tslib_1.__metadata("design:returntype", Promise)
], CompraControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/Compra/{id}'),
    (0, rest_1.response)(204, {
        description: 'Compra DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CompraControllerController.prototype, "deleteById", null);
exports.CompraControllerController = CompraControllerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CompraRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CompraRepository])
], CompraControllerController);
//# sourceMappingURL=compra%20controller.js.map