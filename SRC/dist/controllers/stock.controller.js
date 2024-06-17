"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let StockController = class StockController {
    constructor(stockRepository) {
        this.stockRepository = stockRepository;
    }
    async create(stock) {
        return this.stockRepository.create(stock);
    }
    async count(where) {
        return this.stockRepository.count(where);
    }
    async find(filter) {
        return this.stockRepository.find(filter);
    }
    async updateAll(stock, where) {
        return this.stockRepository.updateAll(stock, where);
    }
    async findById(id, filter) {
        return this.stockRepository.findById(id, filter);
    }
    async updateById(id, stock) {
        await this.stockRepository.updateById(id, stock);
    }
    async replaceById(id, stock) {
        await this.stockRepository.replaceById(id, stock);
    }
    async deleteById(id) {
        await this.stockRepository.deleteById(id);
    }
};
exports.StockController = StockController;
tslib_1.__decorate([
    (0, rest_1.post)('/stocks'),
    (0, rest_1.response)(200, {
        description: 'Stock model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Stock) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Stock, {
                    title: 'NewStock',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Stock]),
    tslib_1.__metadata("design:returntype", Promise)
], StockController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/stocks/count'),
    (0, rest_1.response)(200, {
        description: 'Stock model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Stock)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StockController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/stocks'),
    (0, rest_1.response)(200, {
        description: 'Array of Stock model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Stock, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Stock)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StockController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/stocks'),
    (0, rest_1.response)(200, {
        description: 'Stock PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Stock, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Stock)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Stock, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StockController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/stocks/{id}'),
    (0, rest_1.response)(200, {
        description: 'Stock model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Stock, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Stock, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StockController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/stocks/{id}'),
    (0, rest_1.response)(204, {
        description: 'Stock PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Stock, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Stock]),
    tslib_1.__metadata("design:returntype", Promise)
], StockController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/stocks/{id}'),
    (0, rest_1.response)(204, {
        description: 'Stock PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Stock]),
    tslib_1.__metadata("design:returntype", Promise)
], StockController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/stocks/{id}'),
    (0, rest_1.response)(204, {
        description: 'Stock DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], StockController.prototype, "deleteById", null);
exports.StockController = StockController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.StockRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.StockRepository])
], StockController);
//# sourceMappingURL=stock.controller.js.map