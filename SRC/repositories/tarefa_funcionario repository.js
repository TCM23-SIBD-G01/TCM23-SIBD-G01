"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefaFuncionarioRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const tarefa_1 = require("../models/tarefa");
let TarefaFuncionarioRepository = class TarefaFuncionarioRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, funcionarioRepositoryGetter) {
        super(tarefa_1.Tarefa, dataSource);
        this.funcionarioRepositoryGetter = funcionarioRepositoryGetter;
        this.funcionario = this.createBelongsToAccessorFor('tarefa', this.funcionarioRepositoryGetter);
        this.registerInclusionResolver('tarefa', this.funcionario.inclusionResolver);
    }
};
exports.TarefaFuncionarioRepository = TarefaFuncionarioRepository;
exports.TarefaFuncionarioRepository = TarefaFuncionarioRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('lojas')),
    tslib_1.__param(1, repository_1.repository.getter('FuncionarioRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
], TarefaFuncionarioRepository);
//# sourceMappingURL=tarefa_funcionario%20repository.js.map