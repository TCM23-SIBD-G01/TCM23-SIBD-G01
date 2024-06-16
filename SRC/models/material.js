"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Material = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
class Material extends repository_1.Entity {
}
exports.Material = Material;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Material.prototype, "nome", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Material.prototype, "composicao", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Material.prototype, "instrucoes", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Material.prototype, "propriedades", void 0);
//# sourceMappingURL=material.js.map