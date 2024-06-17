USE `lojas`; 


CREATE TABLE IF NOT EXISTS `Loja` (
    `Id` INT(9) NOT NULL,
    `Nome` CHAR(3) NOT NULL,
    `Localizacao` VARCHAR(40) UNIQUE NOT NULL,
    PRIMARY KEY (`Id`)
);

CREATE TABLE IF NOT EXISTS `Funcionario` (
    `Id` CHAR(6) NOT NULL,
    `Nome` VARCHAR(70) NOT NULL,
    `Quantidade` INT(4) NOT NULL,
    `Contacto` INT(9) UNIQUE NOT NULL,
    `Nif` INT(9) UNIQUE NOT NULL,
    `Morada` VARCHAR(100) NOT NULL,
    `Iban` CHAR(25) UNIQUE NOT NULL,
    `Email` VARCHAR(100) UNIQUE NOT NULL,
    `Horario` CHAR(5),
    `Idade` INT(3) NOT NULL,
    PRIMARY KEY (`Id`)
);

CREATE TABLE IF NOT EXISTS `Tarefa` (
    `IdFuncionario` CHAR(6) NOT NULL,
    `Horario` CHAR(5) NOT NULL,
    `Categoria` ENUM('limpeza', 'restock', 'atendimento ao cliente') NOT NULL,
    `Data` CHAR(11) NOT NULL,
    `Status` ENUM('Por fazer', 'Em progresso', 'Acabado') NOT NULL,
    `Descricao` TEXT,
    PRIMARY KEY (`IdFuncionario`),
    FOREIGN KEY (`IdFuncionario`)
        REFERENCES Funcionario (`Id`)
);

CREATE TABLE IF NOT EXISTS `Cliente` (
    `Nif` INT(9) NOT NULL,
    `Nome` VARCHAR(70) NOT NULL,
    `Contacto` INT(9) UNIQUE NOT NULL,
    PRIMARY KEY (`Nif`)
);

CREATE TABLE IF NOT EXISTS `Compra` (
	`Id` char(7) NOT NULL,
    `Data` char(11)  NOT NULL,
    `NifCliente` int(9) NOT NULL,
    `ValorCompra` decimal(6, 2) NOT NULL,
    `DescontosAplicados` decimal(4, 2),
    `MetodoPagamento` enum('MBWay', 'cartão de crédito', 'cartão de débito', 'dinheiro') NOT NULL,
    PRIMARY KEY (`Id`),
    FOREIGN KEY (`NifCliente`) REFERENCES Cliente (`Nif`)
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

CREATE TABLE IF NOT EXISTS `Stock` (
	`CodigoBarras` int(13) NOT NULL,
    `Quantidade` int(4) NOT NULL,
    PRIMARY KEY (`CodigoBarras`),
    FOREIGN KEY (`CodigoBarras`) REFERENCES Produto(`CodigoBarras`)
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

CREATE TABLE IF NOT EXISTS `Encomenda` (
	`Id` BIGINT(14) NOT NULL,
    `DataPedido` char(11) NOT NULL,
    `DataEntrega` char(11)  NOT NULL,
    `IdLoja` INT(9) UNIQUE NOT NULL,
    `ValorEncomenda` decimal(6, 2) NOT NULL,
    `MetodoEnvio` enum('correios normal', 'transportadora normal', 'correios express', 'transportadora express') NOT NULL,
    `IdFornecedor` char(6) UNIQUE NOT NULL,
    `Quantidade` int(4) NOT NULL,
    PRIMARY KEY (`Id`),
    FOREIGN KEY (`IdLoja`) REFERENCES Loja(`Id`),
    FOREIGN KEY (`IdFornecedor`) REFERENCES Fornecedor(`Id`)
);
