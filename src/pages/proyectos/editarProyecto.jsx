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
import { PROYECTOS } from 'graphql/proyectos/queries';
import { EDITAR_PROYECTO } from 'graphql/proyectos/mutations';

const EditarProyecto = ({_id}) => {

    const { form, formData, updateFormData } = useFormData();

    const [editarProyecto, { data: dataMutation, loading }] = useMutation(
        EDITAR_PROYECTO
       
      );
     
    useEffect(() => {
        if (dataMutation) {
           toast.success('Proyecto editado con exito');
           
        }
      }, [dataMutation]);  
    
      const submitForm = (e) => {
        e.preventDefault();
        editarProyecto({
          variables: {
            _id,
            
            campos: formData,
          },
        }).catch((error) => {
          toast.error('Error editando el proyecto', error);
        });
      };

  if (loading) return <div>Cargando....</div>;
  console.log(dataMutation);


  {dataMutation&&dataMutation.Proyectos.map((proyecto)=>{
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
                    onSubmit={submitForm}
                    onChange={updateFormData}
                    ref={form}
                    className='flex flex-col items-center justify-center'
                >
                    
                    <Input
                    label='Nombre Proyecto:'
                    type='text'
                    name='nombre'
                    defaultValue={proyecto.nombre}
                    required
                    />
                    <Input
                    label='Presupuesto'
                    type='text'
                    name='presupuesto'
                    defaultValue={proyecto.presupuesto}
                    required
                    />        
                    
                    <DropDown 
                    label='Estado del proyecto'
                    name='estado'
                    defaultValue={proyecto.estado}
                    options={Enum_EstadoProyecto}
                    />
                    
                    <DropDown 
                    label='Fase del proyecto'
                    name='fase'
                    defaultValue={proyecto.fase}
                    options={Enum_FaseProyecto}  
                    />  
                    
                    

                    <ButtonLoading
                    onClick={() => editarProyecto ()}
                    disabled={false}
                    loading={loading}
                    text='Editar'
                    />
                </form>
            </div>
        </div>
    );

  })}

    
  
 
};



export default EditarProyecto
