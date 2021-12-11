import React, {useState}from 'react'
import { Link } from 'react-router-dom'
import 'styles/layout.css';


const LayoutAdmin = () => {

    const [Menu,setMenu] =useState(false);

    return (   
        <nav className="navbar">
             <div className="logo">NAFC</div>
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
             </ul>
             <button className="butt-menu" onClick={()=> {setMenu(!Menu)}}>
                 {Menu?<i className="fas fa-times"></i>:<i className="fas fa-igloo"></i>}
             </button>
        </nav>
        // <nav className="barra">
        //     <h3 className="imag">NAFC</h3>
        //     <ul className={MenuRespon?"barra-lin-mov":"barra-lin"} onClick={()=>{setMenuRespon(false)}} >
        //         <Link to='/' className="home">
        //             <li>Home</li>
        //         </Link>
        //         <Link to='/usuarios' className="usuarios">
        //             <li>Usuarios</li>
        //         </Link>
        //         <Link to='/proyectos' className="proyecto">
        //             <li>Proyectos</li>
        //         </Link>
        //         <Link to='/inscripciones' className="inscripciones">
        //             <li>Inscripciones</li>
        //         </Link>
        //         <Link to='/avances' className="avances">
        //             <li>Avances</li>
        //         </Link>
        //     </ul>
        //     <button className="but-mov-ic" onClick={()=> {setMenuRespon(!MenuRespon)}}>
        //         {MenuRespon? <i className="fas fa-times"></i>:<i className="fas fa-igloo"></i>}
        //     </button>
        // </nav>
    );
};

export default LayoutAdmin;