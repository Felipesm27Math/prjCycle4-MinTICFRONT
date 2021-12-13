import Navbar from "components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useMutation } from "@apollo/client";
import {useAuth} from "context/authContext";
import { VALIDAR_TOKEN } from "graphql/auth/mutations";
import {useEffect} from 'react';



const PrivateLayout = () => {
  
  const {authToken,setToken,loadingAuth} = useAuth();

  const[validarToken,{ data:dataMutation, loading:loadingMutation, error:errorMutation}] = useMutation(VALIDAR_TOKEN);

  useEffect(() =>{
    validarToken();
  },[]);

  return (
      <div className='flex flex-col md:flex-row flex-no-wrap h-screen'>
        <div className='flex w-full h-full'>
          <div className='w-full h-full  overflow-y-scroll'>
              <Navbar />
              <Outlet/>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  };

export default PrivateLayout;