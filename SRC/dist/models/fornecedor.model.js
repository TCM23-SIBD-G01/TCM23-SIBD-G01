"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fornecedor = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Fornecedor = class Fornecedor extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Fornecedor = Fornecedor;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Fornecedor.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Fornecedor.prototype, "nome", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Fornecedor.prototype, "contacto", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Fornecedor.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Fornecedor.prototype, "iban", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Fornecedor.prototype, "morada", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Fornecedor.prototype, "nif", void 0);
exports.Fornecedor = Fornecedor = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Fornecedor);
//# sourceMappingURL=fornecedor.model.js.map