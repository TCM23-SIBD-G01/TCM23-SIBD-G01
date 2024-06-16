"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encomenda = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
class Encomenda extends repository_1.Entity {
}
exports.Encomenda = Encomenda;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Encomenda.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Encomenda.prototype, "dataPedido", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Encomenda.prototype, "dataEntrega", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Encomenda.prototype, "idLoja", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Encomenda.prototype, "valorEncomenda", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'enum',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Encomenda.prototype, "metodoEnvio", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Encomenda.prototype, "idFornecedor", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Encomenda.prototype, "quantidade", void 0);
//# sourceMappingURL=encomenda.js.map