"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LojaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const loja_1 = require("../models/loja");
let LojaRepository = class LojaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, encomendaRepositoryGetter) {
        super(loja_1.Loja, dataSource);
        this.encomendaRepositoryGetter = encomendaRepositoryGetter;
        this.encomenda = this.createHasManyRepositoryFactoryFor('encomenda', encomendaRepositoryGetter);
        this.registerInclusionResolver('encomenda', this.encomenda.inclusionResolver);
    }
};
exports.LojaRepository = LojaRepository;
exports.LojaRepository = LojaRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('lojas')),
    tslib_1.__param(1, repository_1.repository.getter('EncomendaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
], LojaRepository);
//# sourceMappingURL=loja%20repository.js.map