"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let StockRepository = class StockRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Stock, dataSource);
    }
};
exports.StockRepository = StockRepository;
exports.StockRepository = StockRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.lojas')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.LojasDataSource])
], StockRepository);
//# sourceMappingURL=stock.repository.js.map