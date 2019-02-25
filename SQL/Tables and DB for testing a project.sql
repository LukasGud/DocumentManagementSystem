-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.37-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for documentsdb
CREATE DATABASE IF NOT EXISTS `documentsdb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `documentsdb`;

-- Dumping structure for table documentsdb.authorities
CREATE TABLE IF NOT EXISTS `authorities` (
  `username` varchar(50) NOT NULL,
  `authority` varchar(50) NOT NULL DEFAULT 'ROLE_EMPLOYEE',
  UNIQUE KEY `authorities_idx_1` (`username`,`authority`),
  CONSTRAINT `authorities_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table documentsdb.authorities: ~6 rows (approximately)
DELETE FROM `authorities`;
/*!40000 ALTER TABLE `authorities` DISABLE KEYS */;
INSERT INTO `authorities` (`username`, `authority`) VALUES
	('john', 'ROLE_EMPLOYEE'),
	('mary', 'ROLE_EMPLOYEE'),
	('mary', 'ROLE_MANAGER'),
	('susan', 'ROLE_ADMIN'),
	('susan', 'ROLE_EMPLOYEE'),
	('susan', 'ROLE_PIMPACKIUKAS');
/*!40000 ALTER TABLE `authorities` ENABLE KEYS */;

-- Dumping structure for table documentsdb.customer
CREATE TABLE IF NOT EXISTS `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Dumping data for table documentsdb.customer: ~5 rows (approximately)
DELETE FROM `customer`;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` (`id`, `first_name`, `last_name`, `email`) VALUES
	(1, 'David', 'Adams', 'david@luv2code.com'),
	(2, 'John', 'Doe', 'john@luv2code.com'),
	(3, 'Ajay', 'Rao', 'ajay@luv2code.com'),
	(4, 'Mary', 'Public', 'mary@luv2code.com'),
	(5, 'Maxwell', 'Dixon', 'max@luv2code.com');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;

-- Dumping structure for table documentsdb.employee
CREATE TABLE IF NOT EXISTS `employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumping data for table documentsdb.employee: ~4 rows (approximately)
DELETE FROM `employee`;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` (`id`, `first_name`, `last_name`, `email`) VALUES
	(2, 'John', 'Doe', 'john@luv2code.com'),
	(3, 'Ajay', 'Rao', 'ajay@luv2code.com'),
	(4, 'Mary', 'Public', 'mary@luv2code.com'),
	(5, 'Maxwell', 'Dixon', 'max@luv2code.com');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;

-- Dumping structure for table documentsdb.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `authority` varchar(50) DEFAULT '''ROLE_EMPLOYEE''',
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `PASSWORD` varchar(68) NOT NULL,
  `enabled` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- Dumping data for table documentsdb.users: ~6 rows (approximately)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `username`, `authority`, `first_name`, `last_name`, `email`, `PASSWORD`, `enabled`) VALUES
	(1, 'john', 'ROLE_EMPLOYEE', 'john', 'johnson', 'bla@blah.com', '{bcrypt}$2a$10$EHf1kRGPOkk/z5AT45lLqeEI.WCQuaTd.684hmHaeasw3xNhJxRga', 1),
	(2, 'mary', 'ROLE_EMPLOYEE', 'mary', 'madson', 'boom@kaboom.eu', '{noop}test', 1),
	(3, 'susan', 'ROLE_PIMPACKIUKAS', 'susan', 'busan', 'sweep@beep.ru', '{noop}test', 1),
	(26, 'few', '', 'vardas', 'pavarde', 'abc', '{noop}testas', 0),
	(27, 'few2', '', 'vardas', 'pavarde', 'abc', '{noop}testas', 0),
	(28, 'few3', 'd', 'vardas', 'pavarde', 'abc', '{noop}testas', 0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
