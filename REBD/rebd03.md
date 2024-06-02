# C3 : Normalização

## **Relações**

LOJA (_**id**_, localizacao, nome)

CLIENTE (_**nif**_,contacto, nome)

COMPRA (_**id**_, data, nomeCliente, valorcompra, descontoAplicado, metodoPagamento)

FORNECEDOR (_**id**_, morada, nome, iban, email, contacto)

ENCOMENDA (_**id**_, nif, dataEntrega, dataPedido, valorEncomenda, quantidade, metodoEnvio)

PRODUTO (_**codigoBarras**_, quantidade, preco, nome, sexo, estacao, categoria)

TAMANHO (_**codigo**_, categoriaPeca, unidadeMedida)

COR (_**codigoHexadecimal**_, nome)

MATERIAL (_**nome**_, composicao, propriedades, instrucoesCuidados)

FUNCIONARIO (_**nif**_, iban, quantidade, horario, nome, contacto, email, morada, idade)

TAREFA (descricao, horario, categoria, data, status)

STOCK (quantidade)


## **Normalização do Esquema Relacional**

### **1NF | 2NF | 3NF | BCNF**

### Loja
| Localizacao      |  Id        | Nome |
| :--------------- | :--------- | :----|
| Algarve          | 000000000  | B&R  |
| Lisboa           | 000000000  | B&R  |
| Castelo Branco   | 000000000  | B&R  |
| Aveiro           | 000000000  | B&R  |
| Porto            | 000000000  | B&R  |

### Compra
| Id       | Data       |  NomeCliente    |  ValorCompra  |   DescontoAplicado  |   MetodoPagamento   |
| :------- | :--------- | :-------------- | :------------ | :------------------ | :------------------ |
| 891-22   | 25/05/2024 |  Maria Andrade  |   25€         |    10%              |   mbway             |
| 895-45   | 29/05/2024 |  Inês Machado   |   30€         |    5%               |   cartão de Crédito |
| 920-32   | 15/06/2024 |  Joana Pacheco  |   10€         |    25%              |   dinheiro          |


### Cliente
| Contacto    | Nif           |  Nome
| :---------- | :------------ | :------------- |
| 912345981   | 273380087     |  Maria Andrade |
| 987789654   | 280099821     |  Inês Machado  |

### Fornecedor
| Id           | Nif          |   Morada                                  |   Nome         |     Iban   |   Email                |  Contacto  |
| :----------- | :----------- | :---------------------------------------- | :------------- | :--------- | :--------------------- | :--------- |
|              | 273498176    |   Rua do Calvário, Casais, nº8 4620-091   |   José Nunes   |            | jose.nunes@gmail.com   |  914229916 |
|              | 542897137    |   Rua do Presa, Penamaior, nº2 4792-087   |   André Mendes |            | andre.mendes@gmail.com |  934278967 |










---
[< Previous](rebd02.md) | [^ Main](/../../) | [Next >](rebd04.md)
:--- | :---: | ---: 
