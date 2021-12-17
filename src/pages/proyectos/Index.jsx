import React, { useEffect, useState } from 'react';
import {useQuery, useMutation} from '@apollo/client';
import { PROYECTOS } from 'graphql/proyectos/queries';
import { CREAR_INSCRIPCION } from 'graphql/inscripciones/mutations';
import { useParams,Link } from 'react-router-dom';
import PrivateComponent from 'components/PrivateComponent';
import { useUser } from 'context/userContext';
import { toast } from 'react-toastify';
import ButtonLoading from 'components/ButtonLoading';
import { GET_UNUSUARIO } from 'graphql/usuarios/queries';
import { Enum_FaseProyecto, Enum_EstadoProyecto} from 'utils/enums';
import useFormData from 'hooks/useFormData';
import { EDITAR_PROYECTO } from 'graphql/proyectos/mutations';
import DropDown from 'components/Dropdown';
import {Dialog} from '@mui/material';
import Input from 'components/Input';





const IndexProyecto = () => {
    const { _id } = useParams();
    const { data:queryData, loading:queryLoading, error:queryError } = useQuery(PROYECTOS);
    const { data: dataC, loading:loadingC, error:errorC} = useQuery(GET_UNUSUARIO,{
        variables: { _id },
    });
    

    useEffect(() => {
        console.log('datos proyecto', queryData);
    }, [queryData]);

    const [showDialog, setShowDialog] = useState(false); 
    if (queryLoading && loadingC) return <div>Cargando...</div>

    
    
    
        return (
            
            <div className='p-10 '>
                <div className= 'w-full items-center justify-center flex flex-col'>
                <h1 className= ' mt-7 text-gray-700 justify-center text-3xl pb-5 font-bold'>Listado de Proyectos </h1>
                </div>
                <div className = 'container flex flex-row '>
                    <input type= 'search' placeholder= 'Buscar Proyecto'  
                    className= 'shadow-none border rounded-lg w-80 py-3 px-3 text-gray-600 placeholder-gray-900 flex'/>
                    <i className= 'flex flex-row fas fa-pen text-blue-900  py-4 px-4' />
                </div>
               
                <div className='place-self-end'>
                <Link to='/nafc/proyectos/crear'>
                    <button className='bg-gray-700 text-gray-50 p-2 rounded-lg shadow-lg '>Nuevo Proyecto</button>
                </Link>
                </div> 
                

              
                
                
                

            
                  
                <table className='tabla'> 
                    <thead>
                        <tr>
                            {/* <th>Id Proyecto</th> */}
                            <th>Nombre</th>
                            <th>Presupuesto</th>
                            {/* <th>Fecha de Inicio</th>
                            <th>Fecha Final</th> */}
                            <th>Objetivos</th>
                            <th>Estado</th>
                            <th>Fase</th>
                            <th>Lider</th>
                            
                            <PrivateComponent roleList = {['LIDER']}>
                            <th>Acciones</th>  
                            </PrivateComponent>
                            <PrivateComponent roleList = {['ESTUDIANTE']}>
                            <th>Inscripcion</th>
                            </PrivateComponent>
                            
                            
                        
                        
                        </tr>
                    </thead>
                    <tbody>
                        {queryData && queryData.Proyectos.map((proyecto)=>{
                            return(
                                <tr key={proyecto._id}>
                                    {/* <td>{proyecto._id}</td> */}
                                    <td>{proyecto.nombre}</td>
                                    <td>{proyecto.presupuesto}</td>
                                    {/* <td>{proyecto.fechaInicio}</td>
                                    <td>{proyecto.fechaFin}</td> */}
                                    <td> {proyecto.objetivos.map((objetivo) => {
                                            return <Obj tipo={objetivo.tipo} descripcion={objetivo.descripcion} />;
                                            })}</td>
                                    <td>{proyecto.estado}</td>
                                    <td>{Enum_FaseProyecto[proyecto.fase]}</td>
                                    <td>
                                        <ol>
                                            <li>Lider: {proyecto.lider.nombre}</li>
                                            <li>Identificacion: {proyecto.lider.identificacion}</li> 
                                        </ol>
                        
                                    </td>
                                    <td>
                                        <Link to={`/nafc/proyectos/editar/${proyecto._id}`}>
                                            {<button className='bg-indigo-500 text-gray-50 p-2 rounded-lg shadow-lg hover:bg-indigo-400'>Editar
                                            </button>}
                                        </Link>
                                    </td>
                                    <td> 
                                        
                                            <button type='button'
                                                    onClick={() => {
                                                        setShowDialog(true);}}
                                                    >
                                                    <i className='mx-4 fas fa-pen text-yellow-600 hover:text-yellow-400' />
                                                    </button>

                                                    <Dialog
                                                            open={showDialog}
                                                            onClose={() => {
                                                            setShowDialog(false);
                                                            }}
                                                        >
                                                            <FormEditProyecto _id={proyecto._id} /></Dialog>         
                                           
                                    </td>
                                    
                                    
                                        {/* <td>
                                            {<InscripcionProyecto 
                                            idProyecto={proyecto._id}
                                            estado={proyecto.estado}
                                            inscripciones={proyecto.inscripciones}/>}
                                        </td> */}
                                    
                                    
                                </tr>
                            );
                            
                        })}
                    </tbody> 
                      
                </table>  
                
                                            
            </div>
        )
    };
    const Obj = ({ tipo, descripcion }) => {
            return (
            <div>
                <div className=' text-xl font-bold'>{tipo}</div>
                <div>{descripcion}</div>
                <PrivateComponent roleList = {['LIDER']}>
                <div >
                <button className='bg-indigo-500 text-gray-50 p-2 rounded-lg shadow-lg hover:bg-indigo-400'>Editar</button>
                </div>
                </PrivateComponent>
            </div>
            );
        };
    
        const FormEditProyecto = ({ _id }) => {
            const { form, formData, updateFormData } = useFormData();
            const [editarProyecto, {data, loading }] = useMutation(EDITAR_PROYECTO);
          
            const submitForm = (e) => {
              e.preventDefault();
              editarProyecto({
                variables: {
                  _id,
                  nombre: formData,
                  presupuesto: formData,
                  estado: formData,
                  fase: formData,
                },
              }).catch((error) => {
                toast.error('Error cambiando el estado', error);
              });
            };
            useEffect(() => {
                if (data) {
                  toast.success('Estado cambiado con exito');
                }
              }, [data]);
            return (
              <div className='p-4'>
                <h1 className='font-bold'>Modificar Estado del Proyecto</h1>
                <form
                  ref={form}
                  onChange={updateFormData}
                  onSubmit={submitForm}
                  className='flex flex-col items-center'
                >
                <Input name ='nombre' label='Nombre del Proyecto' required= {true} type= 'text' />
                  {/* <DropDown
                    label='Estado del Proyecto'
                    name='estado'
                    options={Enum_EstadoProyecto}
                  /> */}
                  <ButtonLoading disabled={false} loading={loading} text='Confirmar' />
                </form>
              </div>
            );
          };
            
        const InscripcionProyecto = ({ idProyecto, estado, inscripciones }) => {
            const [estadoInscripcion, setEstadoInscripcion] = useState('');
            const [crearInscripcion, { data, loading, error }] = useMutation(CREAR_INSCRIPCION);
            const { userData } = useUser();
            
                useEffect(() => {
                if (userData && inscripciones) {
                    const flt = inscripciones.filter((el) => el.estudiante._id === userData._id);
                    if (flt.length > 0) {
                    setEstadoInscripcion(flt[0].estado);
                    }
                }
                }, [userData, inscripciones]);
            
                useEffect(() => {
                if (data) {
                    console.log(data);
                    toast.success('inscripcion creada con exito');
                }
                }, [data]);
            
                const confirmarInscripcion = () => {
                crearInscripcion({ variables: { proyecto: idProyecto, estudiante: userData._id } });
                };
            
                return (
                <>
                    {estadoInscripcion !== '' ? (
                    <span>Ya estas inscrito en este proyecto y el estado es {estadoInscripcion}</span>
                    ) : (
                    <ButtonLoading
                        onClick={() => confirmarInscripcion()}
                        disabled={estado === 'INACTIVO'}
                        loading={loading}
                        text='Inscribirme'
                    />
                    )}
                </>
                );
            };     
            
            
            
              
        
export default IndexProyecto;
