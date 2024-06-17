"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compra = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Compra = class Compra extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Compra = Compra;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Compra.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
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
        default: 0,
    }),
    tslib_1.__metadata("design:type", Number)
], Compra.prototype, "descontosAplicados", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Compra.prototype, "metodoPagamento", void 0);
exports.Compra = Compra = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Compra);
//# sourceMappingURL=compra.model.js.map