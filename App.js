import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React, { useState } from 'react';
import { Departmentpage } from './pages/Departmentpage';
import {Homepage}  from './pages/Homepage';
import { Goodpage } from './pages/Goodpage';
import { NotFoundpage } from './pages/NotFoundpage';
import Breadcrumb from './components/Breadcrumb';
import {Good_information} from "./pages/Good_information";

function App() {

    const [crumbs, setCrumbs] = useState(['Home', 'Category', 'Sub Category']);

    const selected = crumb => {
        console.log(crumb);
    }

    return (
        <>
            <header>
                <Link to="/">Home Catalog</Link>
                <Link to="/department">Departments</Link>
            </header>
            <div>
                <h1>Добро пожаловать в наш строительный магазин!</h1>
            </div>
            <div className="App container">
               <p className="textStyle">Вы находитесь на странице: <Breadcrumb /></p>
            </div>
            <hr />
            <div>
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/department" element={<Departmentpage />}/>
                    <Route path="/department/goods" element={<Goodpage />}/>
                    <Route path="/goods_information/:id" element={<Good_information />}/>
                    <Route path="/goods_information" element={<Homepage />}/>
                    <Route path="*" element={<NotFoundpage />}/>
                </Routes>
            </div>
        </>
    );
}

export default App;