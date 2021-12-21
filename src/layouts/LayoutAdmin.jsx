import React, { useEffect, useState } from 'react';
import Navbar from "components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useMutation } from "@apollo/client";
import {useAuth} from "context/authContext";
import { REFRESCAR_TOKEN } from "graphql/auth/mutations";
import { useNavigate } from 'react-router';




const PrivateLayout = () => {

  let navigate = useNavigate();
  const {authToken,setToken} = useAuth();
  const [loadingAuth,setLoadingAuth] = useState(true);

  const[refrescarToken,{ data:dataMutation, loading:loadingMutation, error:errorMutation}] = useMutation(REFRESCAR_TOKEN);

  useEffect(() =>{
    refrescarToken();
  },[refrescarToken]);
 
  useEffect(() =>{
    console.log(dataMutation);
    if(dataMutation){
      if(dataMutation.refrescarToken.token){
        setToken(dataMutation.refrescarToken.token);
      }else{
        setToken(null);
        navigate('auth/login');
      }
      setLoadingAuth(false);
    }
  },[dataMutation,setToken,navigate]);

  if (loadingMutation || loadingAuth) return <div>Loading...</div>;

  return (
      <div className='flex flex-col md:flex-row flex-no-wrap h-screen'>
        <div className='flex w-full h-full'>
          <div className='w-full h-full  overflow-y-scroll'>
              <Navbar />
              <Outlet/>
          </div>
        </div>
        <ToastContainer/>
      </div>
    );
  };

export default PrivateLayout;
