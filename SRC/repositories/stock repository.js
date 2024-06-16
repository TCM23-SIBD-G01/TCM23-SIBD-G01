"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const stock_1 = require("../models/stock");
let StockRepository = class StockRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, produtoRepositoryGetter) {
        super(stock_1.Stock, dataSource);
        this.produtoRepositoryGetter = produtoRepositoryGetter;
        this.produto = this.createHasManyRepositoryFactoryFor('produto', produtoRepositoryGetter);
        this.registerInclusionResolver('produto', this.produto.inclusionResolver);
    }
};
exports.StockRepository = StockRepository;
exports.StockRepository = StockRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('lojas')),
    tslib_1.__param(1, repository_1.repository.getter('ProdutoRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
], StockRepository);
//# sourceMappingURL=stock%20repository.js.map