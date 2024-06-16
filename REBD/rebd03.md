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
| Trás-os-Montes   | 042429904  | B&R  |
| Faro             | 042429905  | B&R  |
| Gaia             | 042429906  | B&R  |
| Coimbra          | 042429907  | B&R  |
| Bragança         | 042429908  | B&R  |
| Leiria           | 042429909  | B&R  |
| Madeira          | 042429910  | B&R  |
| Vila Real        | 042429911  | B&R  |
| Setúbal          | 042429912  | B&R  |
| Coimbra          | 042429913  | B&R  |
| Portalegre       | 042429914  | B&R  |
| Beja             | 042429915  | B&R  |
| Guarda           | 042429916  | B&R  |
| Évora            | 042429917  | B&R  |
| Santarém         | 042429918  | B&R  |
| Viana do Castelo | 042429919  | B&R  |
| Viseu            | 042429920  | B&R  |
| Braga            | 042429921  | B&R  |
| Fátima           | 042429922  | B&R  |
| Sintra           | 042429923  | B&R  |
| Espinho          | 042429924  | B&R  |
| Ovar             | 042429925  | B&R  |
| Matosinhos       | 042429926  | B&R  |
| Açores           | 042429927  | B&R  |
| Guimarães        | 042429928  | B&R  |

### COMPRA
| Id       | Data       |  NomeCliente    |  ValorCompra  |   DescontoAplicado  |   MetodoPagamento   |
| :------- | :--------- | :-------------- | :------------ | :------------------ | :------------------ |
| 891-22   | 25/05/2024 |  Maria Andrade  |   25.00€      |    10%              |   mbway             |
| 895-45   | 29/05/2024 |  Inês Machado   |   30.00€      |    5%               |   cartão de crédito |
| 920-32   | 15/06/2024 |  Joana Pacheco  |   10.00€      |    25%              |   dinheiro          |
| 922-40   | 04/03/2024 |  António Silva  |   83.99€      |    5%               |   cartão de crédito |
| 345-08   | 08/06/2023 |  Mário Santos   |   19.99€      |    38%              |   mbway             |
| 824-67   | 21/12/2022 |  Sílvia Marques |   17.00€      |    10%              |   dinheiro          |
| 551-09   | 30/07/2024 |  Leonor Gomes   |   09.99€      |    20%              |   dinheiro          |
| 782-44   | 09/09/2019 |  Carina Patrão  |   44.85€      |    5%               |   cartão de crédito |
| 628-00   | 22/02/2016 |  Lúcia Pereira  |   39.99€      |    5%               |   cartão de crédito |
| 890-21   | 04/04/2022 |  Gustavo Nuno   |   50.00€      |    10%              |   cartão de débito  |
| 546-64   | 09/11/2020 |  Paula Esmoriz  |   20.03€      |    25%              |   mbway             |
| 287-22   | 07/10/2020 |  Jerónimo Ramos |   25.00€      |    0%               |   dinheiro          |
| 549-77   | 01/10/2020 |  Gabriela Carmo |   88.98€      |    10%              |   cheque            |
| 213-24   | 11/08/2023 |  Diana Teixeira |   56.45€      |    5%               |   cartão de débito  |
| 650-92   | 23/03/2019 |  Óscar Oliveira |   30.00€      |    50%              |   mbway             |
| 294-61   | 29/10/2018 |  Arnaldo Foz    |   10.99€      |    5%               |   dinheiro          |
| 331-11   | 28/07/2019 |  Branca Cruz    |   10.99€      |    25%              |   dinheiro          |
| 825-07   | 15/09/2017 |  Teresa Braga   |   12.00€      |    5%               |   mbway             |
| 142-13   | 16/05/2015 |  Ana Portugal   |   35.00€      |    10%              |   cartão de crédito |
| 165-78   | 24/02/2012 |  Joaquim Gomez  |   99.98€      |    38%              |   cheque            |
| 092-50   | 01/01/2023 |  Francisca Alves|   65.00€      |    5%               |   cartão de débito  |
| 076-32   | 23/01/2024 |  Paulo Borges   |   69.95€      |    25%              |   cartão de débito  |
| 692-43   | 20/02/2021 |  Armanda Macedo |   70.02€      |    30%              |   cartão de crédito |
| 444-65   | 10/06/2012 |  Igor Guimarães |   84.55€      |    0%               |   cartão de crédito |
| 217-34   | 06/05/2013 |  Jorge Pais     |   47.00€      |    5%               |   mbway             |
| 926-56   | 17/08/2013 |  Fernanda Ruiz  |   66.00€      |    10%              |   mbway             |
| 003-87   | 28/09/2023 |  Rafael Nunes   |   62.99€      |    10%              |   cartão de crédito |
| 024-56   | 08/11/2021 |  Gil Menezes    |   09.00€      |    50%              |   dinheiro          |
| 100-55   | 01/04/2020 |  Gusmão Feio    |   50.07€      |    6%               |   cartão de débito  |
| 004-18   | 29/11/2022 |  Roma Martins   |   99.00€      |    0%               |   cheque            |

