# C4
## 01 Beatriz Martins a043545, Rita Nunes a043237 

**Esquema Relacional** 

## **Relações**
## **Tabela Loja**
### Descrição da tabela Loja
A tabela loja 

#### COLUNAS <!-- omit in toc -->

| Nome        | Descrição                    | Domínio     | por Omissão | Automático | Nulo |
| :---------- | :--------------------------- | :---------- | :---------- | :--------- | :--- |
| id          | identificador da tabela loja |             | -           | Sim        | Não  |
| localizacao | local do estabelecimento     |             | -           | Não        | Não  |
| nome        | Nome do registo              |             | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| id        |

- **Unicidade** (valores únicos)*:

| Nome   | Coluna(s) |
| ------ | --------- |
| id     | id        |
| nome   | nome      |

## **Tabela Cliente**
### Descrição da tabela Cliente
A tabela cliente 

#### COLUNAS <!-- omit in toc -->

| Nome        | Descrição                       | Domínio     | por Omissão | Automático | Nulo |
| :---------- | :------------------------------ | :---------- | :---------- | :--------- | :--- |
| nif         | identificador da tabela cliente |             | -           | Sim        | Não  |
| contacto    | número de telemóvel             |             | -           | Não        | Não  |
| nome        | Nome do registo                 |             | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)  |
| ---------- |
| nif        |

- **Unicidade** (valores únicos)*:

| Nome    | Coluna(s)  |
| ------- | ---------- |
| nif     | nif        |

## **Tabela Compra**
### Descrição da tabela Compra
A tabela compra 

#### COLUNAS <!-- omit in toc -->

| Nome               | Descrição                       | Domínio     | por Omissão | Automático | Nulo |
| :----------------- | :------------------------------ | :---------- | :---------- | :--------- | :--- |
| id                 | identificador da tabela compra  |             | -           | Sim        | Não  |
| data               | data da realização da compra    |             | -           | Não        | Não  |
| nomeCliente        | Nome do registo                 |             | -           | Não        | Não  |
| valorCompra        | Preço total da compra           |             | -           | Não        | Não  |
| descontosAplicados | Descontos aplicados             |             | -           | Não        | Não  |
| metodoPagamento    | Método de pagamento utilizado   |             | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)  |
| ---------- |
| id        |

- **Unicidade** (valores únicos)*:

| Nome    | Coluna(s)  |
| ------- | ---------- |
| id     | id        |

## **Tabela Fornecedor**
### Descrição da tabela Fornecedor
A tabela fornecedor 

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                           | Domínio     | por Omissão | Automático | Nulo |
| :------- | :---------------------------------- | :---------- | :---------- | :--------- | :--- |
| id       | identificador da tabela fornecedor  |             | -           | Sim        | Não  |
| nome     | nome do fornecedor                  |             | -           | Não        | Não  |
| morada   | localização do fornecedor           |             | -           | Não        | Não  |
| iban     | iban do fornecedor                  |             | -           | Não        | Não  |
| nif      | nif do fornecedor                   |             | -           | Não        | Não  |
| contacto | número de telemóvel do fornecedor   |             | -           | Não        | Não  |
| email    | email eletrónico do fornecedor      |             | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)  |
| ---------- |
| id        |

- **Unicidade** (valores únicos)*:

| Nome    | Coluna(s)  |
| ------- | ---------- |
| id     | id        |

## **Tabela Encomenda**
### Descrição da tabela Encomenda
A tabela encomenda 

#### COLUNAS <!-- omit in toc -->

| Nome           | Descrição                           | Domínio     | por Omissão | Automático | Nulo |
| :------------- | :---------------------------------- | :---------- | :---------- | :--------- | :--- |
| id             | identificador da tabela encomenda   |             | -           | Sim        | Não  |
| idLoja         | id da Loja                          |             | -           | Não        | Não  |
| dataPedido     | data do pedido                      |             | -           | Não        | Não  |
| valorEncomenda | valor da encomenda                  |             | -           | Não        | Não  |
| dataEntrega    | data de entrega                     |             | -           | Não        | Não  |
| metodoEnvio    | método de envio                     |             | -           | Não        | Não  |
| idFornecedor   | id do Fornecedor                    |             | -           | Não        | Não  |
| quantidade     | quantidade                          |             | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)  |
| ---------- |
| id        |

