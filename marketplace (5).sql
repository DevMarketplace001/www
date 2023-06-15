-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июн 15 2023 г., 11:55
-- Версия сервера: 10.4.27-MariaDB
-- Версия PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `marketplace`
--

-- --------------------------------------------------------

--
-- Структура таблицы `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `carts`
--

INSERT INTO `carts` (`id`, `userId`, `productId`, `createdAt`, `updatedAt`) VALUES
(1, 2, 4, '2023-06-15 09:27:45', '2023-06-15 09:27:45');

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `title`, `createdAt`, `updatedAt`) VALUES
(1, 'code', '2023-06-15 09:20:10', '2023-06-15 09:20:10'),
(2, 'lobraries', '2023-06-15 09:20:17', '2023-06-15 09:20:17'),
(3, 'snippets', '2023-06-15 09:20:22', '2023-06-15 09:20:22');

-- --------------------------------------------------------

--
-- Структура таблицы `histories`
--

CREATE TABLE `histories` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `purchaseDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `most_popular`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `most_popular` (
`productId` int(11)
,`purchase_count` bigint(21)
,`title` varchar(25)
,`price` double
,`sellerId` int(11)
,`resultPath` varchar(255)
);

-- --------------------------------------------------------

--
-- Структура таблицы `popular`
--