### CLIENTE
| Contacto    | Nif           |  Nome
| :---------- | :------------ | :-------------- |
| 912345981   | 273380087     |  Maria Andrade  |
| 937789654   | 280099821     |  Inês Machado   |
| 912276881   | 003758739     |  Joana Pacheco  |
| 934597661   | 027462845     |  António Silva  |
| 917375216   | 087275922     |  Mário Santos   |
| 969658218   | 375820372     |  Sílvia Marques |
| 963937769   | 114354532     |  Leonor Gomes   |
| 967035529   | 226556532     |  Carina Patrão  |
| 914033390   | 386336655     |  Lúcia Pereira  |
| 932771447   | 132976735     |  Gustavo Nuno   |
| 932062110   | 222678539     |  Paula Esmoriz  |
| 935743180   | 083500344     |  Jerónimo Ramos |
| 918754250   | 014830223     |  Gabriela Carmo |
| 915676303   | 112472071     |  Diana Teixeira |
| 932487452   | 300839457     |  Óscar Oliveira |
| 965680594   | 176205730     |  Arnaldo Foz    |
| 968869635   | 126493925     |  Branca Cruz    |
| 969267407   | 281365261     |  Teresa Braga   |
| 916144221   | 271543750     |  Ana Portugal   |
| 934321863   | 271537582     |  Joaquim Gomez  |
| 932512652   | 175495945     |  Francisca Alves|
| 911324781   | 373837917     |  Paulo Borges   |
| 934138591   | 352848003     |  Armanda Macedo |
| 916468801   | 290037240     |  Igor Guimarães |
| 907708728   | 000001785     |  Jorge Pais     |
| 960806564   | 283820300     |  Fernanda Ruiz  |
| 960405368   | 117495622     |  Rafael Nunes   |
| 965284549   | 293576030     |  Gil Menezes    |
| 934166452   | 284372047     |  Gusmão Feio    |
| 963541343   | 215385046     |  Roma Martins   |

### FORNECEDOR
| Id           | Nif          |   Morada                                         |   Nome           |     Iban                  |   Email                |  Contacto  |
| :----------- | :----------- | :----------------------------------------------- | :--------------- | :------------------------ | :--------------------- | :--------- |
| 444-4418     | 273498176    |   Rua do Calvário, Casais, nº8 4620-091          |   José Nunes     | PT23245829148218459012348 | jose.nunes@gmail.com   |  914229916 |
| 444-45555    | 542897137    |   Rua do Presa, Penamaior, nº2 4792-087          |   André Mendes   | PT37482928391284783883222 | andre.mendes@gmail.com |  934278967 |
| 444-4444     | 017924962    |   Rua do Clero, Arcos de Valdevez, nº44 4970-249 |   Angélica Moniz | PT87734946961023591240725 | angie.moniz@gmail.com  |  919865020 |
| 444-4444     | 987407107    |   Rua da Fontinha, Porto, nº47 4000-457          | 
| 444-4444     | 019469601    |   Rua das Buganvílias, Cascais, nº47 2785-288    |
| 444-4444     | 111239401    |   Rua Porta da Serra, Portimão, nº30 8500-603
| 444-4444     | 118640274    |   Rua do Sol, Lisboa, nº15 1000-001
| 444-4444     | 000814029    |   Avenida da Praia, Porto, nº25 4050-001
| 444-4444     | 141564457    |   Travessa das Flores, Braga, nº10 4700-002
| 444-4444     | 070342813    |   Largo do Castelo, Sintra, nº7 2710-003
| 444-4444     | 071239641    |   Rua das Oliveiras, Faro, nº3 8000-004
| 444-4444     | 873987324    |   Avenida Central, Coimbra, nº12 3000-005
| 444-4444     | 666539135    |   Praça da Liberdade, Guimarães, nº8 4800-006
| 444-4444     | 962396542    |   Rua dos Cedros, Viseu, nº5 3500-008
| 444-4444     | 012645019    |   Travessa do Mar, Setúbal, nº2 2900-009
| 444-4444     | 186691931    |   Rua dos Lírios, Aveiro, nº 10 3800-010
| 444-4444     | 090913434    |   Travessa das Rosas, Coimbra, nº3 3000-012
| 444-4444     | 965027116    |   Largo do Carmo, Évora, nº1 7000-013
| 444-4444     | 981236545    |   Rua das Violetas, Faro, nº8 8000-014
| 444-4444     | 961249604    |   Rua dos Girassóis, Portalegre, nº6 7300-018
| 444-4444     | 198162024    |   Rua das Magnólias, Santarém, nº2 2000-020
| 444-4444     | 269532652    |   Avenida dos Plátanos, Setúbal, nº7 2900-021
| 444-4444     | 456239573    |   Largo da Sé, Viana do Castelo, nº9 4900-022
| 444-4444     | 359457205    |   Rua das Hortênsias, Vila Real, nº11 5000-023
| 444-4444     | 982350002    |   Avenida das Acácias, Viseu, nº14 3500-024
| 444-4444     | 142470324    |   Travessa dos Amores, Faro, nº1 8000-034
| 444-4444     | 111153464    |   Largo da Estação, Funchal, nº11 9000-028
| 444-4444     | 123412511    |   Rua da Fonte, Ponta Delgada, nº4 9500-029
| 444-4444     | 312454123    |   Rua dos Pinheiros, Bragança, nº6 5300-025
| 444-4444     | 869560262    |   Avenida Principal, Castelo Branco, nº3 6000-026

