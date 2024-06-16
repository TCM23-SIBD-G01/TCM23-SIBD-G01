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
| 73937       | 273498176    |   Rua do Calvário, Casais, nº8 4620-091                |   José Nunes      | PT23245829148218459012348 | jose.nunes@gmail.com      |  914229916 |
| 36458       | 542897137    |   Rua do Presa, Penamaior, nº2 4792-087                |   André Mendes    | PT37482928391284783883222 | andre.mendes@gmail.com    |  934278967 |
| 86360       | 017924962    |   Rua do Clero, Arcos de Valdevez, nº44 4970-249       |   Angélica Moniz  | PT87734946961023591240725 | angie.moniz@gmail.com     |  919865020 |
| 76580       | 987407107    |   Rua da Fontinha, Porto, nº47 4000-457                |   João Paiva      | PT09723047230712036015234 | joaom.paiva@gmail.com     |  962678678 |
| 25347       | 019469601    |   Rua das Buganvílias, Cascais, nº47 2785-288          |   Alice Campos    | PT96123860741249393710572 | alice93.campos@outlook.pt |  934780756 |
| 67854       | 111239401    |   Rua Porta da Serra, Portimão, nº30 8500-603          |   Alberto Preto   | PT71513189236192394704204 | albrtprt66@gmail.com      |  966678488 |
| 89400       | 118640274    |   Rua dos Açores, Lisboa, nº11B 1000-001               |   Luísa Amorim    | PT96057057309547743434324 | luisaamorim@outlook.pt    |  919656645 |
| 67989       | 000814029    |   Avenida da Praia, Porto, nº1231 3885-406             |   Augusto Guiomar | PT00024324323444440333325 | augusto.guiomar@gmail.com |  914456456 |
| 34647       | 141564457    |   Travessa das Flores, Braga, nº23 4700-002            |   Maurício Pinto  | PT97498834234883423455532 | mauriciop@outlook.pt      |  914565686 |
| 75812       | 070342813    |   Avenida 25 de Abril, Valongo, nº211 4440-452         |   Gerson Lobo     | PT11198749354536533534676 | globo678@gmail.com        |  938679780 |
| 78579       | 071239641    |   Rua Guilherme Centazzi, Faro, nº25 8000-189          |   Luís Sousa      | PT98838463983447433335567 | luisss@outlook.pt         |  966789089 |
| 45637       | 873987324    |   Avenida Central, Coimbra, nº10 3000-005              |   Francisco Beto  | PT07249659870759348702347 | franc.beto@gmail.com      |  935678890 |
| 67844       | 666539135    |   Rua da Ponte, Guimarães, nº2 4800-006                |   Carlos Dinis    | PT01263794643862125343425 | carlitos90.dinis@gmil.com |  935654608 |
| 89567       | 962396542    |   Rua Eça de Queirós, Viseu, nº31 3500-008             |   Albertina Silva | PT62395620475083498710472 | alsilva11@outlook.pt      |  968439790 |
| 34654       | 012645019    |   Travessa do Mar, Setúbal, nº3 2900-009               |   Patrícia Almeida| PT02375049571296474280240 | paty.almeida@outlook.com  |  968924672 |
| 87463       | 186691931    |   Rua de Cabo Verde, Aveiro, nº 14 3800-010            |   Beatriz Morte   | PT04680473495698465982749 | beamorreu000@gmail.com    |  966734865 |
| 34468       | 090913434    |   Rua Junta, Coimbra, nº32  41-21                      |   Lucinda Lopo    | PT04583729384743974444777 | lululopo@gmail.com        |  965456672 |
| 63456       | 965027116    |   Largo do Carmo, Évora, nº3A 7000-013                 |   Gonçalo Brás    | PT98649346283621322334425 | gongas.br02@gmail.com     |  914568689 |
| 67978       | 981236545    |   Rua das Violetas, Faro, nº8 8000-014                 |   Vera Gonçalves  | PT48957294347502473497340 | veraaa99@gmail.com        |  915667785 |
| 78589       | 961249604    |   Rua Pedro Vicente, Portalegre, nº35 7300-018         |   Dominique Félix | PT85438469346412459431439 | domfelix@gmail.com        |  916897864 |
| 34668       | 198162024    |   Rua das Magnólias, Santarém, nº2 2000-020            |   Vicente Tavares | PT31435324536746367446367 | vic.tavares@outlook.pt    |  939785432 |
| 86978       | 269532652    |   Rua do Pinhal, Parede, nº301 301-283                 |   Iolanda Cosme   | PT34676576854542347456666 | .io.io.cosme.@outlook.pt  |  915469676 |
| 35687       | 456239573    |   Rua Nova da Santana, Viana do Castelo, nº10 4900-533 |   Valentina Santos| PT35467695436280989098978 | val.santos95@outlook.pt   |  934585665 |
| 56587       | 359457205    |   Rua da Paradinha, Vila Real, nº7 5000-023            |   Miguel Carvalhal| PT34543245463245678787545 | migascrvlhl@outlook.pt    |  913242543 |
| 67874       | 982350002    |   Avenida das Acácias, Lamego, nº14 3500-024           |   Hélder Paz      | PT12345678909876543245676 | http.az@gmail.com         |  965664535 |
| 34776       | 142470324    |   Travessa dos Amores, Faro, nº1 8000-034              |   Vasco Lima      | PT45678765567786543222345 | vasco.lima@gmail.com      |  935686456 |
| 67874       | 111153464    |   Rua São João de Deus, Funchal, nº11 9000-028         |   Matilde Carvalho| PT34567890897321234363233 | mat.carvlh@gmail.com      |  916745646 |
| 45875       | 123412511    |   Rua da Fonte, Ponta Delgada, nº17 9500-029           |   Ivo Moura       | PT09876543456768456345678 | ivo.moura@gmail.com       |  963445553 |
| 34547       | 312454123    |   Rua Dom Ferrão, Bragança, nº139 5300-025             |   Camilo Leal     | PT34657503297489324656865 | camileal69@outlook.pt     |  935887358 |
| 87656       | 869560262    |   Rua Tavares dos Santos, Castelo Branco, nº18 6000-026|   Tiago Marmelo   | PT02837563892927475839294 | tigs.marmelo@gmail.com    |  915663244 |

