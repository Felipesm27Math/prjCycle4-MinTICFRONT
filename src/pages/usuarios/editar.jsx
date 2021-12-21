import React, {useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
import { useQuery, useMutation} from '@apollo/client';
import useFormData from 'hooks/useFormData';
import { GET_UNUSUARIO } from 'graphql/usuarios/queries';
import {EDITAR_USUARIO} from 'graphql/usuarios/mutations';
import Input from 'components/Input';
import ButtonLoading from 'components/Button';
import DropDown from 'components/Dropdown';
import {Enum_EstadoUsuario} from 'utils/enums';
import PrivateRoute from 'components/PrivateRoute';
import {toast} from 'react-toastify';

const EditarUsuario = () => {
    
    const {form,formData,updateFormData} = useFormData();

    const { _id } = useParams();

    const {data:dataQuery,loading:loadingQuery,error:errorQuery} = useQuery(GET_UNUSUARIO,{
        variables:{ _id },
    });

    const [editarUsuario, { data:dataMutation, loading:loadingMutation, error:errorMutation}] = useMutation(EDITAR_USUARIO);

    
    const submitForm = (e)=> {
        e.preventDefault();
        console.log('ff',formData);
        editarUsuario({
            variables:{_id,...formData}
        });
    }

    useEffect(() =>{
        if(errorMutation){
            toast.error("Error al modificar",{position:"bottom-center",autoClose:4000});
        }
        if(errorQuery){
            toast.error("Error al consultar datos",{position:"bottom-center",autoClose:4000});
        }
    },[errorMutation,errorQuery]);
    

    useEffect(() =>{
        if(dataMutation){
            toast.success("Modificacion exitosa",{position:"bottom-center",autoClose:4000});
        }
    },[dataMutation]);
    
    
    if (loadingQuery || loadingMutation) return <div>Cargando....</div>;

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
                    onSubmit={submitForm}
                    onChange={updateFormData}
                    ref={form}
                    className='flex flex-col items-center justify-center'
                >   
                    <Input
                    label='Nombre de la persona:'
                    type='text'
                    name='nombre'
                    defaultValue={dataQuery.UsuarioFiltro.nombre}
                    required
                    />
                    <Input
                    label='Correo de la persona:'
                    type='email'
                    name='correo'
                    defaultValue={dataQuery.UsuarioFiltro.correo}
                    required
                    />
                    <Input
                    label='Identificación de la persona:'
                    type='text'
                    name='identificacion'
                    defaultValue={dataQuery.UsuarioFiltro.identificacion}
                    required
                    />
                    <PrivateRoute roleList='ADMINISTRADOR'>
                    <DropDown
                    label='Estado de la persona:'
                    name='estado'
                    defaultValue={dataQuery.UsuarioFiltro.estado}
                    required
                    options={Enum_EstadoUsuario}
                    />
                    </PrivateRoute>
                    <span>Rol del usuario: {dataQuery.UsuarioFiltro.rol}</span>
                    <ButtonLoading
                    disabled={Object.keys(formData).length===0}
                    loading={loadingMutation}
                    text='Confirmar'
                    />
                </form>
            </div>
        </div>
    );
};

export default EditarUsuario
