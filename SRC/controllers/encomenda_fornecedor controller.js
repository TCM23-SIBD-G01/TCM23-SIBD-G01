"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encomenda_fornecedorController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const fornecedor_1 = require("../models/fornecedor");
const repositories_1 = require("../repositories");
let encomenda_fornecedorController = class encomenda_fornecedorController {
    constructor(encomendaFornecedorRepository) {
        this.encomendaFornecedorRepository = encomendaFornecedorRepository;
    }
    async getFornecedor(id) {
        return this.encomendaFornecedorRepository.fornecedor(id);
    }
};
exports.encomenda_fornecedorController = encomenda_fornecedorController;
tslib_1.__decorate([
    (0, rest_1.get)('/encomendaFornecedor/{id}/fornecedor', {
        responses: {
            '200': {
                description: 'Fornecedor belonging to Encomenda',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(fornecedor_1.Fornecedor) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], encomenda_fornecedorController.prototype, "getFornecedor", null);
exports.encomenda_fornecedorController = encomenda_fornecedorController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EncomendaFornecedorRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EncomendaFornecedorRepository])
], encomenda_fornecedorController);
//# sourceMappingURL=encomenda_fornecedor%20controller.js.map