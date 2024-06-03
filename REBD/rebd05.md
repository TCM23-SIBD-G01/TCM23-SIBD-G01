# C3 : SQL

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

## DDL



---
[< Previous](rebd04.md) | [^ Main](/../../) | Next >
:--- | :---: | ---: 
