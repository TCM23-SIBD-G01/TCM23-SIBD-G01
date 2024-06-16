"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioTarefaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const funcionario_1 = require("../models/funcionario");
let FuncionarioTarefaRepository = class FuncionarioTarefaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, tarefaRepositoryGetter) {
        super(funcionario_1.Funcionario, dataSource);
        this.tarefaRepositoryGetter = tarefaRepositoryGetter;
        this.tarefa = this.createBelongsToAccessorFor('funcionario', this.tarefaRepositoryGetter);
        this.registerInclusionResolver('funcionario', this.tarefa.inclusionResolver);
    }
};
exports.FuncionarioTarefaRepository = FuncionarioTarefaRepository;
exports.FuncionarioTarefaRepository = FuncionarioTarefaRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('lojas')),
    tslib_1.__param(1, repository_1.repository.getter('TarefaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
], FuncionarioTarefaRepository);
//# sourceMappingURL=funcionario_tarefa%20repository.js.map