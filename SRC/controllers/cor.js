"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const cor_1 = require("../models/cor");
const repositories_1 = require("../repositories");
let CorControllerController = class CorControllerController {
    constructor(CorRepository) {
        this.CorRepository = CorRepository;
    }
    async create(Cor) {
        return this.CorRepository.create(Cor);
    }
    async count(where) {
        return this.CorRepository.count(where);
    }
    async find(filter) {
        return this.CorRepository.find(filter);
    }
    async updateAll(Cor, where) {
        return this.CorRepository.updateAll(Cor, where);
    }
    async findById(id, filter) {
        return this.CorRepository.findById(id, filter);
    }
    async updateById(id, Cor) {
        await this.CorRepository.updateById(id, Cor);
    }
    async replaceById(id, Cor) {
        await this.CorRepository.replaceById(id, Cor);
    }
    async deleteById(id) {
        await this.CorRepository.deleteById(id);
    }
};
exports.CorControllerController = CorControllerController;
tslib_1.__decorate([
    (0, rest_1.post)('/Cor'),
    (0, rest_1.response)(200, {
        description: 'Cor model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(cor_1.Cor) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(cor_1.Cor, {
                    title: 'NewCor',
                    exclude: ['codigoHexadecimal'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CorControllerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Cor/count'),
    (0, rest_1.response)(200, {
        description: 'Cor model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(cor_1.Cor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CorControllerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Cor'),
    (0, rest_1.response)(200, {
        description: 'Array of Cor model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(cor_1.Cor, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(cor_1.Cor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CorControllerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/Cor'),
    (0, rest_1.response)(200, {
        description: 'Cor PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(cor_1.Cor, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(cor_1.Cor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [cor_1.Cor, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CorControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Cor/{id}'),
    (0, rest_1.response)(200, {
        description: 'Cor model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(cor_1.Cor, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(cor_1.Cor, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CorControllerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/Cor/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cor PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(cor_1.Cor, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, cor_1.Cor]),
    tslib_1.__metadata("design:returntype", Promise)
], CorControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/Cor/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cor PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, cor_1.Cor]),
    tslib_1.__metadata("design:returntype", Promise)
], CorControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/Cor/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cor DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CorControllerController.prototype, "deleteById", null);
exports.CorControllerController = CorControllerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CorRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CorRepository])
], CorControllerController);
//# sourceMappingURL=cor.js.map