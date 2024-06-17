"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MaterialController = class MaterialController {
    constructor(materialRepository) {
        this.materialRepository = materialRepository;
    }
    async create(material) {
        return this.materialRepository.create(material);
    }
    async count(where) {
        return this.materialRepository.count(where);
    }
    async find(filter) {
        return this.materialRepository.find(filter);
    }
    async updateAll(material, where) {
        return this.materialRepository.updateAll(material, where);
    }
    async findById(id, filter) {
        return this.materialRepository.findById(id, filter);
    }
    async updateById(id, material) {
        await this.materialRepository.updateById(id, material);
    }
    async replaceById(id, material) {
        await this.materialRepository.replaceById(id, material);
    }
    async deleteById(id) {
        await this.materialRepository.deleteById(id);
    }
};
exports.MaterialController = MaterialController;
tslib_1.__decorate([
    (0, rest_1.post)('/materiais'),
    (0, rest_1.response)(200, {
        description: 'Material model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Material) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Material, {
                    title: 'NewMaterial',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Material]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/materiais/count'),
    (0, rest_1.response)(200, {
        description: 'Material model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Material)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/materiais'),
    (0, rest_1.response)(200, {
        description: 'Array of Material model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Material, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Material)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/materiais'),
    (0, rest_1.response)(200, {
        description: 'Material PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Material, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Material)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Material, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/materiais/{id}'),
    (0, rest_1.response)(200, {
        description: 'Material model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Material, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Material, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/materiais/{id}'),
    (0, rest_1.response)(204, {
        description: 'Material PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Material, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Material]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/materiais/{id}'),
    (0, rest_1.response)(204, {
        description: 'Material PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Material]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/materiais/{id}'),
    (0, rest_1.response)(204, {
        description: 'Material DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialController.prototype, "deleteById", null);
exports.MaterialController = MaterialController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.MaterialRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MaterialRepository])
], MaterialController);
//# sourceMappingURL=material.controller.js.map