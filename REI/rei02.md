#C2
##01 Beatriz Martins a043545, Rita Nunes a043237 

**Especificação de requisitos** 

Entidades: 

LOJA (quantidade, localizacao, nome) 
- Quantidade: 5  
- LOJAS (localização, nome) 
- Localização: Porto, Aveiro, Lisboa, Castelo Branco, Algarve 
- Nome:  B&R  

FORNECEDOR (NIF, IBAN, nome, morada, contacto, email, histórico_de_pedidos, prazos_de_entrega) 
- NIF: número de identificação fiscal do fornecedor 
- IBAN: requisito para pagamento da loja ao armazém 
- Nome:  Primeiro e último nome do fornecedor 
- Contacto: número de telefone do fornecedor 
- Email:  email do fornecedor 
- Histórico de pedidos: histórico de todos os pedidos efetuados pela loja até aquele momento 
- Prazos de entrega: data prevista, data-limite 

CLIENTE (contacto, contribuinte, nome) 
- Contacto: contacto do cliente para obter a fatura via digital 
- Contribuinte: opção fatura com contribuinte 

FUNCIONARIO (NIF, IBAN, morada, contacto, nome) 
- NIF: número de identificação fiscal de cada funcionário 
- IBAN: requisito para pagamento a cada funcionário 
- Morada: Morada onde o funcionário vive, constituído por rua, nº de porta, freguesia, distrito 
- Contacto: número de telefone de cada funcionário 
- Nome: denominação de cada funcionário 

PONTO DE VENDA (registode venda, desconto, data, recibo, pagamento) 
- Registo de venda: registo das vendas efetuadas em cada loja (chave primária) 
- Desconto: existência ou não de vales de desconto ou promoções em loja 
- Data: dia, mês e ano da compra 
- Recibo: recibo de compra 
- Pagamento: método de pagamento utilizado 

PRODUTO (código, preço, nome, cor, quantidade, material, tamanho) 
- Código: código barras do produto (chave primária) 
- Preço: preço de cada produto 
- Nome: denominação de cada produto 
- Cor: cores disponíveis para cada produto 
- Quantidade: quantidade de cada produto em loja 
- Material: materiais disponíveis para cada produto 
- Tamanho: tamanhos disponíveis para cada produto 

STOCK (código, sexo, marca, estação, quantidade)
- Código: código único do stock (chave primária) 
- Sexo: público-alvo dos produtos do stock 
- Marca: imagem-marca do stock  
- Estação: estação do ano a que os produtos de cada stock é destinada 
- Quantidade: quantidade de produtos há em cada loja do stock 

TAREFAS (data, horário, tipo) 
- Data: dia, mês e ano em que a tarefa deve ser feita (chave primária) 
- Horário: hora do dia em que a tarefa deve ser feita (chave primária) 
- Tipo: tipo de tarefa a fazer  

 
Os utilizadores do sistema são os funcionários que trabalham na nossa cadeia de loja, sendo eles quem têm acesso ao sistema. 


Associações: 

ConstituidaPor (LOJA, CADEIA DE LOJAS) 
Trabalham (FUNCIONÁRIOS, LOJA) 
Expõe (LOJA, STOCK) 
Atendem (FUNCIONÁRIOS, CLIENTES) 
Fazem (FUNCIONÁRIOS, TAREFAS) 
FicaRegistado (CLIENTE, PONTO DE VENDA) 
Compra (CLIENTE, PRODUTO) 
ConstituídoPor (STOCK, PRODUTO) 
Fornece (FORNECEDOR, PRODUTO) 
