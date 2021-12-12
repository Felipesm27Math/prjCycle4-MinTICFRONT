import React from 'react'
import Input from 'components/Input';
import ButtonLoading from 'components/Button'
import useFormData from 'hooks/useFormData';
import {Link} from 'react-router-dom';
import { useMutation } from '@apollo/client'; 


const IniciarSesion = () => {

    const {form,formData,updateFormData} = useFormData();

    const submitForm = (e) => {
        e.preventDefault();
    };

    return (
        <div className='flex flex-col items-center justify-center w-full h-full p-10'>
            <h1 className='text-xl font-bold text-gray-900'>Iniciar sesión</h1>
            <form className='flex flex-col' onSubmit={submitForm} onChange={updateFormData} ref={form}>
                <Input name='correo' type='email' label='Correo' required={true} />
                <Input name='password' type='password' label='Contraseña' required={true} />
                <ButtonLoading
                disabled={Object.keys(formData).length === 0}
                loading={false}
                text='Iniciar Sesión'
                />
            </form>
            <span>¿No tienes una cuenta?</span>
            <Link to='/auth/registro'>
                <span className='text-blue-900'>Regístrate</span>
            </Link>
        </div>
    );
};

export default IniciarSesion
