-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2023 at 09:53 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `octopus_booking`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `booking_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`booking_id`, `user_id`) VALUES
(228, 1),
(229, 1),
(230, 1),
(231, 1),
(232, 1),
(233, 1),
(234, 1),
(235, 1),
(236, 1),
(225, 2),
(226, 2),
(227, 2),
(237, 2),
(238, 2),
(239, 2),
(240, 2),
(241, 2),
(242, 2),
(243, 2),
(244, 3),
(245, 3),
(246, 3),
(247, 3),
(248, 3),
(249, 3),
(250, 3),
(251, 4),
(252, 4),
(253, 4),
(254, 4),
(255, 4),
(256, 4),
(257, 4),
(258, 4),
(259, 4),
(260, 4),
(261, 4),
(262, 4),
(263, 4),
(264, 4),
(265, 4),
(266, 4);

-- --------------------------------------------------------

--
-- Table structure for table `booking_invitations`
--

CREATE TABLE `booking_invitations` (
  `booking_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `booking_times`
--

CREATE TABLE `booking_times` (
  `booking_id` int(10) UNSIGNED NOT NULL,
  `room_id` int(10) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `hour` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking_times`
--

INSERT INTO `booking_times` (`booking_id`, `room_id`, `date`, `hour`) VALUES
(230, 2, '2023-05-21', 7),
(230, 2, '2023-05-21', 8),
(230, 2, '2023-05-21', 9),
(230, 2, '2023-05-21', 10),
(230, 2, '2023-05-21', 11),
(230, 2, '2023-05-21', 13),
(230, 2, '2023-05-21', 14),
(230, 2, '2023-05-21', 15),
(230, 2, '2023-05-21', 16),
(231, 1, '2023-05-22', 8),
(231, 1, '2023-05-22', 9),
(231, 1, '2023-05-22', 10),
(231, 1, '2023-05-22', 11),
(231, 1, '2023-05-22', 14),
(231, 1, '2023-05-22', 15),
(231, 1, '2023-05-22', 16),
(232, 3, '2023-05-23', 8),
(232, 3, '2023-05-23', 9),
(232, 3, '2023-05-23', 10),
(232, 3, '2023-05-23', 11),
(232, 3, '2023-05-23', 12),
(232, 3, '2023-05-23', 15),
(232, 3, '2023-05-23', 16),
(232, 3, '2023-05-23', 17),
(232, 3, '2023-05-23', 18),
(232, 3, '2023-05-23', 19),
(233, 3, '2023-05-24', 11),
(233, 3, '2023-05-24', 12),
(233, 3, '2023-05-24', 13),
(233, 3, '2023-05-24', 14),
(234, 3, '2023-05-25', 15),
(234, 3, '2023-05-25', 16),
(234, 3, '2023-05-25', 17),
(234, 3, '2023-05-25', 18),
(234, 3, '2023-05-25', 19),
(235, 2, '2023-05-26', 8),
(235, 2, '2023-05-26', 9),
(235, 2, '2023-05-26', 10),
(235, 2, '2023-05-26', 16),
(235, 2, '2023-05-26', 17),
(235, 2, '2023-05-26', 18),
(235, 2, '2023-05-26', 19),
(236, 3, '2023-05-27', 7),
(236, 3, '2023-05-27', 8),
(236, 3, '2023-05-27', 9),
(236, 3, '2023-05-27', 10),
(236, 3, '2023-05-27', 13),
(236, 3, '2023-05-27', 14),
(236, 3, '2023-05-27', 15),
(236, 3, '2023-05-27', 16),
(236, 3, '2023-05-27', 17),
(237, 4, '2023-05-21', 9),
(237, 4, '2023-05-21', 10),
(237, 4, '2023-05-21', 11),
(237, 4, '2023-05-21', 12),
(237, 4, '2023-05-21', 14),
(237, 4, '2023-05-21', 15),
(237, 4, '2023-05-21', 16),
(238, 3, '2023-05-22', 7),
(238, 3, '2023-05-22', 8),
(238, 3, '2023-05-22', 9),
(238, 3, '2023-05-22', 12),
(238, 3, '2023-05-22', 13),
(238, 3, '2023-05-22', 14),
(238, 3, '2023-05-22', 15),
(239, 2, '2023-05-23', 9),
(239, 2, '2023-05-23', 10),
(239, 2, '2023-05-23', 11),
(239, 2, '2023-05-23', 12),
(239, 2, '2023-05-23', 13),
(239, 2, '2023-05-23', 15),
(239, 2, '2023-05-23', 16),
(239, 2, '2023-05-23', 17),
(240, 1, '2023-05-24', 8),
(240, 1, '2023-05-24', 9),
(240, 1, '2023-05-24', 10),
(240, 1, '2023-05-24', 13),
(240, 1, '2023-05-24', 14),
(240, 1, '2023-05-24', 15),
(240, 1, '2023-05-24', 16),
(240, 1, '2023-05-24', 17),
(241, 1, '2023-05-25', 11),
(241, 1, '2023-05-25', 12),
(241, 1, '2023-05-25', 13),
(241, 1, '2023-05-25', 14),
(241, 1, '2023-05-25', 17),
(241, 1, '2023-05-25', 18),
(242, 4, '2023-05-26', 10),
(242, 4, '2023-05-26', 11),
(242, 4, '2023-05-26', 12),
(242, 4, '2023-05-26', 13),
(242, 4, '2023-05-26', 16),
(242, 4, '2023-05-26', 17),
(242, 4, '2023-05-26', 18),
(242, 4, '2023-05-26', 19),
(242, 4, '2023-05-26', 20),
(243, 4, '2023-05-27', 11),
(243, 4, '2023-05-27', 12),
(243, 4, '2023-05-27', 13),
(243, 4, '2023-05-27', 14),
(243, 4, '2023-05-27', 15),
(243, 4, '2023-05-27', 17),
(243, 4, '2023-05-27', 18),
(243, 4, '2023-05-27', 19),
(243, 4, '2023-05-27', 20),
(244, 8, '2023-05-21', 12),
(244, 8, '2023-05-21', 13),
(244, 8, '2023-05-21', 14),
(244, 8, '2023-05-21', 15),
(244, 8, '2023-05-21', 18),
(244, 8, '2023-05-21', 19),
(245, 5, '2023-05-22', 17),
(245, 5, '2023-05-22', 18),
(245, 5, '2023-05-22', 19),
(245, 6, '2023-05-22', 10),
(245, 6, '2023-05-22', 11),
(245, 8, '2023-05-22', 15),
(245, 8, '2023-05-22', 16),
(246, 5, '2023-05-23', 10),
(246, 5, '2023-05-23', 11),
(246, 5, '2023-05-23', 12),
(246, 5, '2023-05-23', 17),
(246, 5, '2023-05-23', 18),
(246, 6, '2023-05-23', 14),
(246, 6, '2023-05-23', 15),
(246, 6, '2023-05-23', 16),
(247, 5, '2023-05-24', 9),
(247, 5, '2023-05-24', 10),
(247, 5, '2023-05-24', 11),
(247, 5, '2023-05-24', 12),
(247, 5, '2023-05-24', 14),
(247, 5, '2023-05-24', 15),
(247, 5, '2023-05-24', 16),
(247, 5, '2023-05-24', 17),
(247, 5, '2023-05-24', 18),
(248, 5, '2023-05-25', 10),
(248, 5, '2023-05-25', 11),
(248, 5, '2023-05-25', 12),
(248, 5, '2023-05-25', 16),
(248, 5, '2023-05-25', 17),
(248, 5, '2023-05-25', 18),
(248, 5, '2023-05-25', 19),
(248, 5, '2023-05-25', 20),
(248, 5, '2023-05-25', 21),
(249, 7, '2023-05-26', 8),
(249, 7, '2023-05-26', 9),
(249, 7, '2023-05-26', 12),
(249, 7, '2023-05-26', 13),
(249, 7, '2023-05-26', 15),
(249, 7, '2023-05-26', 16),
(249, 7, '2023-05-26', 17),
(249, 7, '2023-05-26', 18),
(250, 6, '2023-05-27', 9),
(250, 6, '2023-05-27', 10),
(250, 6, '2023-05-27', 11),
(250, 6, '2023-05-27', 13),
(250, 6, '2023-05-27', 14),
(250, 6, '2023-05-27', 15),
(250, 6, '2023-05-27', 18),
(250, 6, '2023-05-27', 19),
(251, 6, '2023-05-21', 8),
(251, 6, '2023-05-21', 9),
(251, 6, '2023-05-21', 10),
(251, 6, '2023-05-21', 11),
(251, 6, '2023-05-21', 15),
(251, 6, '2023-05-21', 16),
(251, 6, '2023-05-21', 17),
(251, 6, '2023-05-21', 18),
(252, 11, '2023-05-22', 13),
(252, 11, '2023-05-22', 14),
(252, 11, '2023-05-22', 15),
(252, 12, '2023-05-22', 8),
(252, 12, '2023-05-22', 9),
(252, 12, '2023-05-22', 10),
(252, 12, '2023-05-22', 11),
(252, 13, '2023-05-22', 17),
(252, 13, '2023-05-22', 18),
(252, 13, '2023-05-22', 19),
(252, 13, '2023-05-22', 20),
(253, 8, '2023-05-23', 8),
(253, 8, '2023-05-23', 9),
(253, 8, '2023-05-23', 10),
(253, 8, '2023-05-23', 12),
(253, 8, '2023-05-23', 13),
(253, 8, '2023-05-23', 14),
(253, 8, '2023-05-23', 15),
(253, 8, '2023-05-23', 16),
(253, 8, '2023-05-23', 17),
(254, 10, '2023-05-24', 12),
(254, 10, '2023-05-24', 13),
(254, 10, '2023-05-24', 14),
(254, 10, '2023-05-24', 15),
(254, 10, '2023-05-24', 16),
(254, 13, '2023-05-24', 7),
(254, 13, '2023-05-24', 8),
(254, 13, '2023-05-24', 9),
(255, 8, '2023-05-25', 15),
(255, 8, '2023-05-25', 16),
(255, 8, '2023-05-25', 17),
(255, 8, '2023-05-25', 18),
(255, 8, '2023-05-25', 19),
(255, 12, '2023-05-25', 9),
(255, 12, '2023-05-25', 10),
(255, 12, '2023-05-25', 11),
(255, 12, '2023-05-25', 12),
(255, 12, '2023-05-25', 13),
(256, 9, '2023-05-26', 14),
(256, 9, '2023-05-26', 15),
(256, 9, '2023-05-26', 16),
(256, 9, '2023-05-26', 17),
(256, 11, '2023-05-26', 9),
(256, 11, '2023-05-26', 10),
(256, 11, '2023-05-26', 11),
(256, 11, '2023-05-26', 12),
(256, 11, '2023-05-26', 19),
(256, 11, '2023-05-26', 20),
(257, 8, '2023-05-27', 8),
(257, 8, '2023-05-27', 9),
(257, 8, '2023-05-27', 10),
(257, 8, '2023-05-27', 11),
(257, 8, '2023-05-27', 18),
(257, 8, '2023-05-27', 19),
(257, 8, '2023-05-27', 20),
(257, 8, '2023-05-27', 21),
(257, 11, '2023-05-27', 14),
(257, 11, '2023-05-27', 15),
(257, 11, '2023-05-27', 16),
(258, 4, '2023-05-20', 8),
(258, 4, '2023-05-20', 9),
(258, 4, '2023-05-20', 10),
(258, 4, '2023-05-20', 11),
(258, 4, '2023-05-20', 13),
(258, 4, '2023-05-20', 14),
(259, 11, '2023-05-28', 11),
(259, 11, '2023-05-28', 12),
(259, 11, '2023-05-28', 13),
(259, 11, '2023-05-28', 14),
(259, 11, '2023-05-28', 16),
(259, 11, '2023-05-28', 17),
(259, 11, '2023-05-28', 18),
(266, 3, '2023-05-21', 19),
(266, 3, '2023-05-21', 20);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`role_id`, `name`) VALUES
(1, 'Admin'),
(2, 'Employee'),
(3, 'room-view');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `room_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `capacity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`room_id`, `name`, `capacity`) VALUES
(1, 'Mercury', 2),
(2, 'Comet', 2),
(3, 'Asteroid', 2),
(4, 'Venus', 4),
(5, 'Pluto', 4),
(6, 'Earth', 5),
(7, 'Mars', 5),
(8, 'Moon', 5),
(9, 'Saturn', 6),
(10, 'Uranus', 6),
(11, 'Neptune', 6),
(12, 'Jupiter', 7),
(13, 'Black Hole', 18),
(14, 'Sun', 16),
(15, 'Galaxy', 20);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password_hash` varchar(255) NOT NULL,
  `role_id` tinyint(3) UNSIGNED NOT NULL,
  `phone_number` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `email`, `first_name`, `last_name`, `password_hash`, `role_id`, `phone_number`) VALUES
