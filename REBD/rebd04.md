# C4 : Esquema Relacional
## 01 Beatriz Martins a043545, Rita Nunes a043237 

**Esquema Relacional** 

## **Relações**
## **Tabela Loja**
### Descrição da tabela Loja
A tabela loja apresenta o nome, localização e id de cada loja existente.

#### COLUNAS <!-- omit in toc -->

| Nome        | Descrição                    | Domínio     | por Omissão | Automático | Nulo |
| :---------- | :--------------------------- | :---------- | :---------- | :--------- | :--- |
| id          | identificador da tabela loja | Interger    | -           | Sim        | Não  |
| localizacao | local do estabelecimento     | Varchar     | -           | Não        | Não  |
| nome        | Nome do registo              | Char        | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| id        |

- **Unicidade** (valores únicos)*:

| Nome   | Coluna(s) | Indexar |
| ------ | --------- | ------- |
| id     | id        | Sim     |
| nome   | nome      | Sim     |

## **Tabela Cliente**
### Descrição da tabela Cliente
A tabela cliente apresenta informações dos clientes cadastrados no sistema.

#### COLUNAS <!-- omit in toc -->

| Nome        | Descrição                       | Domínio     | por Omissão | Automático | Nulo |
| :---------- | :------------------------------ | :---------- | :---------- | :--------- | :--- |
| nif         | identificador da tabela cliente | Integer     | -           | Sim        | Não  |
| contacto    | número de telemóvel             | Integer     | -           | Não        | Não  |
| nome        | Nome do registo                 | Varchar     | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)  |
| ---------- |
| nif        |

- **Unicidade** (valores únicos)*:

| Nome    | Coluna(s)  | Indexar |
| ------- | ---------- | ------- |
| nif     | nif        | Sim     |

## **Tabela Compra**
### Descrição da tabela Compra
A tabela compra apresenta todas as informações sobre as compras efetuadas na loja

#### COLUNAS <!-- omit in toc -->

| Nome               | Descrição                       | Domínio     | por Omissão | Automático | Nulo |
| :----------------- | :------------------------------ | :---------- | :---------- | :--------- | :--- |
| id                 | identificador da tabela compra  | Interger    | -           | Sim        | Não  |
| data               | data da realização da compra    | Date        | -           | Sim        | Não  |
| nomeCliente        | Nome do registo                 | Varchar     | -           | Não        | Não  |
| valorCompra        | Preço total da compra           | Decimal     | -           | Sim        | Não  |
| descontosAplicados | Descontos aplicados             | Decimal     | -           | Não        | Não  |
| metodoPagamento    | Método de pagamento utilizado   | Enum        | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)  |
| ---------- |
| id        |

- **Unicidade** (valores únicos)*:

| Nome    | Coluna(s)  | Indexar  |
| ------- | ---------- | -------- |
| id      | id         |  Sim     |

## **Tabela Fornecedor**
### Descrição da tabela Fornecedor
A tabela fornecedor armazena informações sobre os fornecedores de produtos.

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                           | Domínio     | por Omissão | Automático | Nulo |
| :------- | :---------------------------------- | :---------- | :---------- | :--------- | :--- |
| id       | identificador da tabela fornecedor  | Interger    | -           | Sim        | Não  |
| nome     | nome do fornecedor                  | Varchar     | -           | Não        | Não  |
| morada   | localização do fornecedor           | Varchar     | -           | Não        | Não  |
| iban     | iban do fornecedor                  | Integer     | -           | Não        | Não  |
| nif      | nif do fornecedor                   | Integer     | -           | Não        | Não  |
| contacto | número de telemóvel do fornecedor   | Integer     | -           | Não        | Não  |
| email    | email eletrónico do fornecedor      | Varchar     | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)  |
| ---------- |
| id        |

- **Unicidade** (valores únicos)*:

| Nome    | Coluna(s)  | Indexar |
| ------- | ---------- | --------|
| id      | id         | Sim |

## **Tabela Encomenda**
### Descrição da tabela Encomenda
A tabela encomenda apresenta todas as informações sobre as encomendas efetuadas pelo fornecedor de produtos para a loja.

