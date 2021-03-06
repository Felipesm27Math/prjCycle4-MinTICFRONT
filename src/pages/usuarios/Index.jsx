import React, {useEffect} from 'react'
import {useQuery} from '@apollo/client';
import { GET_USUARIOS } from 'graphql/usuarios/queries';
import { toast } from 'react-toastify';
import PrivateRoute from 'components/PrivateRoute';
import {Link} from 'react-router-dom'
import {Enum_Rol,Enum_EstadoUsuario} from 'utils/enums';

const IndexUsuarios = () => {
    const {data,error,loading} = useQuery(GET_USUARIOS)

    useEffect(() =>{
        console.log('data server',data);
    },[data]);

    useEffect(() =>{
        if(error){
            toast.error("Error al consultar usuarios");
        }
    },[error]);

    if (loading) return <div>Cargando...</div>

    return (
        <PrivateRoute roleList='ADMINISTRADOR'>
            <div> 
                <table className="tabla">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Identificacion</th>
                            <th>Rol</th>
                            <th>Estado</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.Usuarios.map((u)=>{
                            return(
                                <tr key={u._id}>
                                    <td>{u.nombre}</td>
                                    <td>{u.correo}</td>
                                    <td>{u.identificacion}</td>
                                    <td>{Enum_Rol[u.rol]}</td>
                                    <td>{Enum_EstadoUsuario[u.estado]}</td>
                                    <td>
                                        <Link to={`/nafc/usuarios/editar/${u._id}`}>
                                            <i className='fas fa-pen text-yellow-600 hover:text-yellow-400 cursor-pointer' />
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </PrivateRoute>
    );
};

export default IndexUsuarios