- **Unicidade** (valores únicos)*:

| Nome    | Coluna(s)  |
| ------- | ---------- |
| id      | id         |

- **Chave Estrangeira**
| Nome             | Coluna(s)     |
| ---------------- | ------------- |
| idLoja           | idLoja        |
| idFornecedor     | idFornecedor  |


## **Tabela Produto**
### Descrição da tabela Produto
A tabela produto 

#### COLUNAS <!-- omit in toc -->

| Nome         | Descrição                                  | Domínio     | por Omissão | Automático | Nulo |
| :----------- | :----------------------------------------- | :---------- | :---------- | :--------- | :--- |
| codigoBarras | identificador da tabela produto            |             | -           | Sim        | Não  |
| sexo         | identidade do cliente associada ao produto |             | -           | Não        | Não  |
| estacao      | estação do ano associada ao produto        |             | -           | Não        | Não  |
| categoria    | categoria                                  |             | -           | Não        | Não  |
| nome         | nome de produto                            |             | -           | Não        | Não  |
| preco        | valor em €                                 |             | -           | Não        | Não  |
| quantidade   | quantidade                                 |             | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)      |
| -------------- |
| codigoBarras   |

- **Unicidade** (valores únicos)*:

| Nome         | Coluna(s)     |
| ------------ | ------------- |
| codigoBarras | codigoBarras  |

- **Chave Estrangeira**
| Nome             | Coluna(s)     |
| ---------------- | ------------- |
|            |         |
|      |   |

## **Tabela Tamanho**
### Descrição da tabela Tamanho
A tabela tamanho 

#### COLUNAS <!-- omit in toc -->

| Nome          | Descrição                        | Domínio     | por Omissão | Automático | Nulo |
| :------------ | :------------------------------- | :---------- | :---------- | :--------- | :--- |
| codigo        | identificador da tabela produto  |             | -           | Sim        | Não  |
| unidadeMedida | unidade de medida                |             | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| codigo    |

- **Unicidade** (valores únicos)*:

| Nome         | Coluna(s)     |
| ------------ | ------------- |
| codigoBarras | codigoBarras  |

## **Tabela Cor**
### Descrição da tabela Cor
A tabela cor 

#### COLUNAS <!-- omit in toc -->

| Nome              | Descrição                    | Domínio     | por Omissão | Automático | Nulo |
| :---------------- | :--------------------------- | :---------- | :---------- | :--------- | :--- |
| codigoHexadecimal | identificador da tabela cor  |             | -           | Sim        | Não  |
| nome              | nome da cor                  |             | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| codigo    |

- **Unicidade** (valores únicos)*:

| Nome              | Coluna(s)          |
| ----------------- | ------------------ |
| codigoHexadecimal | codigoHexadecimal  |


## **Tabela Material**
### Descrição da tabela Material
A tabela material 

#### COLUNAS <!-- omit in toc -->

| Nome               | Descrição                   | Domínio     | por Omissão | Automático | Nulo |
| :----------------- | :-------------------------- | :---------- | :---------- | :--------- | :--- |
| nome               | nome do material            |             | -           | Não        | Não  |
| composicao         | composicao do material      |             | -           | Não        | Não  |
| propriedades       | propriedades do material    |             | -           | Não        | Não  |
| instrucoesCuidado  | instruções de cuidado a ter |             | -           | Não        | Não  |


#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| nome    |

- **Unicidade** (valores únicos)*:

| Nome | Coluna(s) |
| ---- | --------- |
| nome | nome      |

## **Tabela Funcionario**
### Descrição da tabela Funcionario
A tabela funcionario 

#### COLUNAS <!-- omit in toc -->

