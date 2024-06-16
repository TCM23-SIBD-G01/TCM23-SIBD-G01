"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const material_1 = require("../models/material");
const repositories_1 = require("../repositories");
let MaterialControllerController = class MaterialControllerController {
    constructor(MaterialRepository) {
        this.MaterialRepository = MaterialRepository;
    }
    async create(Material) {
        return this.MaterialRepository.create(Material);
    }
    async count(where) {
        return this.MaterialRepository.count(where);
    }
    async find(filter) {
        return this.MaterialRepository.find(filter);
    }
    async updateAll(Material, where) {
        return this.MaterialRepository.updateAll(Material, where);
    }
    async findById(id, filter) {
        return this.MaterialRepository.findById(id, filter);
    }
    async updateById(id, Material) {
        await this.MaterialRepository.updateById(id, Material);
    }
    async replaceById(id, Material) {
        await this.MaterialRepository.replaceById(id, Material);
    }
    async deleteById(id) {
        await this.MaterialRepository.deleteById(id);
    }
};
exports.MaterialControllerController = MaterialControllerController;
tslib_1.__decorate([
    (0, rest_1.post)('/Material'),
    (0, rest_1.response)(200, {
        description: 'Material model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(material_1.Material) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(material_1.Material, {
                    title: 'NewMaterial',
                    exclude: ['nome'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialControllerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Material/count'),
    (0, rest_1.response)(200, {
        description: 'Material model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(material_1.Material)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialControllerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Material'),
    (0, rest_1.response)(200, {
        description: 'Array of Material model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(material_1.Material, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(material_1.Material)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialControllerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/Material'),
    (0, rest_1.response)(200, {
        description: 'Material PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(material_1.Material, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(material_1.Material)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [material_1.Material, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Material/{id}'),
    (0, rest_1.response)(200, {
        description: 'Material model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(material_1.Material, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(material_1.Material, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialControllerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/Material/{id}'),
    (0, rest_1.response)(204, {
        description: 'Material PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(material_1.Material, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, material_1.Material]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/Material/{id}'),
    (0, rest_1.response)(204, {
        description: 'Material PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, material_1.Material]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/Material/{id}'),
    (0, rest_1.response)(204, {
        description: 'Material DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], MaterialControllerController.prototype, "deleteById", null);
exports.MaterialControllerController = MaterialControllerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.MaterialRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MaterialRepository])
], MaterialControllerController);
//# sourceMappingURL=material%20controller.js.map