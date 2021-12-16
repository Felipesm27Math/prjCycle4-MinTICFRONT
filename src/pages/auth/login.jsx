import React, {useEffect}from 'react'
import Input from 'components/Input';
import ButtonLoading from 'components/Button'
import useFormData from 'hooks/useFormData';
import {Link} from 'react-router-dom';
import { useMutation } from '@apollo/client'; 
import {LOGIN} from 'graphql/auth/mutations';
import { useNavigate } from 'react-router';
import { useAuth } from 'context/authContext';

const IniciarSesion = () => {

    const {setToken} = useAuth();
    const {form,formData,updateFormData} = useFormData();
    let navigate = useNavigate();
    const [login,{data:dataMutation, loading:loadingMutation, error:errorMutation}] = useMutation(LOGIN);

    const submitForm = (e) => {
        e.preventDefault();
        login({
            variables:formData,
        });
    };

    useEffect(() =>{
        console.log("data mutation",dataMutation);
        if(dataMutation){
            if(dataMutation.login.token){
                setToken(dataMutation.login.token);
                navigate('/nafc');
            }
        }
    },[dataMutation,setToken,navigate]);

    return (
        <div className='flex flex-col items-center justify-center w-full h-full p-10'>
            <Link to='/'>
                <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
            </Link>
            <h1 className='text-xl font-bold text-gray-900'>Iniciar sesión</h1>
            <form className='flex flex-col' onSubmit={submitForm} onChange={updateFormData} ref={form}>
                <Input name='correo' type='email' label='Correo' required={true} />
                <Input name='password' type='password' label='Contraseña' required={true} />
                <ButtonLoading
                disabled={Object.keys(formData).length === 0}
                loading={loadingMutation}
                text='Iniciar Sesión'
                />
            </form>
            <span>¿No tienes una cuenta?</span>
            <Link to='/registro'>
                <span className='text-blue-900'>Regístrate</span>
            </Link>
        </div>
    );
};

export default IniciarSesion
