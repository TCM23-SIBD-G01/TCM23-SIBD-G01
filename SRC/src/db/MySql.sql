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

INSERT INTO compra
VALUES ("891-23","25/05/2024","Maria Andrade", 25, 10, 'mbway'),
("895-24", "29/05/2024", "Inês Machado", 30, 5, 'cartão de crédito'),
("920-25", "15/06/2024","Joana Pacheco", 10, 25, 'dinheiro'),
("891-48","25/05/2024","Maria Andrade", 25, 10, 'mbway'),
("895-49", "29/05/2024", "Inês Machado", 30, 5, 'cartão de crédito'),
("920-50", "15/06/2024","Joana Pacheco", 10, 25, 'dinheiro');

INSERT INTO cliente
VALUES (273380087, "Maria Andrade", 912345981),
(280099821, "Inês Machado", 987789654),
(280099822, "Joana Pacheco", 123456789),
(280099823, "MAntónio Silva", 213456789),
(280099824, "Mário Santos", 312456789),
(280099825, "Sílvia Marques", 213456790);

INSERT INTO cor
VALUES ("#06FD9C", "Azul"),
("#0ED57D", "Roxo"),
("#1A276B", "Verde"),
("#25C92E", "Vermelho"),
("#2C216C", "Amarelo");

INSERT INTO encomenda
VALUES (61535182290254, 2014-02-15, 2024-03-27, 42429902, 999.89, "correios normal", 73927, 123),
(61535182290255, 2024-03-08, 2024-05-24, 42429903, 6502.00, "correios express", 73934, 75),
(61535182290256, 2024-02-12, 2024-03-20, 42429900, 3450.00, "transportadora normal", 73935, 30),
(61535182290258, 2024-02-15, 2024-03-27, 42429899, 200.00, "correios normal", 73937, 30);

INSERT INTO fornecedor
VALUES (73927, "Miguel Santos", 914229716, "miguel.santos@gmail.com", "PT23245829148218449012348", "Rua Frei Caneca", 273497176),
(73934, "António Santos", 919229916, "antonio.santos@gmail.com", "PT23245829148218459011348", "Rua do Cabeça", 273492176),
(73935, "José Marques", 914223916, "jose.marques@gmail.com", "PT23245829148218459012346", "Rua Maria Tomásia", 273493176),
(73936, "Rodrigo Nunes", 914269916, "rodrigo.nunes@gmail.com", "PT23245829148218459012347", "Rua Dão Luís", 273498175),
(73937, "José Nunes", 914229916, "jose.nunes@gmail.com", "PT23245829148218459012348", "Rua do Calvário", 273498176);

INSERT VALUES funcionario
VALUES (00916, "Lara Mondego", 916089190, 124975432, "Rua Direita, Leça da Palmeira, nº452 4450-665", "PT0238472947", "lararmondego@gmail.com", "PT", 19),
(16327, "Diogo Matos", 967772327, 827402809, "Travessa Senhor do Calvário, Rio Tinto, nº36 4435-448", "PT1873930250", "diogom99@outlook.pt", "FT", 25),
(26960, "Sofia Ramos", 960330420, 93570125, "Rua Marracuene, Coimbra, nº10 3030-061", "PT9826359875", "sofi02.ramos@gmail.com", "FT", 22),
(56894, "Rui Figueiredo", 930010450, 518475314, "Rua de Sant'Anna, Ponta Delgada, nº72A 9500-078", "PT4173857154", "rfigueiredo@gmail.com", "PT", 20),
(91274, "Paula Mota", 935789176, 299526933, "Rua da Padaria, Quelfes, nº29 8700-275", "PT8792349654", "paula.mota@gmail.com", "FT", 29);

INSERT VALUES loja
VALUES (42429899, "B&R", "Algarve"),
(42429900, "B&R", "Lisboa"),
(42429901, "B&R", "Castelo Branco"),
(42429902, "B&R", "Aveiro"),
(42429903, "B&R", "Porto");

INSERT VALUES material
VALUES ("Fibra", "algodão", "Evitar usar máquina de secar", "Flexível"),
("Linho", "0% algodão", "Evitar usar máquina de secar", "Não Flexível"),
("Malha", "100% algodão", "Evitar usar máquina de secar", "Flexível"),
("Poliéster", "50% algodão", "Evitar usar máquina de secar", "Flexível"),
("Seda", "10% algodão", "Evitar usar máquina de secar", "Flexível");

INSERT INTO produto
VALUES (2813888, "Homem", "Primavera", "Calções Largos", 16.20, 1),
(2819979, "Mulher", "Primavera", "Calças Boca de Sino", 20.10, 10),
(2819989, "Mulher", "Verão", "Vestido Floral", 25.05, 5),
(2934877, "Unisex", "Primavera", "Calças Fato Treino", 29.99, 2),
(2935777, "Homem", "Verão", "Calções de Ganga", 15.85, 1);

INSERT INTO stock
VALUES (2813888, 4),
(2819979, 12),
(2819989, 20),
(2813888, 3),
(2935777, 10);

INSERT INTO tamanho
VALUES ("M", "EUR", "Calças"),
("S", "EUR", "Camisola"),
("XL", "EUR", "Camisa"),
("XS", "EUR", "T'shirt	"),
("XXL", "EUR", "Casaco");

INSERT INTO tarefa
VALUES (00916, 14:50-16:00, "atendimento ao cliente", 2024-06-17, "Por fazer", "caixa registadora"),
(16327, 13:00-19:00, "atendimento ao cliente", 2023-05-15, "Em progresso", "ajudar clientes"),
(26960, 09:00:10:30, "restock", 2011-10-10, "Acabado", "restock de calças"),
(56894, 08:00-09:00, "restock", 2011-10-10, "Acabado", "restock de camisas"),
(91274, 16:20-16:50, "limpeza", 2011-10-10, "Acabado", "limpar casa de banho");
