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
| Id          | Nif          |   Morada                                               |   Nome            |     Iban                  |   Email                   |  Contacto  |
| :---------- | :----------- | :----------------------------------------------------- | :---------------- | :------------------------ | :------------------------ | :--------- |
| 4434618     | 273498176    |   Rua do Calvário, Casais, nº8 4620-091                |   José Nunes      | PT23245829148218459012348 | jose.nunes@gmail.com      |  914229916 |
| 4444589     | 542897137    |   Rua do Presa, Penamaior, nº2 4792-087                |   André Mendes    | PT37482928391284783883222 | andre.mendes@gmail.com    |  934278967 |
| 9823759     | 017924962    |   Rua do Clero, Arcos de Valdevez, nº44 4970-249       |   Angélica Moniz  | PT87734946961023591240725 | angie.moniz@gmail.com     |  919865020 |
| 4742353     | 987407107    |   Rua da Fontinha, Porto, nº47 4000-457                |   João Paiva      | PT09723047230712036015234 | joaom.paiva@gmail.com     |  962678678 |
| 4235365     | 019469601    |   Rua das Buganvílias, Cascais, nº47 2785-288          |   Alice Campos    | PT96123860741249393710572 | alice93.campos@outlook.pt |  934780756 |
| 1232547     | 111239401    |   Rua Porta da Serra, Portimão, nº30 8500-603          |   Alberto Preto   | PT71513189236192394704204 | albrtprt66@gmail.com      |  966678488 |
| 0875435     | 118640274    |   Rua dos Açores, Lisboa, nº11B 1000-001               |   Luísa Amorim    | PT96057057309547743434324 | luisaamorim@outlook.pt    |  919656645 |
| 2353657     | 000814029    |   Avenida da Praia, Porto, nº1231 3885-406             |   Augusto Guiomar | PT00024324323444440333325 | augusto.guiomar@gmail.com |  914456456 |
| 4455500     | 141564457    |   Travessa das Flores, Braga, nº23 4700-002            |   Maurício Pinto  | PT97498834234883423455532 | mauriciop@outlook.pt      |  914565686 |
| 1242455     | 070342813    |   Avenida 25 de Abril, Valongo, nº211 4440-452         |   Gerson Lobo     | PT11198749354536533534676 | globo678@gmail.com        |  938679780 |
| 5465342     | 071239641    |   Rua Guilherme Centazzi, Faro, nº25 8000-189          |   Luís Sousa      | PT98838463983447433335567 | luisss@outlook.pt         |  966789089 |
| 2344632     | 873987324    |   Avenida Central, Coimbra, nº10 3000-005              |   Francisco Beto  | PT07249659870759348702347 | franc.beto@gmail.com      |  935678890 |
| 4200056     | 666539135    |   Rua da Ponte, Guimarães, nº2 4800-006                |   Carlos Dinis    | PT01263794643862125343425 | carlitos90.dinis@gmil.com |  935654608 |
| 4778975     | 962396542    |   Rua Eça de Queirós, Viseu, nº31 3500-008             |   Albertina Silva | PT62395620475083498710472 | alsilva11@outlook.pt      |  968439790 |
| 4112353     | 012645019    |   Travessa do Mar, Setúbal, nº3 2900-009               |   Patrícia Almeida| PT02375049571296474280240 | paty.almeida@outlook.com  |  968924672 |
| 9745346     | 186691931    |   Rua de Cabo Verde, Aveiro, nº 14 3800-010            |   Beatriz Morte   | PT04680473495698465982749 | beamorreu000@gmail.com    |  966734865 |
| 1423246     | 090913434    |   Rua Junta, Coimbra, nº32  41-21                      |   Lucinda Lopo    | PT04583729384743974444777 | lululopo@gmail.com        |  965456672 |
| 4175384     | 965027116    |   Largo do Carmo, Évora, nº3A 7000-013                 |   Gonçalo Brás    | PT98649346283621322334425 | gongas.br02@gmail.com     |  914568689 |
| 4780420     | 981236545    |   Rua das Violetas, Faro, nº8 8000-014                 |   Vera Gonçalves  | PT48957294347502473497340 | veraaa99@gmail.com        |  915667785 |
| 4330539     | 961249604    |   Rua Pedro Vicente, Portalegre, nº35 7300-018         |   Dominique Félix | PT85438469346412459431439 | domfelix@gmail.com        |  916897864 |
| 2245864     | 198162024    |   Rua das Magnólias, Santarém, nº2 2000-020            |   Vicente Tavares | PT31435324536746367446367 | vic.tavares@outlook.pt    |  939785432 |
| 1497054     | 269532652    |   Rua do Pinhal, Parede, nº301 301-283                 |   Iolanda Cosme   | PT34676576854542347456666 | .io.io.cosme.@outlook.pt  |  915469676 |
| 3580000     | 456239573    |   Rua Nova da Santana, Viana do Castelo, nº10 4900-533 |   Valentina Santos| PT35467695436280989098978 | val.santos95@outlook.pt   |  934585665 |
| 0096367     | 359457205    |   Rua da Paradinha, Vila Real, nº7 5000-023            |   Miguel Carvalhal| PT34543245463245678787545 | migascrvlhl@outlook.pt    |  913242543 |
| 3557643     | 982350002    |   Avenida das Acácias, Lamego, nº14 3500-024           |   Hélder Paz      | PT12345678909876543245676 | http.az@gmail.com         |  965664535 |
| 5474265     | 142470324    |   Travessa dos Amores, Faro, nº1 8000-034              |   Vasco Lima      | PT45678765567786543222345 | vasco.lima@gmail.com      |  935686456 |
| 6776435     | 111153464    |   Rua São João de Deus, Funchal, nº11 9000-028         |   Matilde Carvalho| PT34567890897321234363233 | mat.carvlh@gmail.com      |  916745646 |
| 4436323     | 123412511    |   Rua da Fonte, Ponta Delgada, nº17 9500-029           |   Ivo Moura       | PT09876543456768456345678 | ivo.moura@gmail.com       |  963445553 |
| 4087636     | 312454123    |   Rua Dom Ferrão, Bragança, nº139 5300-025             |   Camilo Leal     | PT34657503297489324656865 | camileal69@outlook.pt     |  935887358 |
| 1245790     | 869560262    |   Rua Tavares dos Santos, Castelo Branco, nº18 6000-026|   Tiago Marmelo   | PT02837563892927475839294 | tigs.marmelo@gmail.com    |  915663244 |

