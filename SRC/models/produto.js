"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
class Produto extends repository_1.Entity {
}
exports.Produto = Produto;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Produto.prototype, "codigoBarras", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'enum',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Produto.prototype, "sexo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'enum',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Produto.prototype, "estacao", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Produto.prototype, "nome", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Produto.prototype, "preco", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Produto.prototype, "quantidade", void 0);
//# sourceMappingURL=produto.js.map