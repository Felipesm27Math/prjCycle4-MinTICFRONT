import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {useAuth} from 'context/authContext';
import 'styles/layout.css';


const Navbar = () => {

    const [Menu,setMenu] =useState(false);

    return (   
        <nav className="navbar">
                    <div className="logo"><Link to='/'>NAFC</Link></div>
                <ul className={Menu?"nav-menu":"nav-uno"} onClick={()=>{setMenu(false)}}>
                    <Link to='/' className="home">
                        <li>Home</li>
                    </Link>
                    <Link to='/usuarios' className="user">
                        <li>Usuarios</li>
                    </Link>
                    <Link to='/proyectos' className="prj">
                        <li>Proyectos</li>
                    </Link>
                    <Link to='/inscripciones' className="ins">
                        <li>Inscripciones</li>
                    </Link>
                    <Link to='/avances' className="advan">
                        <li>Avances</li>
                    </Link>
                    <Logout/>
                </ul>
                <button className="butt-menu" onClick={()=> {setMenu(!Menu)}}>
                    {Menu?<i className="fas fa-times"></i>:<i className="fas fa-igloo"></i>}
                </button>
        </nav>
    );
};

const Logout = () => {
    const { setToken } = useAuth();
    const deleteToken = () => {
      console.log('eliminar token');
      setToken(null);
    };
    return (
      <li onClick={() => deleteToken()} className="logout flex items-center justify-center">
        <NavLink to='/auth/login' className=' text-2xl text-white hover:text-pink-300 hover:text-4xl'>
          <div className='flex items-center'>
            <i className='fas fa-sign-out-alt' />
            <span className='text-sm ml-2'>Cerrar Sesión</span>
          </div>
        </NavLink>
      </li>
    );
  };

export default Navbar;