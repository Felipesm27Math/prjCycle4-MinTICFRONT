import React from 'react'
import {useParams,Link} from 'react-router-dom';
import {useQuery} from '@apollo/client';
import {GET_UNAVANCE} from 'graphql/avances/queries'
import Input from 'components/Input';
import ButtonLoading from 'components/Button';
import PrivateComponent from 'components/PrivateComponent';

const EditarAvances = () => {
    const { _id } = useParams();

    const {data,loading,error} = useQuery(GET_UNAVANCE,{
        variables:{ _id },
    });

  if (loading) return <div>Cargando....</div>;
  console.log(data);
    return (
        <div>
            <div className='flew flex-col w-full h-full items-center justify-center p-10'>
            <Link to='/nafc/avances'>
                <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
            </Link>
            <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>
                Agregar descripcion
            </h1>
                <form
                    // onSubmit={submitForm}
                    // onChange={updateFormData}
                    // ref={form}
                    className='flex flex-col items-center justify-center'
                >
                    <PrivateComponent roleList = {['ADMINISTRADOR','LIDER']}>
                        <Input
                        label='Observaciones:'
                        type='text'
                        name='observaciones'
                        defaultValue={data.BuscarAvance.observaciones}
                        required
                        />
                    </PrivateComponent>
                    <PrivateComponent roleList = {['ADMINISTRADOR','ESTUDIANTE']}>
                        <Input
                        label='Descripcion:'
                        type='text'
                        name='descripcion'
                        defaultValue={data.BuscarAvance.descripcion}
                        required
                        />
                    </PrivateComponent>
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

export default EditarAvances
