"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tamanho = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
class Tamanho extends repository_1.Entity {
}
exports.Tamanho = Tamanho;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Tamanho.prototype, "codigo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Tamanho.prototype, "unidadeMedida", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Tamanho.prototype, "categoriaPeca", void 0);
//# sourceMappingURL=tamanho.js.map