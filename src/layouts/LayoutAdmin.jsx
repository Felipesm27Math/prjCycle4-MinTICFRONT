import React from 'react';
import {Outlet} from 'react-router-dom';

const LayoutAdmin = () => {
    return (
        <div>
            <nav className="fixed w-full h-12 bg-gray-600 text-gray-100 flex flex-row justify-between items-center">
                <div className="brand-logo text-base font-bold px-3">NAFC</div>
                <ul className="menu-list flex flex-row">
                    <li className="menu-list-item px-2 text-lg">Home</li>
                    <li className="menu-list-item px-2 text-lg">Usuarios</li>
                    <li className="menu-list-item px-2 text-lg">Proyectos</li>
                    <li className="menu-list-item px-2 text-lg">Inscripciones</li>
                    <li className="menu-list-item px-2 text-lg">Avances</li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export default LayoutAdmin
