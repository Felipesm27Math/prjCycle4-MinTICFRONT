import React, { useState } from 'react';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { UserContext } from 'context/userContext';
import LayoutAdmin from 'layouts/LayoutAdmin';
import LayoutUsers from 'layouts/LayoutUsers';
import Index from "pages/Index";
import IndexUsuarios from "pages/usuarios/Index";
import IndexAvances from 'pages/avances/Index';
import RegistrarUsuario from 'pages/auth/registro';
import IniciarSesion from 'pages/auth/login';
import  'styles/globals.css';
import 'styles/tabla.css';


import jwt_decode from 'jwt-decode';
import 'styles/globals.css';
import 'styles/tabla.css';




const httpLink = createHttpLink({
  uri: "http://localhost:4000/",
});

const authLink = setContext((_, { headers }) => {
  
  const token = JSON.parse(localStorage.getItem('token'));
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  uri:"http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
  const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState('');

  const setToken = (token) => {
    console.log('set token', token);
    setAuthToken(token);
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
    } else {
      localStorage.removeItem('token');
    }
  };

  useEffect(() => {
    if (authToken) {
      const decoded = jwt_decode(authToken);
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
      <UserContext.Provider value={{userData, setUserData}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutAdmin/>}>
              <Route path='' element={<Index/>}/>
              <Route path="/usuarios" element={<IndexUsuarios/>}/>  
              <Route path="/avances" element={<IndexAvances/>}/>
            </Route>
            <Route path='/auth' element={<LayoutUsers/>}>
              <Route path='registro' element={<RegistrarUsuario/>}/>
              <Route path='login'element={<IniciarSesion/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ApolloProvider>
  );
}


export default App;