### ENCOMENDA
| Id            |   IdLoja   | IdFornecedor |  DataEntrega  |  DataPedido    |  ValorEncomenda   |  Quantidade  |  MetodoEnvio     |
| :------------ | :--------- | :----------- | :------------ | :------------- | :---------------- | :----------- | :--------------- |
|61535182290258 | 042429918  |    73937     | 27/03/2024    | 15/02/2024     | 200.00€           |  30          | Correio Normal   |
|01724023650404 | 042429926  |    34647     | 04/04/2024    | 04/03/2024     | 400.00€           |  80          | Correio Normal   |
|91624027121425 | 042429916  |    34668     | 30/03/2024    | 25/03/2024     | 150.00€           |  20          | Correio Expresso |
|98162402472354 | 042429927  |    36458     | 06/05/2023    | 16/05/2023     | 50.00€            |  7           | Correio Expresso |
|96302750742350 | 042429919  |    25347     | 12/02/2023    | 25/01/2023     | 600.00€           |  150         | Correio Normal   |
|87858916411156 | 042429917  |    34654     | 22/01/2024    | 31/12/2023     | 300.00€           |  70          | Correio Normal   |
|44372469469145 | 042429911  |    35687     | 23/11/2023    | 20/10/2023     | 250.00€           |  35          | Correio Normal   |
|92658513072305 | 042429912  |    34776     | 16/12/2022    | 10/12/2022     | 160.00€           |  15          | Correio Expresso |
|74635327825352 | 042429921  |    34547     | 22/03/2024    | 22/02/2024     | 400.00€           |  70          | Correio Normal   |
|47258265824675 | 042429920  |    87656     | 07/12/2023    | 01/12/2023     | 200.00€           |  30          | Correio Expresso |
|22267457927135 | 042429914  |    45637     | 09/12/2020    | 09/11/2020     | 150.00€           |  25          | Correio Normal   |
|23496234062598 | 042429908  |    45875     | 09/09/2023    | 09/08/2023     | 50.00€            |  10          | Correio Normal   |
|86465536435435 | 042429909  |    78589     | 01/02/2014    | 20/01/2014     | 100.00€           |  15          | Correio Expresso |
|75858573221857 | 042429922  |    67874     | 29/03/2024    | 20/03/2024     | 100.00€           |  20          | Correio Expresso |
|74195862750200 | 042429924  |    67874     | 04/08/2020    | 01/07/2020     | 200.00€           |  20          | Correio Normal   |
|53633738273343 | 042429925  |    56587     | 10/05/2019    | 01/05/2019     | 300.00€           |  25          | Correio Expresso |
|86586213853252 | 042429915  |    86978     | 11/05/2018    | 01/05/2018     | 350.00€           |  60          | Correio Expresso |
|86234825103839 | 042429913  |    63456     | 18/04/2019    | 01/04/2019     | 400.00€           |  80          | Correio Normal   |
|87364987065929 | 042429923  |    75812     | 19/03/2016    | 10/03/2016     | 500.00€           |  100         | Correio Expresso |
|12423946129026 | 042429905  |    67989     | 20/01/2022    | 01/01/2022     | 450.00€           |  100         | Correio Normal   |
|23429632057240 | 042429910  |    67978     | 21/09/2021    | 02/09/2021     | 200.00€           |  50          | Correio Normal   |
|96604870849300 | 042429907  |    86360     | 28/07/2021    | 15/07/2021     | 200.00€           |  35          | Correio Normal   |
|87253934605724 | 042429906  |    76580     | 11/11/2023    | 11/10/2023     | 150.00€           |  20          | Correio Normal   |
|76513861496111 | 042429904  |    89400     | 15/11/2022    | 14/10/2022     | 100.00€           |  15          | Correio Normal   |
|20473496324972 | 042429903  |    67854     | 16/10/2023    | 16/09/2023     | 50.00€            |  7           | Correio Normal   |
|22842035720472 | 042429899  |    78579     | 26/03/2024    | 29/02/2024     | 800.00€           |  180         | Correio Normal   |
|98606856780683 | 042429900  |    67844     | 14/09/2023    | 14/08/2023     | 150.00€           |  15          | Correio Normal   |
|12971393573057 | 042429901  |    89567     | 08/08/2013    | 08/07/2013     | 350.00€           |  60          | Correio Normal   |
|92364043574120 | 042429902  |    34468     | 25/03/2024    | 10/03/2024     | 350.00€           |  50          | Correio Expresso |
|02735937034802 | 042429928  |    87463     | 02/01/2024    | 20/12/2023     | 400.00€           |  60          | Correio Expresso |

