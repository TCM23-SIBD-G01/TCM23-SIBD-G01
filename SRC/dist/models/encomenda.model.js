"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encomenda = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Encomenda = class Encomenda extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
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
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Encomenda.prototype, "dataPedido", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
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
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Encomenda.prototype, "metodoEnvio", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Encomenda.prototype, "idFornecedor", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Encomenda.prototype, "quantidade", void 0);
exports.Encomenda = Encomenda = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Encomenda);
//# sourceMappingURL=encomenda.model.js.map