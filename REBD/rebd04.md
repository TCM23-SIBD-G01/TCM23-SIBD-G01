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
### Descrição da tabela Loja
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
### Descrição da tabela Loja
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
| nif        |

- **Unicidade** (valores únicos)*:

| Nome    | Coluna(s)  |
| ------- | ---------- |
| nif     | nif        |


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

