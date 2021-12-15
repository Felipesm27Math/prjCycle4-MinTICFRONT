import React, {useState}from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import {Outlet} from "react-router-dom"
import 'styles/layout.css';


const Home= () => {
    const [Menu,setMenu] =useState(false);
    return (
        <nav className="navbar">
        <div className="logo">NAFC</div>
        <ul className={Menu?"nav-menu":"nav-uno"} onClick={()=>{setMenu(false)}}>
            <Link to='/registro' className="registro">
                <li>Registro</li>
            </Link>
            <Link to='/login' className="login">
                <li>Login</li>
            </Link>
         
        </ul>
        <button className="butt-menu" onClick={()=> {setMenu(!Menu)}}>
            {Menu?<i className="fas fa-times"></i>:<i className="fas fa-igloo"></i>}
        </button>
</nav>

)
}

export default Home;
