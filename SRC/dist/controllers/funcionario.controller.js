"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let FuncionarioController = class FuncionarioController {
    constructor(funcionarioRepository) {
        this.funcionarioRepository = funcionarioRepository;
    }
    async create(funcionario) {
        return this.funcionarioRepository.create(funcionario);
    }
    async count(where) {
        return this.funcionarioRepository.count(where);
    }
    async find(filter) {
        return this.funcionarioRepository.find(filter);
    }
    async updateAll(funcionario, where) {
        return this.funcionarioRepository.updateAll(funcionario, where);
    }
    async findById(id, filter) {
        return this.funcionarioRepository.findById(id, filter);
    }
    async updateById(id, funcionario) {
        await this.funcionarioRepository.updateById(id, funcionario);
    }
    async replaceById(id, funcionario) {
        await this.funcionarioRepository.replaceById(id, funcionario);
    }
    async deleteById(id) {
        await this.funcionarioRepository.deleteById(id);
    }
};
exports.FuncionarioController = FuncionarioController;
tslib_1.__decorate([
    (0, rest_1.post)('/funcionarios'),
    (0, rest_1.response)(200, {
        description: 'Funcionario model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Funcionario) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Funcionario, {
                    title: 'NewFuncionario',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Funcionario]),
    tslib_1.__metadata("design:returntype", Promise)
], FuncionarioController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/funcionarios/count'),
    (0, rest_1.response)(200, {
        description: 'Funcionario model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Funcionario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FuncionarioController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/funcionarios'),
    (0, rest_1.response)(200, {
        description: 'Array of Funcionario model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Funcionario, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Funcionario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FuncionarioController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/funcionarios'),
    (0, rest_1.response)(200, {
        description: 'Funcionario PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Funcionario, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Funcionario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Funcionario, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FuncionarioController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/funcionarios/{id}'),
    (0, rest_1.response)(200, {
        description: 'Funcionario model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Funcionario, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Funcionario, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FuncionarioController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/funcionarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Funcionario PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Funcionario, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Funcionario]),
    tslib_1.__metadata("design:returntype", Promise)
], FuncionarioController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/funcionarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Funcionario PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Funcionario]),
    tslib_1.__metadata("design:returntype", Promise)
], FuncionarioController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/funcionarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Funcionario DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], FuncionarioController.prototype, "deleteById", null);
exports.FuncionarioController = FuncionarioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.FuncionarioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.FuncionarioRepository])
], FuncionarioController);
//# sourceMappingURL=funcionario.controller.js.map