(1, 'sofia@example.com', 'Sofia', 'Holm', '$2y$10$Oar2blV5.VmV0sVQZrNn/u.HEtPUkrI4s3M93qWNoXHLu5vzcBxTu', 1, ''),
(2, 'johan@example.com', 'Johan', 'Persson', '$2y$10$FVFaIRFXQxFEGQk0igHFneyMOLw6D6rjhlCC7pWntiaN8.Sgw7rQS', 2, ''),
(3, 'ella@example.com', 'Ella', 'Nilsson', '$2y$10$klVx8oMucOr0uTBWWiWd0.v4OmwXTMeuwzw5EQwGep8Saym3ydGmW', 2, ''),
(4, 'alice@example.com', 'Alice', 'Andersson', '$2y$10$PX6AegJSRDB4XpKB9yfhRuV5o0X3XLYgL6SEjnJHB3z5UMIykHImy', 2, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`booking_id`),
  ADD KEY `fk_user_id` (`user_id`);

--
-- Indexes for table `booking_invitations`
--
ALTER TABLE `booking_invitations`
  ADD PRIMARY KEY (`booking_id`,`user_id`),
  ADD KEY `booking_invitations_ibfk_2` (`user_id`);

--
-- Indexes for table `booking_times`
--
ALTER TABLE `booking_times`
  ADD PRIMARY KEY (`room_id`,`date`,`hour`),
  ADD KEY `booking_times_ibfk_1` (`booking_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`room_id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `booking_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=280;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `room_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `booking_invitations`
--
ALTER TABLE `booking_invitations`
  ADD CONSTRAINT `booking_invitations_ibfk_1` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`booking_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `booking_invitations_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `booking_times`
--
ALTER TABLE `booking_times`
  ADD CONSTRAINT `booking_times_ibfk_1` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`booking_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `booking_times_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`room_id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
