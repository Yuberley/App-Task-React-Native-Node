CREATE DATABASE IF NOT EXISTS `tasksdb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE `tasksdb`;

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE IF NOT EXISTS `tasks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `status`, `created_at`) VALUES
(1, 'Task 1', 'Description 1', 1, '2022-12-31 00:00:00'),
(2, 'Task 2', 'Description 2', 0, '2022-12-31 00:00:00'),
(3, 'Task 3', 'Description 3', 1, '2022-12-31 00:00:00'),
(4, 'Task 4', 'Description 4', 0, '2022-12-31 00:00:00'),
(5, 'Task 5', 'Description 5', 1, '2022-12-31 00:00:00'),
(6, 'Task 6', 'Description 6', 0, '2022-12-31 00:00:00'),
(7, 'Task 7', 'Description 7', 1, '2022-12-31 00:00:00'),
(8, 'Task 8', 'Description 8', 0, '2022-12-31 00:00:00'),
(9, 'Task 9', 'Description 9', 1, '2022-12-31 00:00:00'),
(10, 'Task 10', 'Description 10', 0, '2022-12-31 00:00:00');

