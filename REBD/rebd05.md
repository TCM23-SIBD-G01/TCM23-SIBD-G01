# C3 : SQL

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
);

## DDL



---
[< Previous](rebd04.md) | [^ Main](/../../) | Next >
:--- | :---: | ---: 
