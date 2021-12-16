import React, {useEffect} from 'react'
import {useQuery} from '@apollo/client';
import { GET_AVANCES } from 'graphql/avances/queries';

const IndexAvances = () => {
    const {data,error,loading} = useQuery(GET_AVANCES)

    useEffect(() =>{
        console.log('data server',data);
    },[data]);

    if (loading) return <div>Cargando...</div>
    return (
        <div>
            <table className="tabla">
                <thead>
                    <tr>
                        <th>Id Avance</th>
                        <th>Fecha Avance</th>
                        <th>Descripcion Avance</th>
                        <th>Observaciones Avance</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.Avances.map((u)=>{
                        return(
                            <tr key={u._id}>
                                <td>{u._id}</td>
                                <td>{u.fecha}</td>
                                <td>{u.descripcion}</td>
                                <td>{u.observaciones}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default IndexAvances

