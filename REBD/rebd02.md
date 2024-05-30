# C2

## Grupo 01 Beatriz Martins a043545, Rita Nunes a043237

**Modelo E/A**

![Diagrama1(4)](https://github.com/TCM23-SIBD-G01/TCM23-SIBD-G01/assets/153848864/75f74857-767b-456c-ba2a-a64c48aeebb9)

*Diferenças dos modelos E/A*

Desde a primeira entrega do modelo relacional, houveram bastantes mudanças ao esquema. 
A entidade CADEIA DE LOJAS foi removida. 
A LOJA foi acrescentado o atributo Id. 
A FUNCIONARIO foi acrescentado o atributo Id. A TAREFA foram acrescentados os atributos IdFuncionário, Categoria, Status e Descrição. Foi removido o atributo Tipo. 
PONTO DE VENDA foi também removido. 
A CLIENTE, foi removido o atributo Contribuinte e acrescentados os atributos Nif e Nome. 
STOCK foi transformado em entidade fraca com apenas o atributo Quantidade, sendo a maior parte dos outros transferidos para PRODUTO.
A PRODUTO foram acrescentados os atributos Sexo, Categoria e Estacao. Codigo foi alterado para CodigoBarras. Material, Tamanho e Cor foram transformados em entidades. 
Foi também acrescentada a entidade ENCOMENDA. 
A FORNECEDOR foram retirados os atributos PrazosDeEntrega e HistoricoDePedidos e foi acrescentado o atributo Id. 
A associação compra foi transformada numa entidade ligada a cliente e a stock.
