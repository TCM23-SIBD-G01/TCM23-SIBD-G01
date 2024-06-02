# C4 : Esquema Relacional
## 01 Beatriz Martins a043545, Rita Nunes a043237 

**Esquema Relacional** 

## **Relações**
## **Tabela Loja**
### Descrição da tabela Loja
A tabela loja 

#### COLUNAS <!-- omit in toc -->

| Nome        | Descrição                    | Domínio     | por Omissão | Automático | Nulo |
| :---------- | :--------------------------- | :---------- | :---------- | :--------- | :--- |
| id          | identificador da tabela loja | BIGINT     | -           | Sim        | Não  |
| localizacao | local do estabelecimento     | Varchar     | -           | Não        | Não  |
| nome        | Nome do registo              | Varchar     | -           | Não        | Não  |

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
| nif         | identificador da tabela cliente | Integer     | -           | Sim        | Não  |
| contacto    | número de telemóvel             | Integer     | -           | Não        | Não  |
| nome        | Nome do registo                 | Varchar     | -           | Não        | Não  |

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
| id                 | identificador da tabela compra  | BIGINT     | -           | Sim        | Não  |
| data               | data da realização da compra    | Date        | -           | Sim        | Não  |
| nomeCliente        | Nome do registo                 | Varchar     | -           | Não        | Não  |
| valorCompra        | Preço total da compra           | Decimal     | -           | Sim        | Não  |
| descontosAplicados | Descontos aplicados             | Decimal     | -           | Não        | Não  |
| metodoPagamento    | Método de pagamento utilizado   | Varchar     | -           | Não        | Não  |

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
| id       | identificador da tabela fornecedor  | BIGINT     | -           | Sim        | Não  |
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

| Nome    | Coluna(s)  |
| ------- | ---------- |
| id      | id         |

## **Tabela Encomenda**
### Descrição da tabela Encomenda
A tabela encomenda 

#### COLUNAS <!-- omit in toc -->

| Nome           | Descrição                           | Domínio    | por Omissão | Automático | Nulo |
| :------------- | :---------------------------------- | :--------- | :---------- | :--------- | :--- |
| id             | identificador da tabela encomenda   | BIGINT     | -           | Sim        | Não  |
| idLoja         | id da Loja                          | BIGINT     | -           | Sim        | Não  |
| dataPedido     | data do pedido                      | Date       | -           | Sim        | Não  |
| valorEncomenda | valor da encomenda                  | Decimal    | -           | Sim        | Não  |
| dataEntrega    | data de entrega                     | Date       | -           | Sim        | Não  |
| metodoEnvio    | método de envio                     | Varchar    | -           | Não        | Não  |
| idFornecedor   | id do Fornecedor                    | BIGINT     | -           | Não        | Não  |
| quantidade     | quantidade                          | BIGINT     | -           | Não        | Não  |

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
| codigoBarras | identificador da tabela produto            | Integer     | -           | Sim        | Não  |
| sexo         | identidade do cliente associada ao produto | Varchar     | -           | Não        | Não  |
| estacao      | estação do ano associada ao produto        | Varchar     | -           | Não        | Não  |
| categoria    | categoria                                  | Varchar     | -           | Não        | Não  |
| nome         | nome de produto                            | Varchar     | -           | Não        | Não  |
| preco        | valor em €                                 | Decimal     | -           | Sim        | Não  |
| quantidade   | quantidade                                 | BIGINT      | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)      |
| -------------- |
| codigoBarras   |

- **Unicidade** (valores únicos)*:

| Nome         | Coluna(s)     |
| ------------ | ------------- |
| codigoBarras | codigoBarras  |


## **Tabela Tamanho**
### Descrição da tabela Tamanho
A tabela tamanho 

#### COLUNAS <!-- omit in toc -->

| Nome          | Descrição                        | Domínio     | por Omissão | Automático | Nulo |
| :------------ | :------------------------------- | :---------- | :---------- | :--------- | :--- |
| codigo        | identificador da tabela produto  | BIGINT      | -           | Sim        | Não  |
| unidadeMedida | unidade de medida                | Integer     | -           | Não        | Não  |

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
| codigoHexadecimal | identificador da tabela cor  | Integer     | -           | Sim        | Não  |
| nome              | nome da cor                  | Varchar     | -           | Não        | Não  |

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
| nome               | nome do material            | Varchar     | -           | Não        | Não  |
| composicao         | composicao do material      | Varchar     | -           | Não        | Não  |
| propriedades       | propriedades do material    | Varchar     | -           | Não        | Não  |
| instrucoesCuidado  | instruções de cuidado a ter | Varchar     | -           | Não        | Não  |


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
| id         | identificador da tabela funcionario | Integer     | -           | Sim        | Não  |
| nome       | nome completo                       | Varchar     | -           | Não        | Não  |
| quantidade | número de funcionários              | Integer     | -           | Não        | Não  |
| contacto   | número telemóvel                    | Integer     | -           | Não        | Não  |
| nif        | número de identificação fiscal      | Integer     | -           | Não        | Não  |
| morada     | morada                              | Varchar     | -           | Não        | Não  |
| iban       | iban                                | Integer     | -           | Não        | Não  |
| email      | email eletrónico                    | Varchar     | -           | Não        | Não  |
| horario    | horário de trabalho                 | DateTime    | -           | Não        | Não  |
| idade      | idade                               | Integer     | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)  |
| ---------- |
| id        |

- **Unicidade** (valores únicos)*:

| Nome    | Coluna(s)  |
| ------- | ---------- |
| id      | id         |


## **Tabela Tarefa**
### Descrição da tabela Tarefa
A tabela tarefa 

#### COLUNAS <!-- omit in toc -->

| Nome          | Descrição                   | Domínio     | por Omissão | Automático | Nulo |
| :------------ | :-------------------------- | :---------- | :---------- | :--------- | :--- |
| categoria     | categoria da tarefa         | Varchar     | -           | Não        | Não  |
| horario       | horario                     | Time        | -           | Não        | Não  |
| data          | data                        | Date        | -           | Não        | Não  |
| status        | status                      | Varchar     | -           | Não        | Não  |
| idFuncionario | Id associado ao Funcionário | Bigint      | -           | Sim        | Não  |

- **Chave Estrangeira**
| Nome             | Coluna(s)      |
| ---------------- | -------------- |
| idFuncionario    | idFuncionario  |

## **Tabela Stock**
### Descrição da tabela Stock
A tabela stock 

#### COLUNAS <!-- omit in toc -->

| Nome       | Descrição           | Domínio     | por Omissão | Automático | Nulo |
| :--------- | :------------------ | :---------- | :---------- | :--------- | :--- |
| quantidade | quantidade de stock | Bigint      | -           | Não        | Não  |


