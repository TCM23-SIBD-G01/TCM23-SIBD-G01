# C3 : SQL
## 01 Beatriz Martins a043545, Rita Nunes a043237 

### DDL

```sql
USE `test`;

DROP TABLE IF EXISTS `Loja`;
DROP TABLE IF EXISTS `Produto`;
DROP TABLE IF EXISTS `Compra`;
DROP TABLE IF EXISTS `Stock`;
DROP TABLE IF EXISTS `Funcionario`;
DROP TABLE IF EXISTS `Cliente`;
DROP TABLE IF EXISTS `Tarefa`;
DROP TABLE IF EXISTS `Cor`;
DROP TABLE IF EXISTS `Tamanho`;
DROP TABLE IF EXISTS `Material`;
DROP TABLE IF EXISTS `Encomenda`;
DROP TABLE IF EXISTS `Fornecedor`;

CREATE TABLE IF NOT EXISTS `Loja` (
	`Id` char(5) NOT NULL,
	`Nome` char(3) NOT NULL, 
    `Localizacao` varchar(100) UNIQUE NOT NULL,
    PRIMARY KEY (`Id`)
);

CREATE TABLE IF NOT EXISTS `Funcionario` (
	`Id` char(6) NOT NULL,
    `Nome` varchar(70) NOT NULL,
    `Quantidade` int(4) NOT NULL,
    `Contacto` int(9) UNIQUE NOT NULL, 
    `Nif` int(9) UNIQUE NOT NULL,
    `Morada` varchar(100) NOT NULL,
    `Iban` char(25) UNIQUE NOT NULL,
    `Email` varchar(100) UNIQUE NOT NULL,
    `Horario` char(5),
    `Idade` int(3) NOT NULL,
    PRIMARY KEY (`Id`)
);

CREATE TABLE IF NOT EXISTS `Tarefa`(
	`IdFuncionario` char(6) NOT NULL,
    `Horario` char(5) NOT NULL,
    `Categoria` enum('limpeza', 'restock', 'atendimento ao cliente' ) NOT NULL,
    `Data` char(11)  NOT NULL,
    `Status` enum('Por fazer', 'Em progresso', 'Acabado') NOT NULL,
    `Descricao` text,
    PRIMARY KEY (`IdFuncionario`),
    FOREIGN KEY (`IdFuncionario`) REFERENCES Funcionario(`Id`)
);

CREATE TABLE IF NOT EXISTS `Cliente` (
	`Nif` int(9) NOT NULL,
    `Nome` varchar(70) NOT NULL,
    `Contacto` int(9) UNIQUE NOT NULL,
    PRIMARY KEY (`Nif`)
);

CREATE TABLE IF NOT EXISTS `Compra` (
	`Id` char(7) NOT NULL,
    `Data` char(11)  NOT NULL,
    `NomeCliente` varchar(70) NOT NULL,
    `ValorCompra` decimal(6, 2) NOT NULL,
    `DescontosAplicados` decimal(3, 2),
    `MetodoPagamento` enum('MBWay', 'cartão de crédito', 'cartão de débito', 'dinheiro') NOT NULL,
    PRIMARY KEY (`Id`)
);

CREATE TABLE IF NOT EXISTS `Stock` (
	`CodigoBarras` int(13) NOT NULL,
    `Quantidade` int(4) NOT NULL,
    PRIMARY KEY (`CodigoBarras`),
    FOREIGN KEY (`CodigoBarras`) REFERENCES Produto(`CodigoBarras`)
);

CREATE TABLE IF NOT EXISTS `Produto` (
	`CodigoBarras` int(13) NOT NULL,
    `Sexo` enum ('Mulher', 'Homem', 'Unisex') NOT NULL,
    `Estacao` enum ('Primavera', 'Verão', 'Outono', 'Inverno') NOT NULL,
    `Nome` varchar(30) NOT NULL,
    `Preco` decimal(3, 2) NOT NULL,
    `Quantidade` int(4) NOT NULL,
    PRIMARY KEY (`CodigoBarras`)
);

CREATE TABLE IF NOT EXISTS `Material` (
	`Nome` varchar(20) NOT NULL,
    `Composicao` text NOT NULL,
    `Instrucoes` text NOT NULL,
    `Propriedades` text NOT NULL,
    PRIMARY KEY (`Nome`)
);

CREATE TABLE IF NOT EXISTS `Tamanho`(
	`Codigo` char(3) NOT NULL,
    `UnidadeMedida` varchar(20) NOT NULL,
    `CategoriaPeca` varchar(20) NOT NULL,
    PRIMARY KEY (`Codigo`)
);

CREATE TABLE IF NOT EXISTS `Cor` (
	`CodigoHexadecimal` char(7) NOT NULL,
    `Nome` varchar(20) NOT NULL,
    PRIMARY KEY (`CodigoHexadecimal`)
    );

CREATE TABLE IF NOT EXISTS `Encomenda` (
	`Id` char(7) NOT NULL,
    `DataPedido` char(11) NOT NULL,
    `DataEntrega` char(11)  NOT NULL,
    `IdLoja` char(5) UNIQUE NOT NULL,
    `ValorEncomenda` decimal(6, 2) NOT NULL,
    `MetodoEnvio` enum('correios normal', 'transportadora normal', 'correios express', 'transportadora express') NOT NULL,
    `IdFornecedor` char(6) UNIQUE NOT NULL,
    `Quantidade` int(4) NOT NULL,
    PRIMARY KEY (`Id`),
    FOREIGN KEY (`IdLoja`) REFERENCES Loja(`Id`),
    FOREIGN KEY (`IdFornecedor`) REFERENCES Fornecedor(`Id`)
);

CREATE TABLE IF NOT EXISTS `Fornecedor` (
	`Id` char(6) NOT NULL,
    `Nome` varchar(70) NOT NULL,
    `Contacto` int(9) UNIQUE NOT NULL,
    `Email` varchar(100) UNIQUE NOT NULL,
    `Iban` char(25) UNIQUE NOT NULL,
    `Morada` varchar(100) UNIQUE NOT NULL,
    `Nif` int(9) UNIQUE NOT NULL,
    PRIMARY KEY (`Id`)
);
```

