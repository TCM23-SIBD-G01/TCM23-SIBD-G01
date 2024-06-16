"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncomendaLojaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const encomenda_1 = require("../models/encomenda");
let EncomendaLojaRepository = class EncomendaLojaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, lojaRepositoryGetter) {
        super(encomenda_1.Encomenda, dataSource);
        this.lojaRepositoryGetter = lojaRepositoryGetter;
        this.loja = this.createBelongsToAccessorFor('encomenda', this.lojaRepositoryGetter);
        this.registerInclusionResolver('encomenda', this.loja.inclusionResolver);
    }
};
exports.EncomendaLojaRepository = EncomendaLojaRepository;
exports.EncomendaLojaRepository = EncomendaLojaRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('lojas')),
    tslib_1.__param(1, repository_1.repository.getter('LojaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
], EncomendaLojaRepository);
//# sourceMappingURL=encomenda_loja%20repository.js.map