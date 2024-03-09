import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./Routes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Suspense>
        <RouterProvider router={router}/>
    </React.Suspense>
);

