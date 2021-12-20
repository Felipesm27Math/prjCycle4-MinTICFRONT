import React, {useEffect} from 'react'
import {useQuery} from '@apollo/client';
import { GET_AVANCES } from 'graphql/avances/queries';
import {Link} from "react-router-dom";
import {toast} from 'react-toastify';

const IndexAvances = () => {
    const {data,error,loading} = useQuery(GET_AVANCES)

    useEffect(() =>{
        console.log('data server',data);
    },[data]);

    useEffect(() =>{
        if(error){
            toast.error("Error al consultar usuarios");
        }
    },[error]);

    if (loading) return <div>Cargando...</div>
    console.log(data);
    return (
        <div>
            <table className="tabla">
                <thead>
                    <tr>
                        <th>Proyecto</th>
                        <th>Lider</th>
                        <th>Descripcion Avance</th>
                        <th>Observaciones Avance</th>
                        <th>Estudiante</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.Avances.map((u)=>{
                        return(
                            <tr key={u._id}>
                                <td>{u.proyecto.nombre}</td>
                                <td>{u.proyecto.lider.nombre}</td>
                                <td>{u.descripcion}</td>
                                <td>{u.observaciones}</td>
                                <td>{u.usuario.nombre}</td>
                                <td className="border-0 text-center">
                                    <Link to={`/nafc/avances/editar/${u._id}`}>
                                        {<button className='bg-blue-700 text-gray-50 p-2 rounded-lg shadow-lg hover:bg-indigo-400'>Editar
                                         </button>}
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default IndexAvances

