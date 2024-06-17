"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompraController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CompraController = class CompraController {
    constructor(compraRepository) {
        this.compraRepository = compraRepository;
    }
    async create(compra) {
        return this.compraRepository.create(compra);
    }
    async count(where) {
        return this.compraRepository.count(where);
    }
    async find(filter) {
        return this.compraRepository.find(filter);
    }
    async updateAll(compra, where) {
        return this.compraRepository.updateAll(compra, where);
    }
    async findById(id, filter) {
        return this.compraRepository.findById(id, filter);
    }
    async updateById(id, compra) {
        await this.compraRepository.updateById(id, compra);
    }
    async replaceById(id, compra) {
        await this.compraRepository.replaceById(id, compra);
    }
    async deleteById(id) {
        await this.compraRepository.deleteById(id);
    }
};
exports.CompraController = CompraController;
tslib_1.__decorate([
    (0, rest_1.post)('/compras'),
    (0, rest_1.response)(200, {
        description: 'Compra model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Compra) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Compra, {
                    title: 'NewCompra',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Compra]),
    tslib_1.__metadata("design:returntype", Promise)
], CompraController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/compras/count'),
    (0, rest_1.response)(200, {
        description: 'Compra model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Compra)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompraController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/compras'),
    (0, rest_1.response)(200, {
        description: 'Array of Compra model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Compra, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Compra)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompraController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/compras'),
    (0, rest_1.response)(200, {
        description: 'Compra PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Compra, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Compra)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Compra, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompraController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/compras/{id}'),
    (0, rest_1.response)(200, {
        description: 'Compra model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Compra, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Compra, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompraController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/compras/{id}'),
    (0, rest_1.response)(204, {
        description: 'Compra PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Compra, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Compra]),
    tslib_1.__metadata("design:returntype", Promise)
], CompraController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/compras/{id}'),
    (0, rest_1.response)(204, {
        description: 'Compra PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Compra]),
    tslib_1.__metadata("design:returntype", Promise)
], CompraController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/compras/{id}'),
    (0, rest_1.response)(204, {
        description: 'Compra DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CompraController.prototype, "deleteById", null);
exports.CompraController = CompraController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CompraRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CompraRepository])
], CompraController);
//# sourceMappingURL=compra.controller.js.map