-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 13, 2021 at 08:51 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `facebook_posts`
--

-- --------------------------------------------------------

--
-- Table structure for table `linkedin_auth`
--

CREATE TABLE `linkedin_auth` (
  `id` int(11) NOT NULL,
  `auth` text NOT NULL,
  `linked_acc_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `linkedin_auth`
--

INSERT INTO `linkedin_auth` (`id`, `auth`, `linked_acc_id`) VALUES
(1, 'AQXAMrdAzLMN_VIMa1P9FqtgXxuwJciDy3Yquwc3wJwiATIp00N6stJ1_mPOdGlTaUvLjxxIRXGkjjw0hFUGvmPiVIb5S3oZfdiLT-vybiMzTOX1Wz1uEm-CW3qBhXobjl6uoLQzPObz8V9q0DY8_2Da4WQ1_ok4iD4OIizOTnDjZCHBQP7gm9TZufUuipq9XLfjTl36zQCa8uLxbNd9R7e0e1Hf0YBoqP1SneIJ4p5S-nA6KOGoIPIi_EWolqRqq7-lLxQjP16VAQP1zL6fbPXHm4Dkb9jKo6smc6lh__UgD7dCEnl0x3zyM2gxIQZ1Uhoj3gIMXWKkvjeQMptUaUo4q154QQ', 'bIp1Y2BKog');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `post_title` text NOT NULL,
  `post_content` text NOT NULL,
  `image_url` text NOT NULL,
  `posted` tinyint(1) NOT NULL DEFAULT 0,
  `post_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `post_title`, `post_content`, `image_url`, `posted`, `post_date`) VALUES
(6, 'New Linkedin Post', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'https://images.unsplash.com/photo-1586601473758-846acb72d517?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80', 1, '2021-06-13 06:40:24'),
(7, 'New Post dasd Title', 'Lorem Ipsum is simply dasdsadasd dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', 1, '2021-06-13 06:40:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `linkedin_auth`
--
ALTER TABLE `linkedin_auth`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `linkedin_auth`
--
ALTER TABLE `linkedin_auth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
