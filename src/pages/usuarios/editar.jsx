import React,{useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import useFormData from 'hooks/useFormData';
import { GET_UNUSUARIO } from 'graphql/usuarios/queries';
import {EDITAR_USUARIO} from 'graphql/usuarios/mutations';
import {toast} from 'react-toastify';
import Input from 'components/Input';
import ButtonLoading from 'components/Button';
import DropDown from 'components/Dropdown';
import {Enum_EstadoUsuario} from 'utils/enums';
import PrivateRoute from 'components/PrivateRoute';

const EditarUsuario = () => {


  const { _id } = useParams();

  const {data,loading,error} = useQuery(GET_UNUSUARIO,{
    variables:{ _id },
  });

  if (loading) return <div>Cargando....</div>;
  console.log(data);
    return (
        <div>
            <div className='flew flex-col w-full h-full items-center justify-center p-10'>
            <Link to='/nafc/usuarios'>
                <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
            </Link>
            <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>
                Editar Usuario
            </h1>
                <form
                    // onSubmit={submitForm}
                    // onChange={updateFormData}
                    // ref={form}
                    className='flex flex-col items-center justify-center'
                >
                    <Input
                    label='Nombre de la persona:'
                    type='text'
                    name='nombre'
                    defaultValue={data.UsuarioFiltro.nombre}
                    required
                    />
                    <Input
                    label='Correo de la persona:'
                    type='email'
                    name='correo'
                    defaultValue={data.UsuarioFiltro.correo}
                    required
                    />
                    <Input
                    label='Identificación de la persona:'
                    type='text'
                    name='identificacion'
                    defaultValue={data.UsuarioFiltro.identificacion}
                    required
                    />
                    <PrivateRoute roleList='ADMINISTRADOR'>
                    <DropDown
                    label='Estado de la persona:'
                    name='estado'
                    defaultValue={data.UsuarioFiltro.estado}
                    required
                    options={Enum_EstadoUsuario}
                    />
                    </PrivateRoute>
                    <span>Rol del usuario: {data.rol}</span>
                    <ButtonLoading
                    disabled={false}
                    loading={loading}
                    text='Confirmar'
                    />
                </form>
            </div>
        </div>
    );
};

export default EditarUsuario
