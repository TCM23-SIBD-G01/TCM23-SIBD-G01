"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompraRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const compra_1 = require("../models/compra");
let CompraRepository = class CompraRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, clienteRepositoryGetter) {
        super(compra_1.Compra, dataSource);
        this.clienteRepositoryGetter = clienteRepositoryGetter;
        this.cliente = this.createBelongsToAccessorFor('compra', clienteRepositoryGetter);
        this.registerInclusionResolver('compra', this.cliente.inclusionResolver);
    }
};
exports.CompraRepository = CompraRepository;
exports.CompraRepository = CompraRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('lojas')),
    tslib_1.__param(1, repository_1.repository.getter('ClienteRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
], CompraRepository);
//# sourceMappingURL=compra%20repository.js.map