| Nome       | Descrição                           | Domínio     | por Omissão | Automático | Nulo |
| :--------- | :---------------------------------- | :---------- | :---------- | :--------- | :--- |
| id         | identificador da tabela funcionario |             | -           | Sim        | Não  |
| nome       | nome completo                       |             | -           | Não        | Não  |
| quantidade | número de funcionários              |             | -           | Não        | Não  |
| contacto   | número telemóvel                    |             | -           | Não        | Não  |
| nif        | número de identificação fiscal      |             | -           | Não        | Não  |
| morada     | morada                              |             | -           | Não        | Não  |
| iban       | iban                                |             | -           | Não        | Não  |
| email      | email eletrónico                    |             | -           | Não        | Não  |
| horario    | horário de trabalho                 |             | -           | Não        | Não  |
| idade      | idade                               |             | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)  |
| ---------- |
| id        |

- **Unicidade** (valores únicos)*:

| Nome    | Coluna(s)  |
| ------- | ---------- |
| id      | id         |

- **Chave Estrangeira**
| Nome             | Coluna(s)     |
| ---------------- | ------------- |
|            |         |
|      |   |

## **Tabela Tarefa**
### Descrição da tabela Tarefa
A tabela tarefa 

#### COLUNAS <!-- omit in toc -->

| Nome       | Descrição                           | Domínio     | por Omissão | Automático | Nulo |
| :--------- | :---------------------------------- | :---------- | :---------- | :--------- | :--- |
| categoria  | categoria da tarefa |             | -           | Sim        | Não  |
| horario    | horario                       |             | -           | Não        | Não  |
| data | data               |             | -           | Não        | Não  |
| status   | status                   |             | -           | Não        | Não  |
| idFuncionario        | Id associado ao Funcionário      |             | -           | Não        | Não  |

- **Chave Estrangeira**
| Nome             | Coluna(s)      |
| ---------------- | -------------- |
| idFuncionario    | idFuncionario  |

## **Tabela Stock**
### Descrição da tabela Stock
A tabela stock 

#### COLUNAS <!-- omit in toc -->

| Nome       | Descrição                           | Domínio     | por Omissão | Automático | Nulo |
| :--------- | :---------------------------------- | :---------- | :---------- | :--------- | :--- |
| quantidade | identificador da tabela stock |             | -           | Sim        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)  |
| ---------- |
| id        |

- **Unicidade** (valores únicos)*:

| Nome    | Coluna(s)  |
| ------- | ---------- |
| id      | id         |

- **Chave Estrangeira**
| Nome             | Coluna(s)     |
| ---------------- | ------------- |
| idLoja           | idLoja        |
| idFornecedor     | idFornecedor  |


