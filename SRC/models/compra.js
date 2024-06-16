"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compra = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
class Compra extends repository_1.Entity {
}
exports.Compra = Compra;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Compra.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Compra.prototype, "data", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Compra.prototype, "nifCliente", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Compra.prototype, "valorCompra", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: false,
    }),
    tslib_1.__metadata("design:type", Number)
], Compra.prototype, "descontosAplicados", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'enum',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Compra.prototype, "metodoPagamento", void 0);
//# sourceMappingURL=compra.js.map