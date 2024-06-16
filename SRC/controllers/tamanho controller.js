"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TamanhoControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const tamanho_1 = require("../models/tamanho");
const repositories_1 = require("../repositories");
let TamanhoControllerController = class TamanhoControllerController {
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
exports.TamanhoControllerController = TamanhoControllerController;
tslib_1.__decorate([
    (0, rest_1.post)('/tamanho'),
    (0, rest_1.response)(200, {
        description: 'Tamanho model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(tamanho_1.Tamanho) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(tamanho_1.Tamanho, {
                    title: 'NewTamanho',
                    exclude: ['codigo'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TamanhoControllerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/tamanho/count'),
    (0, rest_1.response)(200, {
        description: 'Tamanho model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(tamanho_1.Tamanho)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TamanhoControllerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/tamanho'),
    (0, rest_1.response)(200, {
        description: 'Array of Tamanho model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(tamanho_1.Tamanho, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(tamanho_1.Tamanho)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TamanhoControllerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/tamanho'),
    (0, rest_1.response)(200, {
        description: 'Tamanho PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(tamanho_1.Tamanho, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(tamanho_1.Tamanho)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [tamanho_1.Tamanho, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TamanhoControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/tamanho/{id}'),
    (0, rest_1.response)(200, {
        description: 'Tamanho model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(tamanho_1.Tamanho, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(tamanho_1.Tamanho, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TamanhoControllerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/tamanho/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tamanho PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(tamanho_1.Tamanho, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, tamanho_1.Tamanho]),
    tslib_1.__metadata("design:returntype", Promise)
], TamanhoControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/tamanho/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tamanho PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, tamanho_1.Tamanho]),
    tslib_1.__metadata("design:returntype", Promise)
], TamanhoControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/tamanho/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tamanho DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], TamanhoControllerController.prototype, "deleteById", null);
exports.TamanhoControllerController = TamanhoControllerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TamanhoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TamanhoRepository])
], TamanhoControllerController);
//# sourceMappingURL=tamanho%20controller.js.map