### Loja        
(localizacao, id, nome)
### Cliente     
(contacto, nif, nome)
### Compra      
(id, data, nomeCliente, valorcompra, descontoAplicado, metodoPagamento,
        #clienteContacto  -> Cliente NN)
### Fornecedor 
(nif, morada, nome, prazoEntrega, iban, historicoPedidos, email, contacto)
### Encomenda   
(idEncomenda, idLoja, idFornecedor, dataEntrega, dataEncomenda, valorEncomenda, quantidade, metodoEnvio,
        #fornecedorNif -> Fornecedor NN)
### Produto     
(codigoBarras, material, quantidade, preco, nome, sexo, estacao,
        #encomendaIdEncomenda     -> Encomenda NN 
        #fornecedorNif   -> Fornecedor NN
        #materialNome  -> Material NN
        #codigoHexadecimalCor  -> Cor NN)
### Tamanho     
(codigo, categoriaPeca, unidadeMedida,
        #produtoCodigo   -> Produto NN)
### Funcionarios
(nif, iban, quantidade, horario, nome, contacto, email, morada, idade
        #lojaId   -> Loja NN)
### Material    
(nome, composicao, proprieades, instrucoesCuidados)
### Cor         
(codigoHexadecimal, nome)
### OperaEm     
(#nif -> Funcionarios, #iban -> Funcionarios, #horario -> tarefas, #data -> tarefas)
### TrabalhamEm 
(#localizacao -> Loja, #nif -> Funcionarios, #iban -> Funcionarios)
### AtendidoPor 
(#contacto -> Cliente, #nif -> Funcionarios, #iban -> Funcionarios)
### Stock       
(#codigo -> produto, quantidade)
### Tarefas
(#id -> funcionarios, descricao)

### Loja
| Localizacao      |  Id     |
| :--------------- | :------ |
| Algarve          | 000000000  |
| Lisboa           | 000000000    |
| Castelo Branco   | 000000000    |
| Aveiro           | 000000000    |
| Porto            | 000000000    |


### Cliente
| Contacto    | Nif           |  Nome
| :---------- | :------------ | :------------ |
| 912345981   | 273380087     |  Maria Andrade
| 987789654   | 280099821     |  Inês Machado


### Compra
| Id       | Data       |  NomeCliente    |  ValorCompra  |   DescontoAplicado  |   MetodoPagamento   |
| :------- | :--------- | :-------------- | :------------ | :------------------ | :------------------ |
| 891-22   | 25/05/2024 |  Maria Andrade  |   25€         |    10%              |   mbway             |
| 895-45   | 29/05/2024 |  Inês Machado   |   30€         |    5%               |   cartão de Crédito |
| 920-32   | 15/06/2024 |  Joana Pacheco  |   10€         |    25%              |   dinheiro          |


### Fornecedor
| Nif          |   Morada                                  |   Nome         |  PrazoEntrega |     Iban   |   HistoricoPedidos    |   Email                  |  Contacto |
| :----------- | :---------------------------------------- | :------------- | :------------ | :--------- | :-------------------- | :----------------------- | :--------- |
| 273498176    |   Rua do Calvário, Casais, nº8 4620-091   |   José Nunes   |  20/04/2024   |            |                       |   jose.nunes@gmail.com   |  914229916
| 542897137    |   Rua do Presa, Penamaior, nº2 4792-087   |   André Mendes |  05/06/2024   |            |                       |   andre.mendes@gmail.com |  934278967


### Encomenda
| IdEncomenda  |    IdLoja     |   IdFornecedor |  DataEntrega  |  DataEncomenda    |  ValorEncomenda   |  Quantidade  |  MetodoEnvio |
| :----------- | :------------ | :------------- | :------------ | :---------------- | :---------------- | :----------- | :----------- |



### Produto
| CodigoBarras |  Material  |  Quantidade  |   Preco   |        Nome          |   Sexo      |   Estacao   |
| :----------- | :--------- | :----------- | :-------- | :------------------- | :---------- | :---------- |
| 2813-888     |  Malha     |    1         | 16€* 1    | Calções Largos       |  Masculinho |  Primavera  |
| 2819-989     |  Linho     |    5         | 25€* 5    | Vestido Floral       |  Feminino   |  Verão      |
| 2819-989     |  Ganga     |    10        | 20€* 10   | Calças Boca de Sino  |  Feminino   |  Primavera  |


### Tamanho
| Descricao  |  CategoriaPeça     |   UnidadeMedida |
| :-------- | :----------------- | :-------------- | 


### Funcionarios
| Nif    | Iban   |    Quantidade      |      Horario    |       Nome   |         Contacto  |   Email        |       Morada      |   Idade |  Id  |
| :----------- | :------------ | :------------- | :------------ | :---------------- | :---------------- | :----------- | :----------- |


### OperaEm
| Nif   |   Iban   |   Horario |
| :--------  | :----------------- | :-------------- |

### TrabalhamEm 
| Localizacao   |   Nif    |    Iban  |
| :-------- | :----------------- | :-------------- |


### AtendidoPor
| Contacto     |    Nif     |      Iban  |
| :-------- | :----------------- | :-------------- |



### Trabalho
| Horario     |   Data    |    Tipo |
| :-------- | :----------------- | :-------------- |



### Stock
|  Codigo     |   Quantidade |
| :-------- | :----------------- | 

