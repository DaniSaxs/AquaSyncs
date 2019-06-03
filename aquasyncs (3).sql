-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-05-2019 a las 15:10:15
-- Versión del servidor: 10.1.32-MariaDB
-- Versión de PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `aquasyncs`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login`
--

CREATE TABLE `login` (
  `id` int(2) NOT NULL,
  `usuario` varchar(15) NOT NULL,
  `contra` varchar(33) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `login`
--

INSERT INTO `login` (`id`, `usuario`, `contra`) VALUES
(1, 'DanielR', 'ELloco123'),
(2, 'CristianM', 'marin18'),
(3, 'DaniSaxs', '532001');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE `registro` (
  `id` int(4) NOT NULL,
  `nombre` varchar(33) NOT NULL,
  `edad` int(2) NOT NULL,
  `correo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `registro`
--

INSERT INTO `registro` (`id`, `nombre`, `edad`, `correo`) VALUES
(1, 'DaniSaxs', 18, 'danielsteven1994@gmail.com'),
(15, 'juan', 18, 'alejithogo2000@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `secciones`
--

CREATE TABLE `secciones` (
  `id` int(2) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `img1` varchar(150) NOT NULL,
  `img2` varchar(150) NOT NULL,
  `texto1` text NOT NULL,
  `texto2` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `secciones`
--

INSERT INTO `secciones` (`id`, `titulo`, `img1`, `img2`, `texto1`, `texto2`) VALUES
(1, 'Nacimiento del Ballet Acuático', 'img/open1_7.jpg', 'img/pllx2.jpg', 'Al comienzo del siglo XX la natación sincronizada era un deporte exclusivo de hombres y rápidamente se fue convirtiendo en una modalidad femenina', 'El nado sincronizado tomaba el nombre de Ballet Acuático'),
(2, 'Popularización en América', 'img/index_1.jpg', 'img/index_3.jpg', 'Annette Kellerman una mujer que bailo con peces en un tanque de cristal', 'Primera mujer que uso traje de baño de una sola pieza'),
(3, 'Fama en el mundo', 'img/index_2.jpg', 'img/index_4.jpg', 'Gracias a su habilidad, imaginación y creatividad Peg Seller fue la primera campeona en Nado sincronizado.', 'Tanta práctica, sacrificios y esfuerzos no son en vano.'),
(4, 'Las Sirenas cambian el Nombre', 'img/index_5.jpg', 'img/index_6.png', 'Durante los años 30, tuvieron lugar las primeras competencias en Alemania, Canadá y los Estados Unidos.', 'Su nombre se le debe a la submarinista y gimnasta Katherine Curtis.'),
(5, 'La Estrella del Nado Sincronizado', 'img/index_7.jpg', 'img/index_8.jpg', 'Una gran actriz', 'Vida y trayectoria'),
(6, 'La Aparición del Reglamento', 'img/index_9.jpg', 'img/index_10.jpg', 'Uno de los deportes más exigentes que existe', 'Algunas de las Reglas'),
(7, 'El gran paso a los Olímpicos', 'img/index_12.jpg', 'img/index_11.jpg', 'Tracie Ruiz y Candy Costie ', 'El primer campeonato');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- Indices de la tabla `registro`
--
ALTER TABLE `registro`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- Indices de la tabla `secciones`
--
ALTER TABLE `secciones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `login`
--
ALTER TABLE `login`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `registro`
--
ALTER TABLE `registro`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `secciones`
--
ALTER TABLE `secciones`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
