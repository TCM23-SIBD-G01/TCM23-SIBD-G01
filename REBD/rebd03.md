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
| 891-22   | 25/05/2024 |  Maria Andrade  |   25.00€      |    10%              |   mbway             |
| 895-45   | 29/05/2024 |  Inês Machado   |   30.00€      |    5%               |   cartão de crédito |
| 920-32   | 15/06/2024 |  Joana Pacheco  |   10.00€      |    25%              |   dinheiro          |
| 922-40   | 04/03/2024 |  António Silva  |   83.99€      |    5%               |   cartão de crédito |
| 345-08   | 08/06/2023 |  Mário Santos   |   19.99€      |    38%              |   mbway             |
| 824-67   | 21/12/2022 |  Sílvia Marques |   17.00€      |    10%              |   dinheiro          |

### CLIENTE
| Contacto    | Nif           |  Nome
| :---------- | :------------ | :-------------- |
| 912345981   | 273380087     |  Maria Andrade  |
| 937789654   | 280099821     |  Inês Machado   |
| 912276881   | 003758739     |  Joana Pacheco  |
| 934597661   | 027462845     |  António Silva  |
| 917375216   | 087275922     |  Mário Santos   |
| 969658218   | 375820372     |  Sílvia Marques |

### FORNECEDOR
| Id          | Nif          |   Morada                                               |   Nome            |     Iban                  |   Email                   |  Contacto  |
| :---------- | :----------- | :----------------------------------------------------- | :---------------- | :------------------------ | :------------------------ | :--------- |
| 73937       | 273498176    |   Rua do Calvário, Casais, nº8 4620-091                |   José Nunes      | PT23245829148218459012348 | jose.nunes@gmail.com      |  914229916 |
| 36458       | 542897137    |   Rua do Presa, Penamaior, nº2 4792-087                |   André Mendes    | PT37482928391284783883222 | andre.mendes@gmail.com    |  934278967 |
| 86360       | 017924962    |   Rua do Clero, Arcos de Valdevez, nº44 4970-249       |   Angélica Moniz  | PT87734946961023591240725 | angie.moniz@gmail.com     |  919865020 |
| 76580       | 987407107    |   Rua da Fontinha, Porto, nº47 4000-457                |   João Paiva      | PT09723047230712036015234 | joaom.paiva@gmail.com     |  962678678 |
| 25347       | 019469601    |   Rua das Buganvílias, Cascais, nº47 2785-288          |   Alice Campos    | PT96123860741249393710572 | alice93.campos@outlook.pt |  934780756 |

### ENCOMENDA
| Id            |   IdLoja   | IdFornecedor |  DataEntrega  |  DataPedido    |  ValorEncomenda   |  Quantidade  |  MetodoEnvio          |
| :------------ | :--------- | :----------- | :------------ | :------------- | :---------------- | :----------- | :-------------------- |
|61535182290258 | 042429918  |    73937     | 27/03/2024    | 15/02/2024     | 200.00€           |  30          | Correios Normal       |
|01724023650404 | 042429926  |    34647     | 04/04/2024    | 04/03/2024     | 400.00€           |  80          | Correios Express      |
|91624027121425 | 042429916  |    34668     | 30/03/2024    | 25/03/2024     | 150.00€           |  20          | Transportadora Normal |
|98162402472354 | 042429927  |    36458     | 06/05/2023    | 16/05/2023     | 50.00€            |  7           | Correios Normal       |

### PRODUTO
| CodigoBarras |  Quantidade |   Preco  |        Nome             |   Sexo      |   Estacao   |
| :----------- | :---------- | :------- | :---------------------- | :---------- | :---------- |
| 2813888     | 1           | 16.20€    | Calções Largos          |  Homem      |  Primavera  |
| 2819989     | 5           | 25.05€    | Vestido Floral          |  Mulher     |  Verão      |
| 2819979     | 10          | 20.10€    | Calças Boca de Sino     |  Mulher     |  Primavera  |
| 2935777     | 1           | 15.85€    | Calções de Ganga        |  Homem      |  Verão      |
| 2934877     | 2           | 29.99€    | Calças Fato Treino      |  Unisex     |  Outono     |

