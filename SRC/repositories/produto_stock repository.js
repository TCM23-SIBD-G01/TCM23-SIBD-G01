"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoStockRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const produto_1 = require("../models/produto");
let ProdutoStockRepository = class ProdutoStockRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, stockRepositoryGetter) {
        super(produto_1.Produto, dataSource);
        this.stockRepositoryGetter = stockRepositoryGetter;
        this.stock = this.createBelongsToAccessorFor('produto', this.stockRepositoryGetter);
        this.registerInclusionResolver('produto', this.stock.inclusionResolver);
    }
};
exports.ProdutoStockRepository = ProdutoStockRepository;
exports.ProdutoStockRepository = ProdutoStockRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('lojas')),
    tslib_1.__param(1, repository_1.repository.getter('StockRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
], ProdutoStockRepository);
//# sourceMappingURL=produto_stock%20repository.js.map