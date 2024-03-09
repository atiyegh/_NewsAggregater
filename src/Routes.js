import {createBrowserRouter, createRoutesFromElements, Route, Routes} from "react-router-dom";
import MainLayout from "./pages/layouts/MainLayout";
import React from "react";

const Home=React.lazy(()=>import('./pages/homePage/index'));
const Personalization=React.lazy(()=>import('./pages/personalization/index'))
const NotFoundPage=React.lazy(()=>import('./pages/notFound/index.js'))

export const router=createBrowserRouter(createRoutesFromElements(
        <Route path={'/'} element={<MainLayout/>}>
            <Route index={true} path={'/'} element={<Home/>}/>
            <Route path={"/personalization"} element={<Personalization/>}/>
            <Route path={"*"} element={<NotFoundPage/>}/>
        </Route>
))