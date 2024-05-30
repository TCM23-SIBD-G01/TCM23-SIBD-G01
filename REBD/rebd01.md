# C1 

## Grupo 01 Beatriz Martins a043545, Rita Nunes a043237 

**Introdução** 

Para o trabalho da unidade curricular de Sistemas de Informação e Bases de Dados a desenvolver, como grupo decidimos abordar um sistema de informação sobre uma cadeia de lojas fictícia.

A cadeia é constituída por lojas, as quais apresentam o mesmo nome e divergem apenas na sua localização e Id.

Todas as lojas são em espaços físicos, não existindo nenhuma plataforma digital online, onde é possível a aquisição de diversas peças de roupa - cada uma delas de diversos tamanhos, cores e materiais. As peças são expostas de acordo com a estação do ano e divididas em loja por sexo e categoria. Cada uma tem um nome próprio, preço, e código de barras único. São todas da mesma marca.

Os tamanhos são decididos de acordo com uma unidade de medida pela qual o código do tamanho é decidido e diferentes categorias de roupa podem ter diferentes unidades de medida. Cada peça é tingida com apenas uma cor sólida caraterizada pelo seu nome e código hexadecimal. Já os materiais têm nomes escolhidos a partir da sua composição, cada um com prorpiedades e instruções de cuidado específicas. 

O stock disponível em cada loja é registado a partir da quantidade de cada produto disponível. Quando é preciso fazer uma reposição de stock, os funcionários fazem uma encomenda ao fornecedor.

Uma encomenda realizada com sucesso apenas se contiver a seguinte informação: Id da loja que a irá receber, Id do fornecedor, quantidade de produtos pedidos e o método de envio escolhido. Na encomenda fica registada também a data do pedido, o valor a ser pago, a data prevista de entrega e o seu Id único.

O fornecedor recebe o pedido de encomenda pelo seu contacto telefónico, ou e-mail e o pagamento da encomenda é feita com o número do Iban. Cada fornecedor possui também um nif, morada e Id únicos.

Os funcionários que trabalham em cada loja são diferenciados no sistema pelo seu Id, contacto, nif, Iban e e-mail. Também é fornecida à loja a informação da sua idade e nome. Cada funcionário registado no sistema tem aesso ao seu horário de trabalho e tarefas associadas ao seu Id.

As tarefas são divididas em categorias e cada tarefa tem a data em que foi criada, o horário na qual deve ser feita e a descrição em detalhe de exatamente o que deve ser feito. À medida que o funcionário vai completando a tarefa, deve atualizar o sistema do seu status.

Os clientes que fazem compras em qualquer das lojas, no ato de pagamento dão o seu nome, contacto e nif.

Todas as compras têm um Id único, uma data de efetuação, nome do cliente, o valor da compra, os descontos aplicados (se houver) e o método de pagamento escolhido pelo cliente.