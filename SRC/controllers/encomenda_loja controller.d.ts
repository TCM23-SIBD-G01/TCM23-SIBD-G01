import { Encomenda } from '../models/encomenda';
import { Loja } from '../models/loja';
import { EncomendaLojaRepository } from '../repositories';
export declare class encomenda_lojaController {
    encomendaLojaRepository: EncomendaLojaRepository;
    constructor(encomendaLojaRepository: EncomendaLojaRepository);
    getLoja(id: typeof Encomenda.prototype.id): Promise<Loja>;
}
