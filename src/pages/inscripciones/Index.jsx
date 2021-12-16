import React, {useEffect} from 'react'
import { useQuery } from '@apollo/client';
import {GET_INSCRIPCIONES} from 'graphql/inscripciones/queries';
import {toast} from 'react-toastify';
import PrivateRoute from 'components/PrivateRoute';
import { Link } from 'react-router-dom';

const IndexInscripcion = () => {
    const {data,error,loading} = useQuery(GET_INSCRIPCIONES)

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
        <PrivateRoute roleList={['ADMINISTRADOR','LIDER']}>
            <div>
            <table className="tabla">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Fecha Inscripcion</th>
                            <th>Fecha Fin Inscripcion</th>
                            <th>estado</th>
                            <th>Estudiante</th>
                            <th>Proyecto</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.Inscripcion.map((u)=>{
                            return(
                                <tr key={u._id}>
                                    <td>{u._id}</td>
                                    <td>{u.fechaIngreso}</td>
                                    <td>{u.fechaSalida}</td>
                                    <td>{u.estado}</td>
                                    <td>{u.estudiante.nombre}</td>
                                    <td>{u.proyecto.nombre}</td>
                                    <td>
                                        <Link to={`/nafc/inscripcion/editar/${u._id}`}>
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
    )
}

export default IndexInscripcion

