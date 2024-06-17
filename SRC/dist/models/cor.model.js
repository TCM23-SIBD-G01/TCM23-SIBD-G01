"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cor = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Cor = class Cor extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Cor = Cor;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cor.prototype, "codigoHexadecimal", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cor.prototype, "nome", void 0);
exports.Cor = Cor = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Cor);
//# sourceMappingURL=cor.model.js.map