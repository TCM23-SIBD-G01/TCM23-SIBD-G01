"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TamanhoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TamanhoController = class TamanhoController {
    constructor(tamanhoRepository) {
        this.tamanhoRepository = tamanhoRepository;
    }
    async create(tamanho) {
        return this.tamanhoRepository.create(tamanho);
    }
    async count(where) {
        return this.tamanhoRepository.count(where);
    }
    async find(filter) {
        return this.tamanhoRepository.find(filter);
    }
    async updateAll(tamanho, where) {
        return this.tamanhoRepository.updateAll(tamanho, where);
    }
    async findById(id, filter) {
        return this.tamanhoRepository.findById(id, filter);
    }
    async updateById(id, tamanho) {
        await this.tamanhoRepository.updateById(id, tamanho);
    }
    async replaceById(id, tamanho) {
        await this.tamanhoRepository.replaceById(id, tamanho);
    }
    async deleteById(id) {
        await this.tamanhoRepository.deleteById(id);
    }
};
exports.TamanhoController = TamanhoController;
tslib_1.__decorate([
    (0, rest_1.post)('/tamanhos'),
    (0, rest_1.response)(200, {
        description: 'Tamanho model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Tamanho) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tamanho, {
                    title: 'NewTamanho',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Tamanho]),
    tslib_1.__metadata("design:returntype", Promise)
], TamanhoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/tamanhos/count'),
    (0, rest_1.response)(200, {
        description: 'Tamanho model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Tamanho)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TamanhoController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/tamanhos'),
    (0, rest_1.response)(200, {
        description: 'Array of Tamanho model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Tamanho, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Tamanho)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TamanhoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/tamanhos'),
    (0, rest_1.response)(200, {
        description: 'Tamanho PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tamanho, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Tamanho)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Tamanho, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TamanhoController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/tamanhos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Tamanho model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tamanho, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Tamanho, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TamanhoController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/tamanhos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tamanho PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tamanho, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Tamanho]),
    tslib_1.__metadata("design:returntype", Promise)
], TamanhoController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/tamanhos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tamanho PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Tamanho]),
    tslib_1.__metadata("design:returntype", Promise)
], TamanhoController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/tamanhos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tamanho DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], TamanhoController.prototype, "deleteById", null);
exports.TamanhoController = TamanhoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TamanhoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TamanhoRepository])
], TamanhoController);
//# sourceMappingURL=tamanho.controller.js.map