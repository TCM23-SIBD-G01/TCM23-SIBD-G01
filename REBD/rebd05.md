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
	`Id`,
	`Nome`, 
    `Localizacao`,
    PRIMARY KEY (`Id`)

CREATE TABLE IF NOT EXISTS `Funcionario` (
	`Id`,
    `Nome`,
    `Quantidade`,
    `Contacto`, 
    `Nif`,
    `Morada`,
    `Iban`,
    `Email`,
    `Horario`,
    `Idade`,
    PRIMARY KEY (`Id`),
);

CREATE TABLE IF NOT EXISTS `Tarefa`(
	`IdFuncionario`,
    `Horario`,
    `Categoria`,
    `Data`,
    `Status`,
    `Descricao`,
    PRIMARY KEY (`IdFuncionario`),
    FOREIGN KEY (`IdFuncionario`) REFERENCES Funcionario(Id),
);

CREATE TABLE IF NOT EXISTS `Cliente` (
	`Nif`,
    `Nome`,
    `Contacto`,
    PRIMARY KEY (`Nif`),
);

CREATE TABLE IF NOT EXISTS `Compra` (
	`Id`,
    `Data`,
    `NomeCliente`,
    `ValorCompra`,
    `DescontosAplicados`,
    `MetodoPagamento`,
    PRIMARY KEY (`Id`),
);

CREATE TABLE IF NOT EXISTS `Stock` (
	`CodigoBarras`,
    `Quantidade`,
    PRIMARY KEY (`CodigoBarras`),
    FOREIGN KEY (`CodigoBarras`) REFERENCES Produto(CodigoBarras),
);

CREATE TABLE IF NOT EXISTS `Produto` (
	`CodigoBarras`,
    `Sexo`,
    `Estacao`,
    `Nome`,
    `Preco`,
    `Quantidade`,
    PRIMARY KEY (`CodigoBarras`),
);

CREATE TABLE IF NOT EXISTS `Material` (
	`Nome`,
    `Composicao`,
    `Instrucoes`,
    `Propriedades`,
    PRIMARY KEY (`Nome`),
);

CREATE TABLE IF NOT EXISTS `Tamanho`(
	`Codigo`,
    `UnidadeMedida`,
    `CategoriaPeca`,
    PRIMARY KEY (`Codigo`),
);

CREATE TABLE IF NOT EXISTS `Cor` (
	`CodigoHexadecimal`,
    `Nome`,
    PRIMARY KEY (`CodigoHexadecimal`),
);

CREATE TABLE IF NOT EXISTS `Encomenda` (
	`Id`,
    `DataPedido`,
    `DataEntrega`,
    `IdLoja`,
    `ValorEncomenda`,
    `MetodoEnvio`,
    `IdFornecedor`,
    `Quantidade`,
    PRIMARY KEY (`Id`),
    FOREIGN KEY (`IdLoja`) REFERENCES Loja(Id),
    FOREIGN KEY (`IdFornecedor`) REFERENCES Fornecedor(Id),
);

CREATE TABLE IF NOT EXISTS `Fornecedor` (
	`Id`,
    `Nome`,
    `Contacto`,
    `Email`,
    `Iban`,
    `Morada`,
    `Nif`,
    PRIMARY KEY (`Id`);
);
);
```

## DDL



---
[< Previous](rebd04.md) | [^ Main](/../../) | Next >
:--- | :---: | ---: 