### DML

```sql
-- *Informações sobre as lojas*
SELECT 
    *
FROM
    Loja
 
-- *Informações sobre os funcionários*
SELECT 
    *
FROM
    Funcionario;
 
-- *Informações sobre os clientes*
SELECT 
    *
FROM
    Cliente;
    
-- *Informações sobre as encomendas*
SELECT 
    *
FROM
    Encomenda;
    
-- *Informações sobre os fornecedores*
SELECT 
    *
FROM
    Fornecedor;
    
-- *Informações sobre as compras*
SELECT 
    *
FROM
    Compra;

-- *Informações sobre o stock*
SELECT 
    *
FROM
    Stock;
    
-- *Informações sobre os produtos*
SELECT 
    *
FROM
    Produto;

-- *Produtos disponíveis em cada loja*
SELECT DISTINCT
    L.Nome AS NomeLoja,
    L.Localizacao AS LocalizacaoLoja,
    P.Nome AS NomeProduto,
    P.Preco AS PrecoProduto,
    P.Quantidade AS QuantidadeProduto
FROM
    Loja,
    Produto
ORDER BY L.Nome , P.Nome;

-- *Atualizações do nível de stock*
UPDATE 
	Loja,
    Produto 
SET 
    Quantidade = nova_quantidade
WHERE
    IdLoja = id_loja
        AND CodigoBarras = codigo_barras;
        
-- *Encomendas ao fornecedor*
INSERT INTO 
	Encomenda (Id, DataPedido, DataEntrega, IdLoja, ValorEncomenda, MetodoEnvio, IdFornecedor, Quantidade)
VALUES
	(id_encomenda, data_pedido, data_entrega, id_loja, valor_encomenda, metodo_envio, id_fornecedor, quantidade_produto);

-- *Entrada de novos produtos*
INSERT INTO 
	Produto (CodigoBarras, Sexo, Estacao, Nome, Preco, Quantidade) 
VALUES 
	(codigo_barras, sexo_produto, estação_produto, nome_produto, preco_produto, quantidade_produto);

-- *Registo de vendas*
INSERT INTO 
	Compra (Id, Data, NomeCliente, ValorCompra, DescontosAplicados, MetodoPagamento)
VALUES 
	(id_compra, data_compra, nome_cliente, valor_compra, descontos_aplicados, metodo_pagamento);
    
-- *Registo de novos clientes*
INSERT INTO
	Cliente (Nif, Nome, Contacto)
VALUES
	(nif_novo_cliente, nome_novo_cliente, contacto_novo_cliente);

-- *Registo de novos funcionários*
INSERT INTO
	Funcionario (Id, Nome, Contacto, Nif, Morada, Iban, Email, Idade)
VALUES
	(id_novo_funcionario, nome_novo_funcionario, contacto_novo_funcionario, nif_novo_funcionario, morada_novo_funcionario, iban_novo_funcionario, email_novo_funcionario, idade_novo_funcionario);

-- *Histórico de compras de cada cliente*
SELECT 
    Id
FROM
    Compra
WHERE
    NomeCliente = (SELECT 
            Nome
        FROM
            Cliente);

-- *Histórico de encomendas de cada loja a cada fornecedor*
SELECT DISTINCT
    Id
FROM
    Encomenda
WHERE
    IdLoja = (SELECT 
            Id
        FROM
            Loja)
        OR IdFornecedor = (SELECT 
            Id
        FROM
            Fornecedor);

-- *Visualização de horários de trabalho dos funcionarios*
SELECT 
    Horario
FROM 
	Funcionario
WHERE
	Id = id_funcionario;

-- *Atualização de horários de trabalho dos funcionários*
UPDATE 
	Funcionario
SET
	Horario = novo_horario
WHERE 
	Id = id_funcionario_com_novo_horario;
    
-- *Visualização de tarefas atribuídas aos funcionários*
SELECT DISTINCT
	*
FROM 
	Tarefa
WHERE
	IdFuncionario = id_funcionario_com_tarefa;

-- *Atualização do status de cada tarefa*
UPDATE
	Tarefa
SET
	Status = novo_status
WHERE
	IdFuncionario = id_funcionario_responsavel;
    
-- *Atribuição de tarefas*
UPDATE 
	Tarefa
SET
	IdFuncionario = id_funcionario,
	Horario = horario_tarefa,
    Categoria = categoria_tarefa,
    Data = data_atribuicao_tarefa,
    Status = status_tarefa,
    Descricao = descricao_tarefa
WHERE
	IdFuncionario = id_funcionario_responsavel;
    
-- *Aplicação de descontos*
UPDATE
	Compra
SET
	ValorCompra = ValorCompra - DescontosAplicados
WHERE
	DescontosAplicados > 0;
```

---
[< Previous](rebd04.md) | [^ Main](/../../) | Next >
:--- | :---: | ---: 
