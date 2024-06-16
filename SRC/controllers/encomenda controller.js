"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncomendaControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const encomenda_1 = require("../models/encomenda");
const repositories_1 = require("../repositories");
let EncomendaControllerController = class EncomendaControllerController {
    constructor(EncomendaRepository) {
        this.EncomendaRepository = EncomendaRepository;
    }
    async create(Encomenda) {
        return this.EncomendaRepository.create(Encomenda);
    }
    async count(where) {
        return this.EncomendaRepository.count(where);
    }
    async find(filter) {
        return this.EncomendaRepository.find(filter);
    }
    async updateAll(Encomenda, where) {
        return this.EncomendaRepository.updateAll(Encomenda, where);
    }
    async findById(id, filter) {
        return this.EncomendaRepository.findById(id, filter);
    }
    async updateById(id, Encomenda) {
        await this.EncomendaRepository.updateById(id, Encomenda);
    }
    async replaceById(id, Encomenda) {
        await this.EncomendaRepository.replaceById(id, Encomenda);
    }
    async deleteById(id) {
        await this.EncomendaRepository.deleteById(id);
    }
};
exports.EncomendaControllerController = EncomendaControllerController;
tslib_1.__decorate([
    (0, rest_1.post)('/Encomenda'),
    (0, rest_1.response)(200, {
        description: 'Encomenda model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(encomenda_1.Encomenda) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(encomenda_1.Encomenda, {
                    title: 'NewEncomenda',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaControllerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Encomenda/count'),
    (0, rest_1.response)(200, {
        description: 'Encomenda model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(encomenda_1.Encomenda)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaControllerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Encomenda'),
    (0, rest_1.response)(200, {
        description: 'Array of Encomenda model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(encomenda_1.Encomenda, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(encomenda_1.Encomenda)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaControllerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/Encomenda'),
    (0, rest_1.response)(200, {
        description: 'Encomenda PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(encomenda_1.Encomenda, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(encomenda_1.Encomenda)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [encomenda_1.Encomenda, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Encomenda/{id}'),
    (0, rest_1.response)(200, {
        description: 'Encomenda model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(encomenda_1.Encomenda, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(encomenda_1.Encomenda, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaControllerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/Encomenda/{id}'),
    (0, rest_1.response)(204, {
        description: 'Encomenda PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(encomenda_1.Encomenda, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, encomenda_1.Encomenda]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/Encomenda/{id}'),
    (0, rest_1.response)(204, {
        description: 'Encomenda PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, encomenda_1.Encomenda]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/Encomenda/{id}'),
    (0, rest_1.response)(204, {
        description: 'Encomenda DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomendaControllerController.prototype, "deleteById", null);
exports.EncomendaControllerController = EncomendaControllerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EncomendaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EncomendaRepository])
], EncomendaControllerController);
//# sourceMappingURL=encomenda%20controller.js.map