### TAMANHO
| Codigo    |  CategoriaPeça     |  UnidadeMedida  |
| :-------- | :----------------- | :-------------- |
| XS        | T'shirt            | EUR             |
| XL        | Camisa             | EUR             |
| S         | Camisola           | EUR             |
| M         | Calças             | EUR             |
| XXL       | Casaco             | EUR             |

### COR
| CódigoHexadecimal  | Nome     |
| :----------------- | :------- |
| #0000FF            | Azul     |
| #A020F0            | Roxo     |
| #39D10A            | Verde    |
| #FA0505            | Vermelho |
| #FFA500            | Amarelo  |

### MATERIAL
| Nome     | Composicao   | Propriedades | InstruçõesCuidados           |
| :------- | :----------- | :----------- | :--------------------------- |
|Malha     | 100% algodão | Flexível     | Evitar usar máquina de secar |
|Linho     | 0% algodão   | Não Flexível | Evitar usar máquina de secar |
|Seda      | 10% algodão  | Flexível     | Evitar usar máquina de secar |
|Fibra     | 0% algodão   | Flexível     | Evitar usar máquina de secar |
|Poliéster | 50% algodão  | Flexível     | Evitar usar máquina de secar |

### FUNCIONARIO
| Nif          | Iban            | Horario | Nome           | Contacto  | Email                   | Morada                                                | Idade |  Id    |
| :----------- | :------------   | :------ | :------------- | :-------- | :---------------------- | :---------------------------------------------------- | :---- | :----- |
| 299526933    | PT8792349654    | FT      | Paula Mota     | 935789176 | paula.mota@gmail.com    | Rua da Padaria, Quelfes, nº29 8700-275                | 29    | 91274  |
| 093570125    | PT9826359875    | FT      | Sofia Ramos    | 960330420 | sofi02.ramos@gmail.com  | Rua Marracuene, Coimbra, nº10 3030-061                | 22    | 26960  |
| 124975432    | PT0238472947    | PT      | Lara Mondego   | 916089190 | lararmondego@gmail.com  | Rua Direita, Leça da Palmeira, nº452 4450-665         | 19    | 00916  |
| 827402809    | PT1873930250    | FT      | Diogo Matos    | 967772327 | diogom99@outlook.pt     | Travessa Senhor do Calvário, Rio Tinto, nº36 4435-448 | 25    | 16327  |
| 518475314    | PT4173857154    | PT      | Rui Figueiredo | 930010450 | rfigueiredo@gmail.com   | Rua de Sant'Anna, Ponta Delgada, nº72A 9500-078       | 20    | 56894  |

### Stock       
| CodigoBarras | Quantidade |
| :------------| :--------- |
| 2813888      | 4          |
| 2819989      | 12         |
| 2819979      | 20         |
| 2935777      | 3          |
| 2934877      | 10         |

### Tarefa
| IdFuncionario    | Descricao             | Horario     | Categoria              | Data       | Status       |
| :--------------- | :-------------------- | :---------- | :--------------------- | :--------- | :----------- |
| 91274            | apoio cliente         | 14:50-16:00 | atendimento ao cliente | 2024-06-17 | Por fazer    |
| 26960            | ajudar clientes       | 13:00-19:00 | atendimento ao cliente | 2023-05-15 | Em progresso |
| 00916            | restock de calças     | 09:00-10:30 | restock                | 2011-10-10 | Acabado      |
| 16327            | restock de camisas    | 08:00-09:00 | restock                | 2011-10-10 | Acabado      |
| 56894            | limpar casa de banho  | 16:20-16:50 | limpeza                | 2011-10-10 | Acabado      |

---
[< Previous](rebd02.md) | [^ Main](/../../) | [Next >](rebd04.md)
:--- | :---: | ---: 
