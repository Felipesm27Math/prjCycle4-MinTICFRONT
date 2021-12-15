import ButtonLoading from 'components/Button';
import DropDown from 'components/Dropdown';
import Input from 'components/Input';
import React, {useEffect} from 'react'
import { Enum_rol } from 'utils/enums';
import useFormData from 'hooks/useFormData';
import {Link} from 'react-router-dom';
import {useMutation} from '@apollo/client';
import {REGISTRO} from "graphql/auth/mutations";
import { useNavigate } from 'react-router';
import { useAuth } from 'context/authContext';


const RegistrarUsuario = () => {

    const {setToken} = useAuth();
    let navigate = useNavigate();
    const {form,formData,updateFormData} = useFormData();

    const [registro,{data:dataMutation, loading:loadingMutation, error:errorMutation}] = useMutation(REGISTRO);
    
    const submitForm = (e) => {
        e.preventDefault();
        console.log("Datos al back",formData);
        registro({variables:formData});
    };

    useEffect(() =>{
        console.log("data mutation",dataMutation);
        if(dataMutation){
            if(dataMutation.registro.token){
                setToken(dataMutation.registro.token);
                navigate('/');
            }
        }
    },[dataMutation,setToken,navigate]);


    return (
        <div className='flex flex-col h-full w-full items-center justify-center'>
            <h1 className='text-3xl font-bold my-4'>Registro</h1>
            <form className='flex flex-col' onSubmit={submitForm} onChange={updateFormData} ref={form}>
                <div className='grid grid-cols-2 gap-5'>
                    <Input label='Nombre' name='nombre' type='text' required/>
                    <Input label='Correo' name='correo' type='email' required/>
                    <Input label='Documento' name='identificacion' type='text' required/>
                    <DropDown label='Rol' name='rol' required={true} options={Enum_rol}/>
                    <Input label='Contraseña' name='password' type='password' required/>
                </div>
                <ButtonLoading 
                    disabled={Object.keys(formData).length===0}
                    loading={false}
                    text='Registrarme'
                />
            </form>
            <span>¿Ya tienes una cuenta?</span>
            <Link to='/login'>
                <span className='text-blue-900'>Iniciar sesion</span>
            </Link>
        </div>
    );
};

export default RegistrarUsuario;