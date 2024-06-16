"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
class Stock extends repository_1.Entity {
}
exports.Stock = Stock;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Stock.prototype, "codigoBarras", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Stock.prototype, "quantidade", void 0);
//# sourceMappingURL=stock.js.map