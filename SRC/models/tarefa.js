"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarefa = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
class Tarefa extends repository_1.Entity {
}
exports.Tarefa = Tarefa;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Tarefa.prototype, "idFuncionario", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Tarefa.prototype, "horario", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'enum',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Tarefa.prototype, "categoria", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Tarefa.prototype, "data", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'enum',
        required: false,
    }),
    tslib_1.__metadata("design:type", String)
], Tarefa.prototype, "status", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Tarefa.prototype, "descricao", void 0);
//# sourceMappingURL=tarefa.js.map