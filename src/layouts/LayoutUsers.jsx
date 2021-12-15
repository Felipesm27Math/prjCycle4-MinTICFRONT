import React from 'react';
import {Outlet} from 'react-router-dom';
import NavbarHome from 'components/NavbarHome' ;   
import Presentacion from 'components/Presentacion' ; 



const LayoutUsers = () => {
    return (
        <div className='flex flex-col md:flex-row flex-no-wrap h-screen'>
            <div className='flex w-full h-full'>
                <div className='w-full h-full overflow-y-scroll'>
                    <NavbarHome/>
                    <Presentacion/>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default LayoutUsers