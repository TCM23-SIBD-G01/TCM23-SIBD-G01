"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LojaControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const loja_1 = require("../models/loja");
const repositories_1 = require("../repositories");
let LojaControllerController = class LojaControllerController {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    async create(cliente) {
        return this.clienteRepository.create(cliente);
    }
    async count(where) {
        return this.clienteRepository.count(where);
    }
    async find(filter) {
        return this.clienteRepository.find(filter);
    }
    async updateAll(cliente, where) {
        return this.clienteRepository.updateAll(cliente, where);
    }
    async findById(id, filter) {
        return this.clienteRepository.findById(id, filter);
    }
    async updateById(id, cliente) {
        await this.clienteRepository.updateById(id, cliente);
    }
    async replaceById(id, cliente) {
        await this.clienteRepository.replaceById(id, cliente);
    }
    async deleteById(id) {
        await this.clienteRepository.deleteById(id);
    }
};
exports.LojaControllerController = LojaControllerController;
tslib_1.__decorate([
    (0, rest_1.post)('/cliente'),
    (0, rest_1.response)(200, {
        description: 'Loja model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(loja_1.Loja) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(loja_1.Loja, {
                    title: 'NewLoja',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LojaControllerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cliente/count'),
    (0, rest_1.response)(200, {
        description: 'Loja model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(loja_1.Loja)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LojaControllerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cliente'),
    (0, rest_1.response)(200, {
        description: 'Array of Loja model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(loja_1.Loja, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(loja_1.Loja)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LojaControllerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cliente'),
    (0, rest_1.response)(200, {
        description: 'Loja PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(loja_1.Loja, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(loja_1.Loja)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [loja_1.Loja, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LojaControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cliente/{id}'),
    (0, rest_1.response)(200, {
        description: 'Loja model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(loja_1.Loja, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(loja_1.Loja, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LojaControllerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cliente/{id}'),
    (0, rest_1.response)(204, {
        description: 'Loja PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(loja_1.Loja, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, loja_1.Loja]),
    tslib_1.__metadata("design:returntype", Promise)
], LojaControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/cliente/{id}'),
    (0, rest_1.response)(204, {
        description: 'Loja PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, loja_1.Loja]),
    tslib_1.__metadata("design:returntype", Promise)
], LojaControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/cliente/{id}'),
    (0, rest_1.response)(204, {
        description: 'Loja DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], LojaControllerController.prototype, "deleteById", null);
exports.LojaControllerController = LojaControllerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.LojaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.LojaRepository])
], LojaControllerController);
//# sourceMappingURL=loja%20controller.js.map