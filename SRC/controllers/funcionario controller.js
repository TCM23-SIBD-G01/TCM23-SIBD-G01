"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const funcionario_1 = require("../models/funcionario");
const repositories_1 = require("../repositories");
let FuncionarioControllerController = class FuncionarioControllerController {
    constructor(FuncionarioRepository) {
        this.FuncionarioRepository = FuncionarioRepository;
    }
    async create(Funcionario) {
        return this.FuncionarioRepository.create(Funcionario);
    }
    async count(where) {
        return this.FuncionarioRepository.count(where);
    }
    async find(filter) {
        return this.FuncionarioRepository.find(filter);
    }
    async updateAll(Funcionario, where) {
        return this.FuncionarioRepository.updateAll(Funcionario, where);
    }
    async findById(id, filter) {
        return this.FuncionarioRepository.findById(id, filter);
    }
    async updateById(id, Funcionario) {
        await this.FuncionarioRepository.updateById(id, Funcionario);
    }
    async replaceById(id, Funcionario) {
        await this.FuncionarioRepository.replaceById(id, Funcionario);
    }
    async deleteById(id) {
        await this.FuncionarioRepository.deleteById(id);
    }
};
exports.FuncionarioControllerController = FuncionarioControllerController;
tslib_1.__decorate([
    (0, rest_1.post)('/Funcionario'),
    (0, rest_1.response)(200, {
        description: 'Funcionario model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(funcionario_1.Funcionario) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(funcionario_1.Funcionario, {
                    title: 'NewFuncionario',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FuncionarioControllerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Funcionario/count'),
    (0, rest_1.response)(200, {
        description: 'Funcionario model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(funcionario_1.Funcionario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FuncionarioControllerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Funcionario'),
    (0, rest_1.response)(200, {
        description: 'Array of Funcionario model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(funcionario_1.Funcionario, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(funcionario_1.Funcionario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FuncionarioControllerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/Funcionario'),
    (0, rest_1.response)(200, {
        description: 'Funcionario PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(funcionario_1.Funcionario, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(funcionario_1.Funcionario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [funcionario_1.Funcionario, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FuncionarioControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Funcionario/{id}'),
    (0, rest_1.response)(200, {
        description: 'Funcionario model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(funcionario_1.Funcionario, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(funcionario_1.Funcionario, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FuncionarioControllerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/Funcionario/{id}'),
    (0, rest_1.response)(204, {
        description: 'Funcionario PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(funcionario_1.Funcionario, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, funcionario_1.Funcionario]),
    tslib_1.__metadata("design:returntype", Promise)
], FuncionarioControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/Funcionario/{id}'),
    (0, rest_1.response)(204, {
        description: 'Funcionario PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, funcionario_1.Funcionario]),
    tslib_1.__metadata("design:returntype", Promise)
], FuncionarioControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/Funcionario/{id}'),
    (0, rest_1.response)(204, {
        description: 'Funcionario DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], FuncionarioControllerController.prototype, "deleteById", null);
exports.FuncionarioControllerController = FuncionarioControllerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.FuncionarioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.FuncionarioRepository])
], FuncionarioControllerController);
//# sourceMappingURL=funcionario%20controller.js.map