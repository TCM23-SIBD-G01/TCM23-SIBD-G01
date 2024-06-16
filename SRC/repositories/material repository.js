"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const material_1 = require("../models/material");
let MaterialRepository = class MaterialRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, funcionarioRepositoryGetter) {
        super(material_1.Material, dataSource);
        this.funcionarioRepositoryGetter = funcionarioRepositoryGetter;
        this.funcionario = this.createBelongsToAccessorFor('material', this.funcionarioRepositoryGetter);
        this.registerInclusionResolver('material', this.funcionario.inclusionResolver);
    }
};
exports.MaterialRepository = MaterialRepository;
exports.MaterialRepository = MaterialRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('lojas')),
    tslib_1.__param(1, repository_1.repository.getter('FuncionarioRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
], MaterialRepository);
//# sourceMappingURL=material%20repository.js.map