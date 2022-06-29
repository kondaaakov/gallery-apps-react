import React from 'react';
import { Route, Routes, Navigate, useLocation} from "react-router-dom";
import { routes, navElements } from '../router/routes';

const AppRouter = () => {
    const location = useLocation();

    let title = 'Галерея'

    navElements.forEach(element => {
        if (element.linkTo === location.pathname) title = title + ' - ' + element.title 
    });

    document.title = title;

    return (
        <Routes>
            {routes.map((route, index) => <Route key={index} element={route.component} path={route.path} exact={route.exact} />)}
            
            <Route path="*" element={<Navigate to = "/home" />}/>
        </Routes>
    )
}

export default AppRouter;
