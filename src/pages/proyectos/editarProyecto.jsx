import React,{useEffect, useState} from 'react';
import {useParams,Link} from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import useFormData from 'hooks/useFormData';
import { UN_PROYECTO } from 'graphql/proyectos/queries';
import {toast} from 'react-toastify';
import Input from 'components/Input';
import ButtonLoading from 'components/Button';
import DropDown from 'components/Dropdown';
import {Enum_EstadoProyecto, Enum_FaseProyecto,Enum_TipoObjetivo} from 'utils/enums';
import PrivateRoute from 'components/PrivateRoute';
import { nanoid } from 'nanoid';
import { useObj } from 'context/objContext';
import { ObjContext } from 'context/objContext';

const EditarProyecto = () => {

  const { _id } = useParams();

  const {data,loading,error} = useQuery(UN_PROYECTO,{
    variables:{ _id },
  });

  if (loading) return <div>Cargando....</div>;
  console.log(data);
    return (
        <div>
            <div className='flew flex-col w-full h-full items-center justify-center p-10'>
            <Link to='/nafc/proyectos'>
                <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
            </Link>
            <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>
                Editar Proyecto
            </h1>
                <form
                    // onSubmit={submitForm}
                    // onChange={updateFormData}
                    // ref={form}
                    className='flex flex-col items-center justify-center'
                >
                    <Input
                    label='Nombre Proyecto:'
                    type='text'
                    name='nombre'
                    defaultValue={data.ProyectoLider.nombre}
                    required
                    />        
                    <Input
                    label='Presupuesto'
                    type='text'
                    name='presupuesto'
                    defaultValue={data.ProyectoLider.presupuesto}
                    required
                    />  

                    <ButtonLoading
                    disabled={false}
                    loading={loading}
                    text='Editar'
                    />
                </form>
            </div>
        </div>
    );
};



export default EditarProyecto
