import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import Input from 'components/Input';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USUARIOS } from 'graphql/usuarios/queries';
import { CREAR_PROYECTO } from 'graphql/proyectos/mutations';
import ButtonLoading from 'components/ButtonLoading';
import useFormData from 'hooks/useFormData';
import DropDown from 'components/Dropdown';
import { nanoid } from 'nanoid';
import { ObjContext } from 'context/objContext';
import { useObj } from 'context/objContext';
import { Enum_TipoObjetivo } from 'utils/enums';


const CrearProyecto = () => {
    const { form, formData, updateFormData } = useFormData();
   

    const [crearProyecto, { data: mutationData, loading: mutationLoading, error: mutationError }] =
    useMutation(CREAR_PROYECTO);


    useEffect(() => {
        console.log('data mutation', mutationData);
        });
        
        const submitForm = (e) => {
            e.preventDefault();
        
            formData.objetivos = Object.values(formData.objetivos);
            formData.presupuesto = parseFloat(formData.presupuesto);
        
            crearProyecto({
            variables: formData,
            });
        };
        if (mutationLoading) return <div>...Loading</div>;
        
    return (
        <div className= 'p-20 flex flex-col items-center'> 
            <div className='self-start'>
                <Link to='/nafc/proyectos'>
                    <i className='fas fa-arrow-left' />
                </Link>
            </div>
            <h1 className='mt-7 text-gray-700 justify-center text-3xl pb-5 font-bold'>Crear Nuevo Proyecto</h1>
            <form ref={form} onChange={updateFormData} onSubmit={submitForm}>
                <Input name ='nombre' label='Nombre del Proyecto' required= {true} type= 'text' />
                <Input name ='presupuesto' label='Presupuesto' required= {true} type= 'number' />
                <Input name ='lider' label='Id del Lider del Proyecto' required= {true} type= 'text' />
                <Objetivos />
                <ButtonLoading text='Crear Proyecto' loading={false} disabled={false} />
            </form>
        </div> 
        
    );
};

const Objetivos = () => {
    const [listaObjetivos, setListaObjetivos] = useState([]);
    const [maxObjetivos, setMaxObjetivos] = useState(false);
    
        const eliminarObjetivo = (id) => {
        setListaObjetivos(listaObjetivos.filter((el) => el.props.id !== id));
        };
    
        const componenteObjetivoAgregado = () => {
        const id = nanoid();
        return <FormObjetivo key={id} id={id} />;
        };
    
        useEffect(() => {
        if (listaObjetivos.length > 4) {
            setMaxObjetivos(true);
        } else {
            setMaxObjetivos(false);
        }
        }, [listaObjetivos]);
    
        return (
        <ObjContext.Provider value={{ eliminarObjetivo }}>
            <div>
            <span>Objetivos del Proyecto</span>
            {!maxObjetivos && (
                <i
                onClick={() => setListaObjetivos([...listaObjetivos, componenteObjetivoAgregado()])}
                className='fas fa-plus rounded-full bg-green-500 hover:bg-green-400 text-white p-2 mx-2 cursor-pointer'
                />
            )}
            {listaObjetivos.map((objetivo) => {
                return objetivo;
            })}
            </div>
        </ObjContext.Provider>
        );
    };
    
    const FormObjetivo = ({ id }) => {
        const { eliminarObjetivo } = useObj();
        return (
        <div className='flex items-center'>
            <Input
            name={`nested||objetivos||${id}||descripcion`}
            label='Descripción'
            type='text'
            required={true}
            />
            <DropDown
            name={`nested||objetivos||${id}||tipo`}
            options={Enum_TipoObjetivo}
            label='Tipo de Objetivo'
            required={true}
            />
            <i
            onClick={() => eliminarObjetivo(id)}
            className='fas fa-minus rounded-full bg-red-500 hover:bg-red-400 text-white p-2 mx-2 cursor-pointer mt-6'
            />
        </div>
        );
    };

export default CrearProyecto;