#### COLUNAS <!-- omit in toc -->

| Nome           | Descrição                           | Domínio    | por Omissão | Automático | Nulo |
| :------------- | :---------------------------------- | :--------- | :---------- | :--------- | :--- |
| id             | identificador da tabela encomenda   | Int        | -           | Sim        | Não  |
| idLoja         | id da Loja                          | Int        | -           | Sim        | Não  |
| dataPedido     | data do pedido                      | Date       | -           | Sim        | Não  |
| valorEncomenda | valor da encomenda                  | Decimal    | -           | Sim        | Não  |
| dataEntrega    | data de entrega                     | Date       | -           | Sim        | Não  |
| metodoEnvio    | método de envio                     | Varchar    | -           | Não        | Não  |
| idFornecedor   | id do Fornecedor                    | Interger   | -           | Não        | Não  |
| quantidade     | quantidade                          | Interger   | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)  |
| ---------- |
| id        |

- **Unicidade** (valores únicos)*:

| Nome    | Coluna(s)  |   Indexar |
| ------- | ---------- | --------- |
| id      | id         | Sim       |

- **Chave Estrangeira**
| Nome             | Coluna(s)     |
| -----            | -------- |
| idLoja           | idLoja        |
| idFornecedor     | idFornecedor  |


## **Tabela Produto**
### Descrição da tabela Produto
A tabela produto apresenta todas as informações sobre os produtos existentes na loja.

#### COLUNAS <!-- omit in toc -->

| Nome         | Descrição                                  | Domínio     | por Omissão | Automático | Nulo |
| :----------- | :----------------------------------------- | :---------- | :---------- | :--------- | :--- |
| codigoBarras | identificador da tabela produto            | Integer     | -           | Sim        | Não  |
| sexo         | identidade do cliente associada ao produto | Varchar     | -           | Não        | Não  |
| estacao      | estação do ano associada ao produto        | Varchar     | -           | Não        | Não  |
| categoria    | categoria                                  | Varchar     | -           | Não        | Não  |
| nome         | nome de produto                            | Varchar     | -           | Não        | Não  |
| preco        | valor em €                                 | Decimal     | -           | Sim        | Não  |
| quantidade   | quantidade                                 | Interger    | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)      |
| -------------- |
| codigoBarras   |

- **Unicidade** (valores únicos)*:

| Nome         | Coluna(s)     | Indexar |
| ------------ | ------------- | ------- |
| codigoBarras | codigoBarras  |  Sim    |


## **Tabela Tamanho**
### Descrição da tabela Tamanho
A tabela tamanho apresenta todas as informações sobre os tamanhos dos produtos existentes na loja.

#### COLUNAS <!-- omit in toc -->

| Nome          | Descrição                            | Domínio     | por Omissão | Automático | Nulo |
| :------------ | :----------------------------------- | :---------- | :---------- | :--------- | :--- |
| codigo        | identificador do tamanho do produto  | Char        | -           | Sim        | Não  |
| unidadeMedida | unidade de medida                    | Varchar     | -           | Não        | Não  |
| categoriaPeça | categoria da peça                    | Varchar     | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| codigo    |

- **Unicidade** (valores únicos)*:

| Nome   | Coluna(s) | Indexar |
| ------ | --------- | ------ |
| codigo | codigo    | Sim    |

## **Tabela Cor**
### Descrição da tabela Cor
A tabela cor apresenta todas as informações sobre as cores dos produtos existentes na loja.

#### COLUNAS <!-- omit in toc -->

| Nome              | Descrição                    | Domínio     | por Omissão | Automático | Nulo |
| :---------------- | :--------------------------- | :---------- | :---------- | :--------- | :--- |
| codigoHexadecimal | identificador da tabela cor  | Char        | -           | Sim        | Não  |
| nome              | nome da cor                  | Varchar     | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| codigoHexadecimal    |

- **Unicidade** (valores únicos)*:

| Nome              | Coluna(s)          | Indexar |
| ----------------- | ------------------ | ------- |
| codigoHexadecimal | codigoHexadecimal  | Sim     |


