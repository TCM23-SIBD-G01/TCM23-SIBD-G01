"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefaControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const tarefa_1 = require("../models/tarefa");
const repositories_1 = require("../repositories");
let TarefaControllerController = class TarefaControllerController {
    constructor(TarefaRepository) {
        this.TarefaRepository = TarefaRepository;
    }
    async create(Tarefa) {
        return this.TarefaRepository.create(Tarefa);
    }
    async count(where) {
        return this.TarefaRepository.count(where);
    }
    async find(filter) {
        return this.TarefaRepository.find(filter);
    }
    async updateAll(Tarefa, where) {
        return this.TarefaRepository.updateAll(Tarefa, where);
    }
    async findById(id, filter) {
        return this.TarefaRepository.findById(id, filter);
    }
    async updateById(id, Tarefa) {
        await this.TarefaRepository.updateById(id, Tarefa);
    }
    async replaceById(id, Tarefa) {
        await this.TarefaRepository.replaceById(id, Tarefa);
    }
    async deleteById(id) {
        await this.TarefaRepository.deleteById(id);
    }
};
exports.TarefaControllerController = TarefaControllerController;
tslib_1.__decorate([
    (0, rest_1.post)('/Tarefa'),
    (0, rest_1.response)(200, {
        description: 'Tarefa model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(tarefa_1.Tarefa) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(tarefa_1.Tarefa, {
                    title: 'NewTarefa',
                    exclude: ['idFuncionario'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TarefaControllerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Tarefa/count'),
    (0, rest_1.response)(200, {
        description: 'Tarefa model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(tarefa_1.Tarefa)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TarefaControllerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Tarefa'),
    (0, rest_1.response)(200, {
        description: 'Array of Tarefa model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(tarefa_1.Tarefa, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(tarefa_1.Tarefa)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TarefaControllerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/Tarefa'),
    (0, rest_1.response)(200, {
        description: 'Tarefa PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(tarefa_1.Tarefa, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(tarefa_1.Tarefa)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [tarefa_1.Tarefa, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TarefaControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Tarefa/{id}'),
    (0, rest_1.response)(200, {
        description: 'Tarefa model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(tarefa_1.Tarefa, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(tarefa_1.Tarefa, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TarefaControllerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/Tarefa/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tarefa PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(tarefa_1.Tarefa, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, tarefa_1.Tarefa]),
    tslib_1.__metadata("design:returntype", Promise)
], TarefaControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/Tarefa/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tarefa PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, tarefa_1.Tarefa]),
    tslib_1.__metadata("design:returntype", Promise)
], TarefaControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/Tarefa/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tarefa DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], TarefaControllerController.prototype, "deleteById", null);
exports.TarefaControllerController = TarefaControllerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TarefaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TarefaRepository])
], TarefaControllerController);
//# sourceMappingURL=tarefa%20controller.js.map