import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { routes } from '../router/routes';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route, index) => <Route key={index} element={route.component} path={route.path} exact={route.exact} />)}
            
            <Route path="*" element={<Navigate to = "/home" />}/>
        </Routes>
    )
}

export default AppRouter;