### ENCOMENDA
| Id            |   IdLoja   | IdFornecedor |  DataEntrega  |  DataPedido    |  ValorEncomenda   |  Quantidade  |  MetodoEnvio   |
| :------------ | :--------- | :----------- | :------------ | :------------- | :---------------- | :----------- | :------------- |
|61535182290258 | 838373928  |    73937     | 27/03/2024    | 15/02/2024     | 200.00€           |  30          | Correio Normal |
|01724023650404 | 326507024  |    34647     | 
|91624027121425 | 877124986  |    34668     | 
|98162402472354 | 986356025  |    36458     | 
|96302750742350 | 253649462  |    25347     | 
|87858916411156 | 874979262  |    34654     | 
|44372469469145 | 968968415  |    35687     | 
|92658513072305 | 764739691  |    34776     | 
|74635327825352 | 142447977  |    34547     | 
|47258265824675 | 134596456  |    87656     | 
|22267457927135 | 752384545  |    45637     | 
|23496234062598 | 553535777  |    45875     | 
|86465536435435 | 142424357  |    78589     | 
|75858573221857 | 339572559  |    67874     | 
|74195862750200 | 002658266  |    67874     | 
|53633738273343 | 345447463  |    56587     | 
|86586213853252 | 164869246  |    86978     | 
|86234825103839 | 122455733  |    63456     | 
|87364987065929 | 572592598  |    75812     | 
|12423946129026 | 305823640  |    67989     | 
|23429632057240 | 571871528  |    67978     | 
|96604870849300 | 004236249  |    86360     | 
|87253934605724 | 225983650  |    76580     | 
|76513861496111 | 316491246  |    89400     | 
|20473496324972 | 598492659  |    67854     | 
|22842035720472 | 047204724  |    78579     | 
|98606856780683 | 141297000  |    67844     | 
|12971393573057 | 074918263  |    89567     | 
|92364043574120 | 462402535  |    34468     | 

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
