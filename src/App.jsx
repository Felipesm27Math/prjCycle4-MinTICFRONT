import React, { useState, useEffect } from 'react';
import {ApolloProvider, ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { UserContext } from 'context/userContext';
import LayoutAdmin from 'layouts/LayoutAdmin';
import LayoutUsers from 'layouts/LayoutUsers';
import IndexUsuarios from "pages/usuarios/Index";
import IndexAvances from 'pages/avances/Index';
import RegistrarUsuario from 'pages/auth/registro';
import IniciarSesion from 'pages/auth/login';
import { AuthContext } from 'context/authContext';
import jwt_decode from "jwt-decode";
import IndexInscripciones from 'pages/inscripciones/Index';
import IndexHomeAdmin from 'pages/homeAdmin/Index';
import  'styles/globals.css';
import 'styles/tabla.css';
import "styles/homeStyles.css";


const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(localStorage.getItem('token'));
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});



function App() {
  const [userData, setUserData] = useState({});
  const [authToken,setAuthToken] = useState('');

  const setToken = (token) => {
    setAuthToken(token);
    if(token){
      localStorage.setItem('token', JSON.stringify(token));
    } else {
      localStorage.removeItem('token');
    }
  };

  useEffect(() => {
    if (authToken) {
      const decoded = jwt_decode(authToken);
      console.log('decoded token', decoded);
      setUserData({
        _id: decoded._id,
        nombre: decoded.nombre,
        identificacion: decoded.identificacion,
        correo: decoded.correo,
        rol: decoded.rol,
      });
    }
  }, [authToken]);

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{authToken,setAuthToken,setToken}}>
        <UserContext.Provider value={{userData, setUserData}}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<LayoutUsers/>}/>
              <Route path='registro' element={<RegistrarUsuario/>}/>
              <Route path='login'element={<IniciarSesion/>}/>
              <Route path="/" element={<LayoutAdmin/>}>
                <Route path='/nafc' element={<IndexHomeAdmin/>}/>
                <Route path="/nafc/usuarios" element={<IndexUsuarios/>}/>
                <Route path="/nafc/avances" element={<IndexAvances/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>  
      </AuthContext.Provider>
    </ApolloProvider>
  );
}


export default App;