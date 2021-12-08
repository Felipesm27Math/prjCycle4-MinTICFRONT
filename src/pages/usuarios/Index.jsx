import React, {useEffect} from 'react'
import {useQuery} from '@apollo/client';
import { GET_USUARIOS } from 'graphql/usuarios/queries';

const IndexUsuarios = () => {
    const {data,error,loading} = useQuery(GET_USUARIOS)

    useEffect(() =>{
        console.log('data server',data);
    },[data]);

    if (loading) return <div>Cargando...</div>

    return (
        <div>
            Datos Usuarios:
            <table className="tabla">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Identificacion</th>
                        <th>Rol</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.Usuarios.map((u)=>{
                        return(
                            <tr key={u._id}>
                                <td>{u.nombre}</td>
                                <td>{u.correo}</td>
                                <td>{u.identificacion}</td>
                                <td>{u.rol}</td>
                                <td>{u.estado}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default IndexUsuarios
