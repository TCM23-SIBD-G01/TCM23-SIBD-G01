"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CorController = class CorController {
    constructor(corRepository) {
        this.corRepository = corRepository;
    }
    async create(cor) {
        return this.corRepository.create(cor);
    }
    async count(where) {
        return this.corRepository.count(where);
    }
    async find(filter) {
        return this.corRepository.find(filter);
    }
    async updateAll(cor, where) {
        return this.corRepository.updateAll(cor, where);
    }
    async findById(id, filter) {
        return this.corRepository.findById(id, filter);
    }
    async updateById(id, cor) {
        await this.corRepository.updateById(id, cor);
    }
    async replaceById(id, cor) {
        await this.corRepository.replaceById(id, cor);
    }
    async deleteById(id) {
        await this.corRepository.deleteById(id);
    }
};
exports.CorController = CorController;
tslib_1.__decorate([
    (0, rest_1.post)('/cores'),
    (0, rest_1.response)(200, {
        description: 'Cor model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Cor) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cor, {
                    title: 'NewCor',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Cor]),
    tslib_1.__metadata("design:returntype", Promise)
], CorController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cores/count'),
    (0, rest_1.response)(200, {
        description: 'Cor model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Cor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CorController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cores'),
    (0, rest_1.response)(200, {
        description: 'Array of Cor model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Cor, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Cor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CorController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cores'),
    (0, rest_1.response)(200, {
        description: 'Cor PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cor, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Cor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Cor, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CorController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cores/{id}'),
    (0, rest_1.response)(200, {
        description: 'Cor model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cor, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Cor, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CorController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cores/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cor PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cor, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Cor]),
    tslib_1.__metadata("design:returntype", Promise)
], CorController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/cores/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cor PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Cor]),
    tslib_1.__metadata("design:returntype", Promise)
], CorController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/cores/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cor DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CorController.prototype, "deleteById", null);
exports.CorController = CorController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CorRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CorRepository])
], CorController);
//# sourceMappingURL=cor.controller.js.map