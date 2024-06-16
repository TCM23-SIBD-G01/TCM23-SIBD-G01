"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncomendaFornecedorRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const encomenda_1 = require("../models/encomenda");
let EncomendaFornecedorRepository = class EncomendaFornecedorRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, fornecedorRepositoryGetter) {
        super(encomenda_1.Encomenda, dataSource);
        this.fornecedorRepositoryGetter = fornecedorRepositoryGetter;
        this.fornecedor = this.createBelongsToAccessorFor('encomenda', this.fornecedorRepositoryGetter);
        this.registerInclusionResolver('encomenda', this.fornecedor.inclusionResolver);
    }
};
exports.EncomendaFornecedorRepository = EncomendaFornecedorRepository;
exports.EncomendaFornecedorRepository = EncomendaFornecedorRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('lojas')),
    tslib_1.__param(1, repository_1.repository.getter('FornecedorRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
], EncomendaFornecedorRepository);
//# sourceMappingURL=encomenda_fornecedor%20repository.js.map