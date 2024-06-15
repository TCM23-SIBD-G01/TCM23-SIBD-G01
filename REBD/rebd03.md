# C3 : Normalização

## **Relações**

LOJA (_**id**_, localizacao, nome)

CLIENTE (_**nif**_,contacto, nome)

COMPRA (_**id**_, data, nomeCliente, valorcompra, descontoAplicado, metodoPagamento)

FORNECEDOR (_**id**_, morada, nome, iban, email, contacto)

ENCOMENDA (_**id**_, nif, dataEntrega, dataPedido, valorEncomenda, quantidade, metodoEnvio, idFornecedor)

PRODUTO (_**codigoBarras**_, quantidade, preco, nome, sexo, estacao, categoria)

TAMANHO (_**codigo**_, categoriaPeca, unidadeMedida)

COR (_**codigoHexadecimal**_, nome)

MATERIAL (_**nome**_, composicao, propriedades, instrucoesCuidados)

FUNCIONARIO (_**nif**_, iban, quantidade, horario, nome, contacto, email, morada, idade)

TAREFA (descricao, horario, categoria, data, status)

STOCK (quantidade)


## **Normalização do Esquema Relacional**

### **1NF | 2NF | 3NF | BCNF**

### LOJA
| Localizacao      |  Id        | Nome |
| :--------------- | :--------- | :----|
| Algarve          | 042429899  | B&R  |
| Lisboa           | 042429900  | B&R  |
| Castelo Branco   | 042429901  | B&R  |
| Aveiro           | 042429902  | B&R  |
| Porto            | 042429903  | B&R  |

### COMPRA
| Id       | Data       |  NomeCliente    |  ValorCompra  |   DescontoAplicado  |   MetodoPagamento   |
| :------- | :--------- | :-------------- | :------------ | :------------------ | :------------------ |
| 891-22   | 25/05/2024 |  Maria Andrade  |   25€         |    10%              |   mbway             |
| 895-45   | 29/05/2024 |  Inês Machado   |   30€         |    5%               |   cartão de Crédito |
| 920-32   | 15/06/2024 |  Joana Pacheco  |   10€         |    25%              |   dinheiro          |

### CLIENTE
| Contacto    | Nif           |  Nome
| :---------- | :------------ | :------------- |
| 912345981   | 273380087     |  Maria Andrade |
| 987789654   | 280099821     |  Inês Machado  |

### FORNECEDOR
| Id           | Nif          |   Morada                                  |   Nome         |     Iban                  |   Email                |  Contacto  |
| :----------- | :----------- | :---------------------------------------- | :------------- | :------------------------ | :--------------------- | :--------- |
| 444-4418     | 273498176    |   Rua do Calvário, Casais, nº8 4620-091   |   José Nunes   | PT23245829148218459012348 | jose.nunes@gmail.com   |  914229916 |
| 444-45555    | 542897137    |   Rua do Presa, Penamaior, nº2 4792-087   |   André Mendes | PT37482928391284783883222 | andre.mendes@gmail.com |  934278967 |

### ENCOMENDA
| Id            |   IdLoja   | IdFornecedor |  DataEntrega  |  DataPedido    |  ValorEncomenda   |  Quantidade  |  MetodoEnvio   |
| :------------ | :--------- | :----------- | :------------ | :------------- | :---------------- | :----------- | :------------- |
|61535182290258 | 838373928  |    73937     | 27/03/2024    | 15/02/2024     | 200€              |  30          | Correio Normal |

### PRODUTO
| CodigoBarras |  Quantidade |   Preco   |        Nome          |   Sexo      |   Estacao   |
| :----------- | :---------- | :-------- | :------------------- | :---------- | :---------- |
| 2813-888     |    1        | 16€* 1    | Calções Largos       |  Masculinho |  Primavera  |
| 2819-989     |    5        | 25€* 5    | Vestido Floral       |  Feminino   |  Verão      |
| 2819-989     |    10       | 20€* 10   | Calças Boca de Sino  |  Feminino   |  Primavera  |

### TAMANHO
| Codigo    |  CategoriaPeça     |   UnidadeMedida |
| :-------- | :----------------- | :-------------- |
| 2011-333  |                    | XS              |
| 2011-333  |                    | XL              |

### COR
| CódigoHexadecimal  | Nome    |
| :----------------- | :------ |
| #0000FF            | Azul    |
| #A020F0            | Roxo    |

### MATERIAL
| Nome | Composicao   | Propriedades | InstruçõesCuidados           |
| :--- | :----------- | :----------- | :--------------------------- |
|Malha | 100% algodão | flexível     | evitar usar máquina de secar |

### FUNCIONARIO
| Nif          | Iban          | Quantidade|  Horario    | Nome   | Contacto  | Email   | Morada      | Idade |  Id  |
| :----------- | :------------ | :-------- | :---------- | :----- | :-------- | :------ | :---------- | :---- | :------- |

### Stock       
| #codigoBarras -> produto  | quantidade |
| :------------------------ | :--------- |
|                           | 4          |

### Tarefas
|#id -> funcionarios | descricao |
| :----------------- | :-------- |











---
[< Previous](rebd02.md) | [^ Main](/../../) | [Next >](rebd04.md)
:--- | :---: | ---: 
