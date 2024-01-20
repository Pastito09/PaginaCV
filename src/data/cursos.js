import freeCodeCamp from "./logos/freeCodeCamp.png";
import udemy from "./logos/udemy.jpg";
import joyOfReact from "./logos/joyOfReact.png";


export const cursos = [
    {
        id: 1,
        nombre: "Responsive Web Design",
        url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
        duracion: "22 Hs.",
        img: freeCodeCamp,
        contenido: "HTML, CSS, web-responsive",
        profesor : "Free Code Camp",
    },
    {
        id: 2,
        nombre: "JavaScript Algorithms and Data Structures",
        url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
        duracion: "28 Hs.",
        img: freeCodeCamp,
        contenido: "Fundamentos de JavaScript: Variables, arreglos, objetos, loops, funciones. POO y FP",
        profesor : "Free Code Camp",
    },{
        id: 3,
        nombre: "React: De cero a experto ( Hooks y MERN )",
        url: "https://www.udemy.com/course/react-cero-experto/",
        duracion: "54 Hs.",
        img: udemy,
        contenido: "Context API, MERN, Hooks, Firestore, JWT, Testing, Autenticaciones, Despliegues, CRUD, Logs, MUI, Multiple Routers.",
        profesor : "Fernando Herrera",
    },{
        id: 4,
        nombre: "React PRO: Lleva tus bases al siguiente nivel",
        url: "https://www.udemy.com/course/react-pro/",
        duracion: "26 Hs.",
        img: udemy,
        contenido: "Storybook, Github Actions, publicar NPM, TypeScript, patrones de componentes, PWA, Formik, formularios dinámicos.",
        profesor : "Fernando Herrera",
    },{
        id: 5,
        nombre: "The Joy of React",
        url: "https://courses.joshwcomeau.com/joy-of-react",
        duracion: "35 Hs.",
        contenido: "Fundamentos de React, componentes, props, iteraciones, manejador de eventos, useState, forms, React Hooks, useEffect, useMemo, useCallback, useReducer, NextJs.",
        img: joyOfReact,
        profesor : "Josh Comeau",
    },
]