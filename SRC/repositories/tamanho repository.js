"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TamanhoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const tamanho_1 = require("../models/tamanho");
let TamanhoRepository = class TamanhoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, funcionarioRepositoryGetter) {
        super(tamanho_1.Tamanho, dataSource);
        this.funcionarioRepositoryGetter = funcionarioRepositoryGetter;
        this.funcionario = this.createBelongsToAccessorFor('tamanho', this.funcionarioRepositoryGetter);
        this.registerInclusionResolver('tamanho', this.funcionario.inclusionResolver);
    }
};
exports.TamanhoRepository = TamanhoRepository;
exports.TamanhoRepository = TamanhoRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('lojas')),
    tslib_1.__param(1, repository_1.repository.getter('FuncionarioRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
], TamanhoRepository);
//# sourceMappingURL=tamanho%20repository.js.map