import { Outlet } from "react-router-dom";

import Nav from '../../components/Nav/Nav'


const HomeLayout = () => {
    return (
        <div>           
             <Nav />
             <Outlet />            
        </div>

    )
}

export default HomeLayout