## **Tabela Material**
### Descrição da tabela Material
A tabela material apresenta todas as informações sobre os materiais dos produtos existentes na loja.

#### COLUNAS <!-- omit in toc -->

| Nome               | Descrição                   | Domínio     | por Omissão | Automático | Nulo |
| :----------------- | :-------------------------- | :---------- | :---------- | :--------- | :--- |
| nome               | nome do material            | Varchar     | -           | Não        | Não  |
| composicao         | composicao do material      | Text        | -           | Não        | Não  |
| propriedades       | propriedades do material    | Text        | -           | Não        | Não  |
| instrucoesCuidado  | instruções de cuidado a ter | Text        | -           | Não        | Não  |


#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| nome    |

- **Unicidade** (valores únicos)*:

| Nome | Coluna(s) | Indexar |
| ---- | --------- | ------- |
| nome | nome      | Sim     |

## **Tabela Funcionario**
### Descrição da tabela Funcionario
A tabela funcionario apresenta todas as informações sobre os funcionários que trabalham na loja.

#### COLUNAS <!-- omit in toc -->

| Nome       | Descrição                           | Domínio     | por Omissão | Automático | Nulo |
| :--------- | :---------------------------------- | :---------- | :---------- | :--------- | :--- |
| id         | identificador da tabela funcionario | Integer     | -           | Sim        | Não  |
| nome       | nome completo                       | Varchar     | -           | Não        | Não  |
| quantidade | número de funcionários              | Integer     | -           | Não        | Não  |
| contacto   | número telemóvel                    | Integer     | -           | Não        | Não  |
| nif        | número de identificação fiscal      | Integer     | -           | Não        | Não  |
| morada     | morada                              | Varchar     | -           | Não        | Não  |
| iban       | iban                                | Char        | -           | Não        | Não  |
| email      | email eletrónico                    | Varchar     | -           | Não        | Não  |
| horario    | horário de trabalho                 | Char        | -           | Não        | Não  |
| idade      | idade                               | Smallint    | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)  |
| ---------- |
| id        |

- **Unicidade** (valores únicos)*:

| Nome    | Coluna(s)  | Indexar |
| ------- | ---------- | ------- |
| id      | id         | Sim     |
| nif     | nif        | Sim     |
| iban    | iban       | Sim     |

## **Tabela Tarefa**
### Descrição da tabela Tarefa
A tabela tarefa apresenta todas as informações sobre as tarefas dos funcionários que trabalham na loja.

#### COLUNAS <!-- omit in toc -->

| Nome          | Descrição                       | Domínio     | por Omissão | Automático | Nulo |
| :------------ | :------------------------------ | :---------- | :---------- | :--------- | :--- |
| categoria     | categoria da tarefa             | Enum        | -           | Não        | Não  |
| horario       | horario                         | Char        | -           | Não        | Não  |
| data          | data                            | Char        | -           | Não        | Não  |
| status        | status                          | Enum        | -           | Não        | Não  |
| idFuncionario | Id associado a cada Funcionário | Int         | -           | Sim        | Não  |

- **Chave Estrangeira**
| Nome             | Coluna(s)      | Indexar |
| ---------------- | -------------- | ------- |
| idFuncionario    | idFuncionario  | Sim     |

## **Tabela Stock**
### Descrição da tabela Stock
A tabela stock apresenta todas as informações sobre o stock dos produtos.

#### COLUNAS <!-- omit in toc -->

| Nome        | Descrição                                 | Domínio     | por Omissão | Automático | Nulo |
| :---------- | :---------------------------------------- | :---------- | :---------- | :--------- | :--- |
| quantidade  | quantidade de stock                       | Bigint      | -           | Não        | Não  |
| codigoBarras| Código de barras acossiado a cada produto | Bigint      | -           | Não        | Não  |

- **Chave Estrangeira**
| Nome             | Coluna(s)      | Indexar |
| ---------------- | -------------- | ------- |
| codigoBarras     | idFuncionario  | Sim     |

---
| [< Previous](rebd03.md) | [^ Main](/../../) | [Next >](rebd05.md) |
| :---------------------- | :------------------------------------------------------: | ------------------: |
