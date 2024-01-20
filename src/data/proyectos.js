import toastDemo from '../data/gifs/toast-demo.gif';
import wordleDemo from '../data/gifs/wordle-demo.gif';
import gifExpertApp from '../data/gifs/GifExperxtApp.gif';
import heroesSPA from '../data/gifs/HeroesSPA.gif';
import CalendarFront from '../data/gifs/CalendarFront.gif';
import CaldndarBack from '../data/gifs/CalendarBack.gif';
import Journal from '../data/gifs/JournalApp.gif';
import MapaApp from '../data/gifs/MapaApp.gif';
import RandomChuck from '../data/gifs/RandomChuck.gif';


export const proyectos = [
    {
        nombre: "Aplicacion-Mapa-React",
        descripcion: "Este es un proyecto desarrollado en React con TS. Es un mapa, con buscador de lugares y forma de llegar.",
        url: "https://github.com/Pastito09/Aplicacion-Mapa-React",
        img: MapaApp,
        gestion_paquete: "npm",
        script: "npm start"
    },
    {
        nombre: "Calendar-FrontEnd",
        descripcion: "Aplicación de un calendario desarrollado en React, con la posibilidad de crear un usuario, loggearse, elegir una fecha y crear un evento. Especificando horario de inicio y de finalización.",
        url: "https://github.com/Pastito09/Calendar-FrontEnd",
        img: CalendarFront,
        gestion_paquete: "yarn + vite",
        script: "yarn run dev"
    },
    {
        nombre: "Calendar-BackEnd",
        descripcion: "BackEnd de la aplicación CalendarApp, desarrollada en JavaScript, con MongoDB como base de datos, Mongoose para armar los modelos de las peticiones y conectar con la DB, Express para manejar la response y crear el router con las acciones del backend como get, post, put, delete. Validación y creación de JWT, validación de contraseña, usuario, email.",
        url: "https://github.com/Pastito09/Calendar-BackEnd",
        img: CaldndarBack,
        gestion_paquete:  "nodemon",
        script: "npm run dev"
    },
    {
        nombre: "Journal-App",
        descripcion: "Desarrollada en React, esta aplicación tiene una entrada para crear un usuario y enviarlo a la base de dato de Firebase, o loggearse recuperando el usuario de la misma DB. La estructura y diseño con Mui material. Y Redux Toolkit para el manejo de el estado de la aplicación. En la cual se pueden crear una entrada, subir una foto, una caja de texto para describir el evento, y al guardar aparece en el sidebar, con el titulo como referencia.",
        url: "https://github.com/Pastito09/Journal-App",
        img: Journal,
        gestion_paquete: "yarn + vite",
        script: "yarn run dev"
    },
    {
        nombre: "Toast Playground",
        descripcion: "Un proyecto donde mediante un text-input, y radio buttons con los cuales elegir el modo, apretando el elemento 'Pop Toast!' aparece el mensaje en un componente que se agrupa en la zona inferior derecha.",
        url: "https://github.com/Pastito09/project-toast",
        img: toastDemo,
        gestion_paquete: "Parcel",
        script: "npm run dev"
    },
    {
        nombre: "Word Game",
        descripcion: "Esta es la recreación del famoso juego 'Wordle' en donde hay un text input en el cual solo se permiten 5 letras y hay que adivinar la palabra en un máximo de 5 intentos.",
        url: "https://github.com/Pastito09/project-wordle",
        img: wordleDemo,
        gestion_paquete: "Parcel",
        script: "npm run dev"
    },
    {
        nombre: "GIF expert App",
        descripcion: "Esta aplicación tiene una busqueda por default de 'One Punch' en su estado inicial, pero en el elemento del input, ingresando un texto para buscar, despliega 10 gifs relacionados. Hace una petición a un endpoint y retorna el resultado en una grilla de gifs.",
        url: "https://github.com/Pastito09/react-gif-expert",
        img: gifExpertApp,
        gestion_paquete: "Yarn + Vite",
        script: "yarn run dev"
    },
    {
        nombre: "Heroes-SPA",
        descripcion: "Esta simple page application tiene un login genérico, despliega una página de héroes, con sus características, y una búsqueda en la cual podes buscar uno en particular. Con la utilización de rotas privadas y publicas. Y hooks de React.",
        url: "https://github.com/Pastito09/Heroes-SPA",
        img: heroesSPA,
        gestion_paquete: "Yarn + Vite",
        script: "yarn run dev"
    },
    {
        nombre: "RandomChuck",
        descripcion: "Aplicación simple que al momento de renderizar hace una petición a un endpoint que retorna frases aleatorias de Chuck Norris. Y con un botón se puede realizar esa petición otra vez para tener una frase aleatoria nueva.",
        url: "https://github.com/Pastito09/RandomChuck",
        img: RandomChuck,
        gestion_paquete: "Yarn + Vite",
        script: "yarn run dev"
    },
    {
        nombre: "CalendarApp-PWA",
        descripcion: "Este proyecto es la transformación de la aplicación de Calendar FrontEnd en una progresive web application. Para poder usar algunos componentes de la pagina sin conexión. Se debe utilizar con el BackEnd del proyecto original.",
        url: "https://github.com/Pastito09/CalendarApp-PWA",
        img: CalendarFront,
        gestion_paquete: "Yarn",
        script: "yarn start"
    },
]






// {
//     nombre: ,
//     descripcion: ,
//     url: ,
//     img: ,
//     gestion_paquete:
// },