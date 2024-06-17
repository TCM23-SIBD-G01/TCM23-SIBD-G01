"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FornecedorController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let FornecedorController = class FornecedorController {
    constructor(fornecedorRepository) {
        this.fornecedorRepository = fornecedorRepository;
    }
    async create(fornecedor) {
        return this.fornecedorRepository.create(fornecedor);
    }
    async count(where) {
        return this.fornecedorRepository.count(where);
    }
    async find(filter) {
        return this.fornecedorRepository.find(filter);
    }
    async updateAll(fornecedor, where) {
        return this.fornecedorRepository.updateAll(fornecedor, where);
    }
    async findById(id, filter) {
        return this.fornecedorRepository.findById(id, filter);
    }
    async updateById(id, fornecedor) {
        await this.fornecedorRepository.updateById(id, fornecedor);
    }
    async replaceById(id, fornecedor) {
        await this.fornecedorRepository.replaceById(id, fornecedor);
    }
    async deleteById(id) {
        await this.fornecedorRepository.deleteById(id);
    }
};
exports.FornecedorController = FornecedorController;
tslib_1.__decorate([
    (0, rest_1.post)('/fornecedores'),
    (0, rest_1.response)(200, {
        description: 'Fornecedor model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Fornecedor) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Fornecedor, {
                    title: 'NewFornecedor',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Fornecedor]),
    tslib_1.__metadata("design:returntype", Promise)
], FornecedorController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/fornecedores/count'),
    (0, rest_1.response)(200, {
        description: 'Fornecedor model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Fornecedor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FornecedorController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/fornecedores'),
    (0, rest_1.response)(200, {
        description: 'Array of Fornecedor model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Fornecedor, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Fornecedor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FornecedorController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/fornecedores'),
    (0, rest_1.response)(200, {
        description: 'Fornecedor PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Fornecedor, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Fornecedor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Fornecedor, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FornecedorController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/fornecedores/{id}'),
    (0, rest_1.response)(200, {
        description: 'Fornecedor model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Fornecedor, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Fornecedor, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FornecedorController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/fornecedores/{id}'),
    (0, rest_1.response)(204, {
        description: 'Fornecedor PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Fornecedor, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Fornecedor]),
    tslib_1.__metadata("design:returntype", Promise)
], FornecedorController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/fornecedores/{id}'),
    (0, rest_1.response)(204, {
        description: 'Fornecedor PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Fornecedor]),
    tslib_1.__metadata("design:returntype", Promise)
], FornecedorController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/fornecedores/{id}'),
    (0, rest_1.response)(204, {
        description: 'Fornecedor DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], FornecedorController.prototype, "deleteById", null);
exports.FornecedorController = FornecedorController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.FornecedorRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.FornecedorRepository])
], FornecedorController);
//# sourceMappingURL=fornecedor.controller.js.map