### PRODUTO
| CodigoBarras |  Quantidade |   Preco  |        Nome             |   Sexo      |   Estacao   |
| :----------- | :---------- | :------- | :---------------------- | :---------- | :---------- |
| 2813-888     | 1           | 16.20€   | Calções Largos          |  Homem      |  Primavera  |
| 2819-989     | 5           | 25.05€   | Vestido Floral          |  Mulher     |  Verão      |
| 2819-979     | 10          | 20.10€   | Calças Boca de Sino     |  Mulher     |  Primavera  |
| 2935-777     | 1           | 15.85€   | Calções de Ganga        |  Mulher     |  Verão      |
| 2934-877     | 2           | 29.99€   | Calças Fato Treino      |  Unisexo    |  Outono     |
|              |             |          | Camisola Yale           |  Unisexo    |  Primavera  |
|              |             |          | Casaco c/ Capuz         |  Unisexo    |  Inverno    |
|              |             |          | T'shirt Simples         |  Unisexo    |  Primavera  |
|              |             |          | Sapatilhas              |  Homem      |  Outono     |
|              |             |          | Meias'Calças            |  Mulher     |  Primavera  |
|              |             |          | Luvas Ciclismo          |  Homem      |  Verão      |
|              |             |          | Gorro                   |  Homem      |  Inverno    |
|              |             |          | Chapéu Praia            |  Mulher     |  Verão      |
|              |             |          | Top Corset              |  Mulher     |  Verão      |
|              |             |          | Conjunto 3 Boxers       |  Homem      |  Inverno    |
|              |             |          | Pulseira prata          |  Homem      |  Primavera  |
|              |             |          | Calças Ganga Clara      |  Homem      |  Primavera  |
|              |             |          | Calções Ciclista        |  Homem      |  Primavera  |
|              |             |          | Sandálias Simples       |  Mulher     |  Verão      |
|              |             |          | Óculos de Sol           |  Unisexo    |  Verão      |
|              |             |          | Anél                    |  Homem      |  Outono     |
|              |             |          | Chinelo de Dedo         |  Mulher     |  Verão      |
|              |             |          | Meias Cardadas          |  Mulher     |  Inverno    |
|              |             |          | Pijama Fresco           |  Mulher     |  Verão      |
|              |             |          | Vestido Justo           |  Mulher     |  Outono     |
|              |             |          | Vestido Curto           |  Mulher     |  Verão      |
|              |             |          | Botas Plataforma        |  Homem      |  Inverno    |
|              |             |          | Lenço Florido           |  Mulher     |  Verão      |
|              |             |          | Camisa axadrezada       |  Unisexo    |  Outono     |
|              |             |          | Camisola Manga Comprida |  Homem      |  Primavera  |

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
