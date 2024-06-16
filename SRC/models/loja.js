"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
class Loja extends repository_1.Entity {
}
exports.Loja = Loja;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Loja.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Loja.prototype, "nome", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Loja.prototype, "localizacao", void 0);
//# sourceMappingURL=loja.js.map