-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июн 15 2023 г., 07:52
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
(3, 'snippets', '2023-06-14 08:55:18', '2023-06-14 08:55:18'),
(4, 'libraries', '2023-06-14 10:08:01', '2023-06-14 10:08:01'),
(5, 'codes', '2023-06-14 10:08:07', '2023-06-14 10:08:07');

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

--
-- Дамп данных таблицы `histories`
--

INSERT INTO `histories` (`id`, `userId`, `productId`, `purchaseDate`) VALUES
(1, 2, 2, '2023-06-15 03:03:07'),
(2, 2, 4, '2023-06-15 03:04:21'),
(3, 2, 3, '2023-06-15 03:04:21'),
(4, 3, 2, '2023-06-15 03:06:55'),
(5, 3, 3, '2023-06-15 03:06:55'),
(6, 3, 4, '2023-06-15 03:06:55'),
(7, 3, 6, '2023-06-15 03:06:55');

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
,`sellerId` varchar(255)
,`resultPath` varchar(255)
);

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(25) NOT NULL,
  `sellerId` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` double NOT NULL,
  `categoryId` double NOT NULL,
  `codePath` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `resultPath` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `title`, `sellerId`, `description`, `price`, `categoryId`, `codePath`, `createdAt`, `updatedAt`, `resultPath`) VALUES
(2, 'addawedsfgh', '1', 'jaewjhfjhjqhw  fhh  ahu fahjkfhjkhjk afhjkfd hkjhjk dhjk asf dhjkfhk udsaf fd hjk hjk', 500.12, 3, 'slider.rar', '2023-06-15 00:50:03', '2023-06-15 05:41:57', 'pngtree-gamer-squad-army-logo-gaming-mascot-png-image_4895789.jpg'),
(3, 'addafgf vhvh', '1', 'jaewjhfjhjqhw  fhh  ahu faf', 500225, 3, 'xolonium-font.zip', '2023-06-15 00:50:15', '2023-06-15 03:59:51', 'pngtree-phantom-e-sports-logo-gaming-mascot-png-image_5272477.jpg'),
(4, 'adda', '1', 'jaewjhfjhjqhw  fhh  ahu fahjkfhjkhjk afhjkfd hkjhjk dhjk asf dhjkfhk udsaf fd hjk hjkh fdhfdakjh f', 500, 4, 'Knight.rar', '2023-06-15 00:50:25', '2023-06-15 00:50:25', 'CkYVGFwlmQA.jpg'),
(6, 'adda', '1', 'jaewjhfjhjqhw  fhh  ahu fahjkfhjkhjk afhjkfd hkjhjk dhjk asf dhjkfhk udsaf fd hjk hjkh fdhfdakjh f', 500, 4, 'JPTV20- Aleksei_Kolzov.rar', '2023-06-15 03:05:17', '2023-06-15 03:05:17', 'DP7Rnc-V4AA3z_O.jpg');

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
,`sellerId` varchar(255)
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
,`sellerId` varchar(255)
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
(4, 4, 8),
(5, 5, 8),
(6, 6, 8),
(7, 3, 8);

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
(2, 'node js', '2023-06-14 08:54:40', '2023-06-14 08:54:40'),
(3, 'js', '2023-06-14 08:54:49', '2023-06-14 08:54:49'),
(4, 'laravel', '2023-06-14 08:54:57', '2023-06-14 08:54:57'),
(5, 'react js', '2023-06-14 08:55:51', '2023-06-14 08:55:51'),
(6, 'type script', '2023-06-14 08:56:00', '2023-06-14 08:56:00'),
(7, 'jquery', '2023-06-14 08:56:09', '2023-06-14 08:56:09'),
(8, 'apache spark', '2023-06-14 08:56:20', '2023-06-14 08:56:20'),
(9, 'java', '2023-06-14 08:56:29', '2023-06-14 08:56:29'),
(10, 'html', '2023-06-14 08:56:33', '2023-06-14 08:56:33'),
(11, 'python', '2023-06-14 08:56:48', '2023-06-14 08:56:48'),
(12, 'php', '2023-06-14 10:07:48', '2023-06-14 10:07:48');

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
  `role` varchar(255) DEFAULT '1',
  `img` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `salt`, `role`, `img`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'aleksei22891@.com', '$2b$10$qsFINpk4a2nsIdmCTiu2cOCbgSSEu8GVS3cwq21DUrfkfRJ0hLsyq', '$2b$10$qsFINpk4a2nsIdmCTiu2cO', '3', 'pngtree-blue-samurai-esports-logo-gaming-mascot-logo-png-image_4262999.jpg', '2023-06-14 13:54:20', '2023-06-14 13:56:24'),
(2, 'mifis', 'mifis01@gmail.com', '$2b$10$vFNmzVMQ1c/ltJCNqI6Sb.oUblzbi48SpvQ07Xb2kZzaLSiWrXf5W', '$2b$10$vFNmzVMQ1c/ltJCNqI6Sb.', '1', NULL, '2023-06-13 18:35:58', '2023-06-13 18:35:58'),
(3, 'mifista', 'mifista01@gmail.com', '$2b$10$ecy6WIpCdP1Lkayg5q71r.PXEabGGlNAV.GpcVnHCTOMIc03BrBZu', '$2b$10$ecy6WIpCdP1Lkayg5q71r.', '1', NULL, '2023-06-13 18:36:37', '2023-06-13 18:36:37'),
(4, 'mif', 'mif01@gmail.com', '$2b$10$B7hC2h9pshOub/s5/vESBOTeUCXzqSWjjFSFsATg/DqsXKGQukipK', '$2b$10$B7hC2h9pshOub/s5/vESBO', '1', NULL, '2023-06-13 18:37:02', '2023-06-13 18:37:02'),
(6, 'daniilklishin', '22891aleksei@gmail.com', '$2b$10$8SZvOGJOFp55LC7RqasN2e6YjrKu/PlX3npVyMwWoFSOxUIQhH1QK', '$2b$10$8SZvOGJOFp55LC7RqasN2e', '1', NULL, '2023-06-13 22:53:00', '2023-06-13 22:53:00'),
(9, 'rustem', 'aaa@gmail.com', '$2b$10$vXb2k4FMsRMho8K2NRy1m.Jj8Dz/k2zD1p44NFEPGv3RgrOGiqTry', '$2b$10$vXb2k4FMsRMho8K2NRy1m.', '1', 'pngtree-extreme-hunter-gaming-logo-template-for-gamer-image_304139.jpg', '2023-06-15 05:27:23', '2023-06-15 05:34:21'),
(11, 'qwerty', 'qwerty@GMAIL.COM', '$2b$10$v7OaQl4LXeKcuwioJkQm4OvYFMuX7vjAtu.lG5QGR9Gin3izLlLKi', '$2b$10$v7OaQl4LXeKcuwioJkQm4O', '1', NULL, '2023-06-15 05:32:42', '2023-06-15 05:32:42');

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
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `histories`
--
ALTER TABLE `histories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `product_tags`
--
ALTER TABLE `product_tags`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `histories`
--
ALTER TABLE `histories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `product_tags`
--
ALTER TABLE `product_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
