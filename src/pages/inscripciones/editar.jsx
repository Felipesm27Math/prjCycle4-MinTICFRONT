import React from 'react'
import { useQuery, useMutation } from '@apollo/client';
import {useParams,Link} from 'react-router-dom';
import {GET_UNAINSCRIPCION} from 'graphql/inscripciones/queries';
import Input from 'components/Input';
import ButtonLoading from 'components/Button';
import DropDown from 'components/Dropdown';
import PrivateRoute from 'components/PrivateRoute';
import {Enum_Inscripcion} from 'utils/enums';


const EditarInscripcion = () => {

    const { _id } = useParams();

    const {data,loading,error} = useQuery(GET_UNAINSCRIPCION,{
        variables:{ _id },
    });

    if (loading) return <div>Cargando....</div>;
  console.log(data);

    return (
        <div>
            <div className='flew flex-col w-full h-full items-center justify-center p-10'>
            <Link to='/nafc/inscripciones'>
                <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
            </Link>
            <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>
                Editar Inscripcion
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
                    name='_id'
                    defaultValue={data.BuscarInscripcion.estudiante.nombre}
                    required
                    />
                    <DropDown
                    label='Estado de la persona:'
                    name='estado'
                    defaultValue={data.BuscarInscripcion.estado}
                    required
                    options={Enum_Inscripcion}
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

export default EditarInscripcion
