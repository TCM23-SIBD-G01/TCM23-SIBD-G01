"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FornecedorRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const fornecedor_1 = require("../models/fornecedor");
let FornecedorRepository = class FornecedorRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, encomendaRepositoryGetter) {
        super(fornecedor_1.Fornecedor, dataSource);
        this.encomendaRepositoryGetter = encomendaRepositoryGetter;
        this.encomenda = this.createHasManyRepositoryFactoryFor('encomenda', encomendaRepositoryGetter);
        this.registerInclusionResolver('encomenda', this.encomenda.inclusionResolver);
    }
};
exports.FornecedorRepository = FornecedorRepository;
exports.FornecedorRepository = FornecedorRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('lojas')),
    tslib_1.__param(1, repository_1.repository.getter('EncomendaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
], FornecedorRepository);
//# sourceMappingURL=fornecedor%20repository.js.map