import { Routes, Route } from 'react-router-dom';

import HomeLayout from '../layouts/HomeLayout/HomeLayout';
import Home from '../pages/Home'

function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<HomeLayout />}>
                <Route path='/' element={<Home />} />
            </Route>
        </Routes>
    );
}

export default RoutesApp;