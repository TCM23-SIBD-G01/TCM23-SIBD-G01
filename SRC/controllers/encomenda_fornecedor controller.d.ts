import { Encomenda } from '../models/encomenda';
import { Fornecedor } from '../models/fornecedor';
import { EncomendaFornecedorRepository } from '../repositories';
export declare class encomenda_fornecedorController {
    encomendaFornecedorRepository: EncomendaFornecedorRepository;
    constructor(encomendaFornecedorRepository: EncomendaFornecedorRepository);
    getFornecedor(id: typeof Encomenda.prototype.id): Promise<Fornecedor>;
}
