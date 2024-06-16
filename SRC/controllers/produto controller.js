"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const produto_1 = require("../models/produto");
const repositories_1 = require("../repositories");
let ProdutoControllerController = class ProdutoControllerController {
    constructor(ProdutoRepository) {
        this.ProdutoRepository = ProdutoRepository;
    }
    async create(Produto) {
        return this.ProdutoRepository.create(Produto);
    }
    async count(where) {
        return this.ProdutoRepository.count(where);
    }
    async find(filter) {
        return this.ProdutoRepository.find(filter);
    }
    async updateAll(Produto, where) {
        return this.ProdutoRepository.updateAll(Produto, where);
    }
    async findById(id, filter) {
        return this.ProdutoRepository.findById(id, filter);
    }
    async updateById(id, Produto) {
        await this.ProdutoRepository.updateById(id, Produto);
    }
    async replaceById(id, Produto) {
        await this.ProdutoRepository.replaceById(id, Produto);
    }
    async deleteById(id) {
        await this.ProdutoRepository.deleteById(id);
    }
};
exports.ProdutoControllerController = ProdutoControllerController;
tslib_1.__decorate([
    (0, rest_1.post)('/Produto'),
    (0, rest_1.response)(200, {
        description: 'Produto model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(produto_1.Produto) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(produto_1.Produto, {
                    title: 'NewProduto',
                    exclude: ['codigoBarras'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProdutoControllerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Produto/count'),
    (0, rest_1.response)(200, {
        description: 'Produto model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(produto_1.Produto)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProdutoControllerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Produto'),
    (0, rest_1.response)(200, {
        description: 'Array of Produto model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(produto_1.Produto, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(produto_1.Produto)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProdutoControllerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/Produto'),
    (0, rest_1.response)(200, {
        description: 'Produto PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(produto_1.Produto, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(produto_1.Produto)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [produto_1.Produto, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProdutoControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/Produto/{id}'),
    (0, rest_1.response)(200, {
        description: 'Produto model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(produto_1.Produto, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(produto_1.Produto, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProdutoControllerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/Produto/{id}'),
    (0, rest_1.response)(204, {
        description: 'Produto PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(produto_1.Produto, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, produto_1.Produto]),
    tslib_1.__metadata("design:returntype", Promise)
], ProdutoControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/Produto/{id}'),
    (0, rest_1.response)(204, {
        description: 'Produto PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, produto_1.Produto]),
    tslib_1.__metadata("design:returntype", Promise)
], ProdutoControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/Produto/{id}'),
    (0, rest_1.response)(204, {
        description: 'Produto DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ProdutoControllerController.prototype, "deleteById", null);
exports.ProdutoControllerController = ProdutoControllerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ProdutoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProdutoRepository])
], ProdutoControllerController);
//# sourceMappingURL=produto%20controller.js.map