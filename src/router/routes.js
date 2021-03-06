import About from "../pages/About";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

export const routes = [
    {path: '/about', component: <About />, exact: true},
    {path: '/home', component: <Home />, exact: true},
    {path: '/projects', component: <Projects />, exact: true},
]

export const navElements = [
    {linkTo: '/home', title: 'Главная'},
    {linkTo: '/projects', title: 'Библиотека'},
    {linkTo: '/about', title: 'О проекте'},
]