### ENCOMENDA
| Id            |   IdLoja   | IdFornecedor |  DataEntrega  |  DataPedido    |  ValorEncomenda   |  Quantidade  |  MetodoEnvio   |
| :------------ | :--------- | :----------- | :------------ | :------------- | :---------------- | :----------- | :------------- |
|61535182290258 | 838373928  |    73937     | 27/03/2024    | 15/02/2024     | 200.00€           |  30          | Correio Normal |
|01724023650404 | 326507024  |
|91624027121425 | 877124986  |
|98162402472354 | 986356025  |
|96302750742350 | 253649462
|87858916411156 | 874979262
|44372469469145 | 968968415
|92658513072305 | 764739691
|74635327825352 | 142447977
|47258265824675 | 134596456
|22267457927135 | 752384545
|23496234062598 | 553535777
|86465536435435 | 142424357
|75858573221857 | 339572559
|74195862750200 | 002658266
|53633738273343 | 345447463
|86586213853252 | 164869246
|86234825103839 | 122455733
|87364987065929 | 572592598
|12423946129026 | 305823640
|23429632057240 | 571871528
|96604870849300 | 004236249
|87253934605724 | 225983650
|76513861496111 | 316491246
|20473496324972 | 598492659
|22842035720472 | 047204724
|98606856780683 | 141297000
|12971393573057 | 074918263
|92364043574120 | 462402535

### PRODUTO
| CodigoBarras |  Quantidade |   Preco  |        Nome          |   Sexo      |   Estacao   |
| :----------- | :---------- | :------- | :------------------- | :---------- | :---------- |
| 2813-888     | 1           | 16.20€   | Calções Largos       |  Masculinho |  Primavera  |
| 2819-989     | 5           | 25.05€   | Vestido Floral       |  Feminino   |  Verão      |
| 2819-989     | 10          | 20.10€   | Calças Boca de Sino  |  Feminino   |  Primavera  |
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|

### TAMANHO
| Codigo    |  CategoriaPeça     |   UnidadeMedida |
| :-------- | :----------------- | :-------------- |
| XS        | T'shirt            | EUR             |
| XL        | Camisa             | EUR             |
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|

### COR
| CódigoHexadecimal  | Nome    |
| :----------------- | :------ |
| #0000FF            | Azul    |
| #A020F0            | Roxo    |
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|

### MATERIAL
| Nome | Composicao   | Propriedades | InstruçõesCuidados           |
| :--- | :----------- | :----------- | :--------------------------- |
|Malha | 100% algodão | Flexível     | Evitar usar máquina de secar |
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|

### FUNCIONARIO
| Nif          | Iban          | Quantidade|  Horario    | Nome   | Contacto  | Email   | Morada      | Idade |  Id      |
| :----------- | :------------ | :-------- | :---------- | :----- | :-------- | :------ | :---------- | :---- | :------- |
| 299526933    |
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|

### Stock       
| #codigoBarras -> produto  | quantidade |
| :------------------------ | :--------- |
|                           | 4          |
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|

### Tarefas
|#id -> funcionarios | descricao |
| :----------------- | :-------- |
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|











---
[< Previous](rebd02.md) | [^ Main](/../../) | [Next >](rebd04.md)
:--- | :---: | ---: 
