const data = [
	{
		id: 1,
		image:
			'https://media.licdn.com/dms/image/C4D22AQEwWt12Mj3c7A/feedshare-shrink_2048_1536/0/1677669496323?e=1687392000&v=beta&t=PdocFyK260pL0OiwQpUn8T-6bS34wqH3viYVU0s2kmg',
		title: 'Proyecto "Mi Tienda"',
		category: 'HTML/CSS',
		url: 'https://cristelos.github.io/mi-tienda-flex/',
		description: 'Trabajo que consistía en copiar la página web de Pull&Bear solo con Html y css.',
		date: 'Publicado el 1 de Marzo de 2023',
		ReadingTime: '5 min read',
	},
	{
		id: 2,
		image:
			'https://res.cloudinary.com/dgguxcib9/image/upload/v1684320386/portfolio/Captura_de_pantalla_2023-05-17_a_las_12.45.01_hseftl.png',
		title: 'BMW Home page',
		category: 'HTML/CSS',
		url: 'https://cristelos.github.io/home-bmw/',
		description:
			'Proyecto para replicar la Home de la marca BMW.',
		date: 'Publicado el 2 de Marzo de 2023',
		ReadingTime: '3 min read',
	},
	{
		id: 3,
		image:
			'https://res.cloudinary.com/dgguxcib9/image/upload/v1684320799/portfolio/Captura_de_pantalla_2023-05-17_a_las_12.53.00_uzotas.png',
		title: 'Copia de la versión mobile de Slack',
		category: 'HTML/CSS',
		url: 'https://github.com/Cristelos/slack',
		description:
			'Copia de la página principal de Slack, pero solo de la versión para móviles',
		date: 'Publicado el 5 de Marzo de 2023',
		ReadingTime: '4 min read',
	},
	{
		id: 4,
		image:
			'https://res.cloudinary.com/dgguxcib9/image/upload/v1684321257/portfolio/Captura_de_pantalla_2023-05-17_a_las_13.00.45_elpjxk.png',
		title: 'Aplicación Pokedex',
		category: 'Javascript',
		url: 'https://cristelos.github.io/pokeapi-todolist/index.html',
		description:
			'Con la API de Pokemon, crear una aplicación que te va pintando los pokemons.',
		date: 'Publicado el 16 de Marzo de 2023',
		ReadingTime: '3 min read',
	},
	{
		id: 5,
		image:
			'https://res.cloudinary.com/dgguxcib9/image/upload/v1684324839/portfolio/Captura_de_pantalla_2023-05-17_a_las_14.00.26_p6nnox.png',
		title: 'Creación de una API de películas',
		category: 'Node.js',
		url:'https://www.linkedin.com/posts/patricia-fernandez-ruibal_hola-a-todos-hoy-os-comparto-el-resultado-activity-7044027938928738304-m6yo?utm_source=share&utm_medium=member_desktop',
		description:
			'Creación de una API en Nodejs con entidades de películas y de cines.',
		date: 'Publicado el 22 de Marzo de 2023',
		ReadingTime: '10 min read',
	},
	{
		id: 6,
		image:
			'https://res.cloudinary.com/dgguxcib9/image/upload/v1684325092/portfolio/Captura_de_pantalla_2023-05-17_a_las_14.04.33_wtkjww.png',
		title: 'Trabajo en grupo de la creación de una API',
		category: 'Node.js',
		url: 'https://www.linkedin.com/posts/sergio-bernabe-arahuetes_estos-d%C3%ADas-hemos-trabajado-con-nodejs-en-activity-7046818543010484224-02fS?utm_source=share&utm_medium=member_desktop',
		description:
			'Trabajo en grupo de la creación de una API con autentificación, subida de datos, etc.',
		date: 'Publicado el 27 de Marzo de 2023',
		ReadingTime: '8 min read',
	},
	{
		id: 7,
		image:
			'https://res.cloudinary.com/dgguxcib9/image/upload/v1684330786/portfolio/Captura_de_pantalla_2023-05-17_a_las_15.39.35_fdjq2n.png',
		title: 'Creación de formulario en Angular',
		category: 'Angular',
		url:'https://cristelos-s3-ejercicios-angular.vercel.app/',
		description:
			'Formulario en Angular para subir nuevos elementos a la bbdd.',
		date: 'Publicado el 30 de Marzo de 2023',
		ReadingTime: '9 min read',
	},
	{
		id: 8,
		image:
			'https://res.cloudinary.com/dgguxcib9/image/upload/v1684331051/portfolio/Captura_de_pantalla_2023-05-17_a_las_15.44.02_j5jw3d.png',
		title: 'Tienda online Shopéame',
		category: 'Angular',
		url:'https://shopeame-angular-weld.vercel.app/',
		description:
			'Página web hecha con Angular en la que se trataba de crear una tienda online.',
		date: 'Publicado el 1 de Abril de 2023',
		ReadingTime: '8 min read',
	},
	{
		id: 9,
		image:
			'https://res.cloudinary.com/dgguxcib9/image/upload/v1684331268/portfolio/Captura_de_pantalla_2023-05-17_a_las_15.47.38_ev8qzh.png',
		title: 'Copia de Netflix',
		category: 'Angular',
		url: 'https://netflix-practica.vercel.app/',
		description:
			'Proyecto que se basa en copiar los estilos de Netflix con Angular.',
		date: 'Publicado el 5 de Abril de 2023',
		ReadingTime: '8 min read',
	},
	{
		id: 10,
		image:
			'https://res.cloudinary.com/dgguxcib9/image/upload/v1684331532/portfolio/Captura_de_pantalla_2023-05-17_a_las_15.52.01_thd9du.png',
		title: 'Games',
		category: 'Angular',
		url:'https://games-angular.vercel.app/tresuare-finder',
		description:
			'Creación de diferentes juegos con Angular y TypeScript.',
		date: 'Publicado el 10 de Abril de 2023',
		ReadingTime: '4 min read',
	},
	{
		id: 11,
		image:
			'https://res.cloudinary.com/dgguxcib9/image/upload/v1684331729/portfolio/Captura_de_pantalla_2023-05-17_a_las_15.55.18_ii9puq.png',
		title: 'Rick y Morty',
		category: 'Angular',
		url:'https://practica-rickymortyangular.vercel.app/character',
		description:
			'Trabajo en Angular sobre la base de la API de Rick y Morty.',
		date: 'Publicado el 6 de Abril de 2023',
		ReadingTime: '6 min read',
	},
	{
		id: 12,
		image:
			'https://res.cloudinary.com/dgguxcib9/image/upload/v1684331978/portfolio/Captura_de_pantalla_2023-05-17_a_las_15.59.30_ihvi8z.png',
		title: 'Reloj, cuenta atrás y cronómetro',
		category: 'React',
		url:'https://my-clock-exercise.vercel.app/',
		description:
			'Proyecto usando React y javascript de la creación de un reloj, una cuenta atrás según una fecha seleccionada y de un cronómetro.',
		date: 'Publicado el 15 de Abril de 2023',
		ReadingTime: '6 min read',
	},
	{
		id: 13,
		image:
			'https://res.cloudinary.com/dgguxcib9/image/upload/v1684332197/portfolio/Captura_de_pantalla_2023-05-17_a_las_16.03.07_t6g85x.png',
		title: 'Trivial',
		category: 'React',
		url:'https://trivial-exercise.vercel.app/',
		description:
			'En base a una API con preguntas y respuestas, creación de un juego con React.',
		date: 'Publicado el 16 de Abril de 2023',
		ReadingTime: '6 min read',
	},
	{
		id: 14,
		image:
			'https://res.cloudinary.com/dgguxcib9/image/upload/v1684332315/portfolio/Captura_de_pantalla_2023-05-17_a_las_16.05.00_um8syt.png',
		title: 'Gestor de productos',
		category: 'React',
		url:'https://create-products.vercel.app/',
		description:
			'Gestor de productos creado en React, donde se pueden añadir, editar, eliminar y hasta comentar productos.',
		date: 'Publicado el 20 de Abril de 2023',
		ReadingTime: '6 min read',
	},
	{
		id: 15,
		image:
			'https://res.cloudinary.com/dgguxcib9/image/upload/v1684332706/portfolio/Captura_de_pantalla_2023-05-17_a_las_16.11.32_f2lrge.png',
		title: 'Game of thrones',
		category: 'React',
		url:'https://www.linkedin.com/posts/patricia-fernandez-ruibal_este-fin-de-semana-ha-tocado-hacer-el-proyecto-activity-7056161387571519488-qkR1?utm_source=share&utm_medium=member_desktop',
		description:
			'Proyecto en grupo de la creación de la página web de Juego de tronos a partir de una API con sus personajes.',
		date: 'Publicado el 24 de Abril de 2023',
		ReadingTime: '6 min read',
	},
	{
		id: 16,
		image:
			'https://res.cloudinary.com/dgguxcib9/image/upload/v1684332932/portfolio/Captura_de_pantalla_2023-05-17_a_las_16.14.40_ctgzab.png',
		title: 'Maleteo',
		category: 'React',
		url:'https://www.linkedin.com/posts/patricia-fernandez-ruibal_html5-css3-sass-activity-7063815957193928704-qW1E?utm_source=share&utm_medium=member_desktop',
		description:
			'Trabajo grupal final para el bootcamp de Desarrollo Full Stack. Creación tanto del backend como el frontend de la aplicación Maleteo.',
		date: 'Publicado el 11 de Mayo de 2023',
		ReadingTime: '6 min read',
	},
];

export default data;