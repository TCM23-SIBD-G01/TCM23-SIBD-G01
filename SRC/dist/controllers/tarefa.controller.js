"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TarefaController = class TarefaController {
    constructor(tarefaRepository) {
        this.tarefaRepository = tarefaRepository;
    }
    async create(tarefa) {
        return this.tarefaRepository.create(tarefa);
    }
    async count(where) {
        return this.tarefaRepository.count(where);
    }
    async find(filter) {
        return this.tarefaRepository.find(filter);
    }
    async updateAll(tarefa, where) {
        return this.tarefaRepository.updateAll(tarefa, where);
    }
    async findById(id, filter) {
        return this.tarefaRepository.findById(id, filter);
    }
    async updateById(id, tarefa) {
        await this.tarefaRepository.updateById(id, tarefa);
    }
    async replaceById(id, tarefa) {
        await this.tarefaRepository.replaceById(id, tarefa);
    }
    async deleteById(id) {
        await this.tarefaRepository.deleteById(id);
    }
};
exports.TarefaController = TarefaController;
tslib_1.__decorate([
    (0, rest_1.post)('/tarefas'),
    (0, rest_1.response)(200, {
        description: 'Tarefa model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Tarefa) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tarefa, {
                    title: 'NewTarefa',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Tarefa]),
    tslib_1.__metadata("design:returntype", Promise)
], TarefaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/tarefas/count'),
    (0, rest_1.response)(200, {
        description: 'Tarefa model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Tarefa)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TarefaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/tarefas'),
    (0, rest_1.response)(200, {
        description: 'Array of Tarefa model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Tarefa, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Tarefa)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TarefaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/tarefas'),
    (0, rest_1.response)(200, {
        description: 'Tarefa PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tarefa, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Tarefa)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Tarefa, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TarefaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/tarefas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Tarefa model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tarefa, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Tarefa, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TarefaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/tarefas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tarefa PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tarefa, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Tarefa]),
    tslib_1.__metadata("design:returntype", Promise)
], TarefaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/tarefas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tarefa PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Tarefa]),
    tslib_1.__metadata("design:returntype", Promise)
], TarefaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/tarefas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tarefa DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], TarefaController.prototype, "deleteById", null);
exports.TarefaController = TarefaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TarefaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TarefaRepository])
], TarefaController);
//# sourceMappingURL=tarefa.controller.js.map