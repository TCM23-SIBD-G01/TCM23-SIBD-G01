"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const funcionario_1 = require("../models/funcionario");
let FuncionarioRepository = class FuncionarioRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, tarefaRepositoryGetter) {
        super(funcionario_1.Funcionario, dataSource);
        this.tarefaRepositoryGetter = tarefaRepositoryGetter;
        this.tarefa = this.createHasManyRepositoryFactoryFor('tarefa', this.tarefaRepositoryGetter);
        this.registerInclusionResolver('tarefa', this.tarefa.inclusionResolver);
    }
};
exports.FuncionarioRepository = FuncionarioRepository;
exports.FuncionarioRepository = FuncionarioRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('lojas')),
    tslib_1.__param(1, repository_1.repository.getter('TarefaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
], FuncionarioRepository);
//# sourceMappingURL=funcionario%20repository.js.map