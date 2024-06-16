"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const stock_1 = require("../models/stock");
const repositories_1 = require("../repositories");
let StockControllerController = class StockControllerController {
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
exports.StockControllerController = StockControllerController;
tslib_1.__decorate([
    (0, rest_1.post)('/cliente'),
    (0, rest_1.response)(200, {
        description: 'Stock model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(stock_1.Stock) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(stock_1.Stock, {
                    title: 'NewStock',
                    exclude: ['codigoBarras'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StockControllerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cliente/count'),
    (0, rest_1.response)(200, {
        description: 'Stock model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(stock_1.Stock)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StockControllerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cliente'),
    (0, rest_1.response)(200, {
        description: 'Array of Stock model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(stock_1.Stock, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(stock_1.Stock)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StockControllerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cliente'),
    (0, rest_1.response)(200, {
        description: 'Stock PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(stock_1.Stock, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(stock_1.Stock)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [stock_1.Stock, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StockControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cliente/{id}'),
    (0, rest_1.response)(200, {
        description: 'Stock model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(stock_1.Stock, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(stock_1.Stock, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StockControllerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cliente/{id}'),
    (0, rest_1.response)(204, {
        description: 'Stock PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(stock_1.Stock, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, stock_1.Stock]),
    tslib_1.__metadata("design:returntype", Promise)
], StockControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/cliente/{id}'),
    (0, rest_1.response)(204, {
        description: 'Stock PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, stock_1.Stock]),
    tslib_1.__metadata("design:returntype", Promise)
], StockControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/cliente/{id}'),
    (0, rest_1.response)(204, {
        description: 'Stock DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], StockControllerController.prototype, "deleteById", null);
exports.StockControllerController = StockControllerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.StockRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.StockRepository])
], StockControllerController);
//# sourceMappingURL=stock%20controller.js.map