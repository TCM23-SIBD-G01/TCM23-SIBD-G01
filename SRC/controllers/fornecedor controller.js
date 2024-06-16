"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FornecedorControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const fornecedor_1 = require("../models/fornecedor");
const repositories_1 = require("../repositories");
let FornecedorControllerController = class FornecedorControllerController {
    constructor(FornecedorRepository) {
        this.FornecedorRepository = FornecedorRepository;
    }
    async create(Fornecedor) {
        return this.FornecedorRepository.create(Fornecedor);
    }
    async count(where) {
        return this.FornecedorRepository.count(where);
    }
    async find(filter) {
        return this.FornecedorRepository.find(filter);
    }
    async updateAll(Fornecedor, where) {
        return this.FornecedorRepository.updateAll(Fornecedor, where);
    }
    async findById(id, filter) {
        return this.FornecedorRepository.findById(id, filter);
    }
    async updateById(id, Fornecedor) {
        await this.FornecedorRepository.updateById(id, Fornecedor);
    }
    async replaceById(id, Fornecedor) {
        await this.FornecedorRepository.replaceById(id, Fornecedor);
    }
    async deleteById(id) {
        await this.FornecedorRepository.deleteById(id);
    }
};
exports.FornecedorControllerController = FornecedorControllerController;
tslib_1.__decorate([
    (0, rest_1.post)('/Fornecedor'),
    (0, rest_1.response)(200, {
        description: 'Fornecedor model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(fornecedor_1.Fornecedor) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(fornecedor_1.Fornecedor, {
                    title: 'NewFornecedor',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FornecedorControllerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Fornecedor/count'),
    (0, rest_1.response)(200, {
        description: 'Fornecedor model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(fornecedor_1.Fornecedor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FornecedorControllerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Fornecedor'),
    (0, rest_1.response)(200, {
        description: 'Array of Fornecedor model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(fornecedor_1.Fornecedor, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(fornecedor_1.Fornecedor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FornecedorControllerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/Fornecedor'),
    (0, rest_1.response)(200, {
        description: 'Fornecedor PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(fornecedor_1.Fornecedor, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(fornecedor_1.Fornecedor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [fornecedor_1.Fornecedor, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FornecedorControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Fornecedor/{id}'),
    (0, rest_1.response)(200, {
        description: 'Fornecedor model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(fornecedor_1.Fornecedor, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(fornecedor_1.Fornecedor, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FornecedorControllerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/Fornecedor/{id}'),
    (0, rest_1.response)(204, {
        description: 'Fornecedor PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(fornecedor_1.Fornecedor, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, fornecedor_1.Fornecedor]),
    tslib_1.__metadata("design:returntype", Promise)
], FornecedorControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/Fornecedor/{id}'),
    (0, rest_1.response)(204, {
        description: 'Fornecedor PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, fornecedor_1.Fornecedor]),
    tslib_1.__metadata("design:returntype", Promise)
], FornecedorControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/Fornecedor/{id}'),
    (0, rest_1.response)(204, {
        description: 'Fornecedor DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], FornecedorControllerController.prototype, "deleteById", null);
exports.FornecedorControllerController = FornecedorControllerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.FornecedorRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.FornecedorRepository])
], FornecedorControllerController);
//# sourceMappingURL=fornecedor%20controller.js.map