CREATE TABLE `popular` (
  `productId` int(11) DEFAULT 0,
  `purchase_count` bigint(21) NOT NULL,
  `title` varchar(25) NOT NULL,
  `price` double NOT NULL,
  `sellerId` int(11) NOT NULL,
  `resultPath` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `productcart`
--

CREATE TABLE `productcart` (
  `historyId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `productId` int(11) DEFAULT 0,
  `sellerId` int(11) NOT NULL,
  `title` varchar(25) NOT NULL,
  `price` double NOT NULL,
  `resultPath` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(25) NOT NULL,
  `sellerId` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `price` double NOT NULL,
  `categoryId` int(11) NOT NULL,
  `codePath` varchar(255) DEFAULT NULL,
  `resultPath` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `title`, `sellerId`, `description`, `price`, `categoryId`, `codePath`, `resultPath`, `createdAt`, `updatedAt`) VALUES
(2, 'slider', 1, 'slider', 1.2, 1, 'DevMarketplace.zip', '8304be6a513c6987e58c9bb775116f281a06476a3e1481aef097ec55afc765d0.jpg', '2023-06-15 09:22:24', '2023-06-15 09:22:24'),
(3, 'fonts', 1, 'very nice font', 0.5, 2, 'enso-font.zip', 'pngtree-phantom-e-sports-logo-gaming-mascot-png-image_5272477.jpg', '2023-06-15 09:26:08', '2023-06-15 09:26:08'),
(4, 'aaaaaaaaa', 1, 'very expensive', 1000000, 3, 'Knight.rar', 'pngtree-blue-samurai-esports-logo-gaming-mascot-logo-png-image_4262999.jpg', '2023-06-15 09:27:24', '2023-06-15 09:27:25');

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `product_cart`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `product_cart` (
`cartId` int(11)
,`userId` int(11)
,`productId` int(11)
,`title` varchar(25)
,`price` double
,`sellerId` int(11)
,`resultPath` varchar(255)
);

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `product_history`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `product_history` (
`historyId` int(11)
,`userId` int(11)
,`productId` int(11)
,`title` varchar(25)
,`price` double
,`sellerId` int(11)
,`resultPath` varchar(255)
);

-- --------------------------------------------------------

--
-- Структура таблицы `product_tags`
--

CREATE TABLE `product_tags` (
  `id` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `tagId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `product_tags`
--

INSERT INTO `product_tags` (`id`, `productId`, `tagId`) VALUES
(1, 2, 1),
(2, 3, 2),
(3, 4, 3);

-- --------------------------------------------------------

--
-- Структура таблицы `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `tags`
--

INSERT INTO `tags` (`id`, `title`, `createdAt`, `updatedAt`) VALUES
(1, 'js', '2023-06-15 09:20:31', '2023-06-15 09:20:31'),
(2, 'php', '2023-06-15 09:20:33', '2023-06-15 09:20:33'),
(3, 'python', '2023-06-15 09:20:36', '2023-06-15 09:20:36'),
(4, 'node js', '2023-06-15 09:20:41', '2023-06-15 09:20:41');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `salt` varchar(255) NOT NULL,
  `role` int(11) DEFAULT 1,
  `img` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `salt`, `role`, `img`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'aleksei22891@.com', '$2b$10$xvTuliT5..HO2SM5wjqjwu4qq.8YPQutnh.X.9O5hZnGMCw6aE/Iu', '$2b$10$xvTuliT5..HO2SM5wjqjwu', 3, 'pngtree-extreme-hunter-gaming-logo-template-for-gamer-image_304139.jpg', '2023-06-15 09:18:51', '2023-06-15 09:19:59'),
(2, 'mifis', 'mif@gmail.com', '$2b$10$dq52Sl3dbp398kbv.6qQFuUDKaIxZASW.2sY71NapRCnwtvWrxbL6', '$2b$10$dq52Sl3dbp398kbv.6qQFu', 1, '8304be6a513c6987e58c9bb775116f281a06476a3e1481aef097ec55afc765d0.jpg', '2023-06-15 09:27:41', '2023-06-15 09:33:22');

-- --------------------------------------------------------

--
-- Структура для представления `most_popular`
--
DROP TABLE IF EXISTS `most_popular`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `most_popular`  AS SELECT `histories`.`productId` AS `productId`, count(0) AS `purchase_count`, `products`.`title` AS `title`, `products`.`price` AS `price`, `products`.`sellerId` AS `sellerId`, `products`.`resultPath` AS `resultPath` FROM (`histories` join `products` on(`histories`.`productId` = `products`.`id`)) GROUP BY `products`.`id` ORDER BY count(0) AS `DESCdesc` ASC  ;

-- --------------------------------------------------------

--
-- Структура для представления `product_cart`
--
DROP TABLE IF EXISTS `product_cart`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `product_cart`  AS SELECT `carts`.`id` AS `cartId`, `carts`.`userId` AS `userId`, `products`.`id` AS `productId`, `products`.`title` AS `title`, `products`.`price` AS `price`, `products`.`sellerId` AS `sellerId`, `products`.`resultPath` AS `resultPath` FROM (`carts` join `products` on(`carts`.`productId` = `products`.`id`))  ;

-- --------------------------------------------------------

--
-- Структура для представления `product_history`
--
DROP TABLE IF EXISTS `product_history`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `product_history`  AS SELECT `histories`.`id` AS `historyId`, `histories`.`userId` AS `userId`, `products`.`id` AS `productId`, `products`.`title` AS `title`, `products`.`price` AS `price`, `products`.`sellerId` AS `sellerId`, `products`.`resultPath` AS `resultPath` FROM (`histories` join `products` on(`histories`.`productId` = `products`.`id`))  ;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `productId` (`productId`);

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `histories`
--
ALTER TABLE `histories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `productId` (`productId`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sellerId` (`sellerId`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Индексы таблицы `product_tags`
--
ALTER TABLE `product_tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `tagId` (`tagId`);

--
-- Индексы таблицы `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `histories`
--
ALTER TABLE `histories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `product_tags`
--
ALTER TABLE `product_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_15` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `carts_ibfk_16` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Ограничения внешнего ключа таблицы `histories`
--
ALTER TABLE `histories`
  ADD CONSTRAINT `histories_ibfk_15` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `histories_ibfk_16` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Ограничения внешнего ключа таблицы `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_15` FOREIGN KEY (`sellerId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_16` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`);

--
-- Ограничения внешнего ключа таблицы `product_tags`
--
ALTER TABLE `product_tags`
  ADD CONSTRAINT `product_tags_ibfk_15` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `product_tags_ibfk_16` FOREIGN KEY (`tagId`) REFERENCES `tags` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
