"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const cliente_1 = require("../models/cliente");
let ClienteRepository = class ClienteRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, compraRepositoryGetter) {
        super(cliente_1.Cliente, dataSource);
        this.compraRepositoryGetter = compraRepositoryGetter;
        this.compra = this.createHasManyRepositoryFactoryFor('compra', compraRepositoryGetter);
        this.registerInclusionResolver('compra', this.compra.inclusionResolver);
    }
};
exports.ClienteRepository = ClienteRepository;
exports.ClienteRepository = ClienteRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('lojas')),
    tslib_1.__param(1, repository_1.repository.getter('CompraRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
], ClienteRepository);
//# sourceMappingURL=cliente%20repository.js.map