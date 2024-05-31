# C4
## 01 Beatriz Martins a043545, Rita Nunes a043237 

**Esquema Relacional** 

Loja        (localizacao, id)
Cliente     (contacto, contribuinte, nome)
Compra      (id, data, nomeCliente, valorcompra, descontoAplicado, metodoPagamento,
        #clienteContacto  -> Cliente NN)
Fornecedor (nif, morada, nome, prazoEntrega, iban, historicoPedidos, email, contacto)
Encomenda   (idEncomenda, idLoja, idFornecedor, dataEntrega, dataEncomenda, valorEncomenda, quantidade, metodoEnvio,
        #fornecedorNif -> Fornecedor NN)
Produto     (codigo, material, quantidade, preco, cor, nome, sexo, estacao,
        #encomendaIdEncomenda     -> Encomenda NN 
        #fornecedorNif   -> Fornecedor NN
        #materialNome  -> Material NN
        #codigoHexadecimalCor  -> Cor NN)
Tamanho     (codigo, categoriaPeca, unidadeMedida,
        #produtoCodigo   -> Produto NN)
Funcionarios(nif, iban, quantidade, horario, nome, contacto, email, morada, idade)
Tarefas     (horario, data)
Material    (nome, composicao, proprieades, instrucoesCuidados)
Cor         (codigoHexadecimal, nome)
OperaEm     (#nif -> Funcionarios, #iban -> Funcionarios, #horario -> tarefas, #data -> tarefas)
TrabalhamEm (#localizacao -> Loja, #nif -> Funcionarios, #iban -> Funcionarios)
AtendidoPor (#contacto -> Cliente, #nif -> Funcionarios, #iban -> Funcionarios)
Trabalho    (#horario -> Tarefa, #data -> tarefa, tipo)
Stock       (#codigo -> produto, quantidade)

Loja
Localizacao        Id
Algarve
Lisboa
Castelo Branco
Aveiro
Porto


Cliente
Contacto     Contribuinte    Nome
912345981    273380087       Maria Andrade
987789654    280099821       Inês Machado


Compra
Id        Data         NomeCliente    ValorCompra     DescontoAplicado     MetodoPagamento
891-22    25/05/2024   Maria Andrade     25€             10%                  mbway
895-45    29/05/2024   Inês Machado      30€             5%                  cartão de Crédito
920-32    15/06/2024   Joana Pacheco     10€             25%                  dinheiro


Fornecedor
Nif             Morada                                     Nome           PrazoEntrega      Iban      HistoricoPedidos       Email                    Contacto
273498176       Rua do Calvário, Casais, nº8 4620-091      José Nunes     20/04/2024                                         jose.nunes@gmail.com     914229916
542897137       Rua do Presa, Penamaior, nº2 4792-087      André Mendes   05/06/2024                                         andre.mendes@gmail.com   934278967


Encomenda
IdEncomenda      IdLoja         IdFornecedor             DataEntrega         DataEncomenda           ValorEncomenda           Quantidade         MetodoEnvio



Produto
Codigo       Material    Quantidade     Preco        Cor         Nome                  Sexo           Estacao
2819-989     Linho         5            25€*5      Rosa       Vestido Floral          Feminino      Verão
2819-989     Malha         1            16€*1      Azul       Calções Largos          Masculino     Primavera
2819-989     Ganga         10           20€*10     Branco     Calças Boca de Sino     Feminino      Primavera


Tamanho
Descrição    CategoriaPeça        UnidadeMedida


Funcionarios
Nif     Iban       Quantidade            Horario           Nome            Contacto    Email               Morada            Idade


Tarefas
Horario             Data


OperaEm
Nif      Iban      Horario


TrabalhamEm (#localizacao -> Loja, #nif -> Funcionarios, #iban -> Funcionarios)
Localizacao      Nif        Iban


AtendidoPor
Contacto         Nif           Iban


Trabalho
Horario        Data        Tipo


Stock
Codigo           Quantidade
