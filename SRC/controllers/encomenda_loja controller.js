"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encomenda_lojaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const loja_1 = require("../models/loja");
const repositories_1 = require("../repositories");
let encomenda_lojaController = class encomenda_lojaController {
    constructor(encomendaLojaRepository) {
        this.encomendaLojaRepository = encomendaLojaRepository;
    }
    async getLoja(id) {
        return this.encomendaLojaRepository.loja(id);
    }
};
exports.encomenda_lojaController = encomenda_lojaController;
tslib_1.__decorate([
    (0, rest_1.get)('/encomendaLoja/{id}/loja', {
        responses: {
            '200': {
                description: 'Loja belonging to Encomenda',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(loja_1.Loja) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], encomenda_lojaController.prototype, "getLoja", null);
exports.encomenda_lojaController = encomenda_lojaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EncomendaLojaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EncomendaLojaRepository])
], encomenda_lojaController);
//# sourceMappingURL=encomenda_loja%20controller.js.map