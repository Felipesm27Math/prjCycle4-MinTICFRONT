import React, { useState } from 'react';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { UserContext } from 'context/userContext';
import LayoutAdmin from 'layouts/LayoutAdmin';
import LayoutUsers from 'layouts/LayoutUsers';
import Index from "pages/Index";
import IndexUsuarios from "pages/usuarios/Index";
import IndexAvances from 'pages/avances/Index';
import IndexProyecto from 'pages/proyectos/Index';
import CrearProyecto from 'pages/proyectos/CrearProyecto';
import IniciarSesion from 'pages/auth/login';
import RegistrarUsuario from 'pages/auth/registro';


import  'styles/globals.css';
import 'styles/tabla.css';

const client = new ApolloClient({
  uri:"http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [userData, setUserData] = useState({});
  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={{userData, setUserData}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutAdmin/>}>
              <Route path='' element={<Index/>}/>
              <Route path="/usuarios" element={<IndexUsuarios/>}/>  
              <Route path="/avances" element={<IndexAvances/>}/>
              <Route path='/proyectos'element={<IndexProyecto/>}/>
              <Route path='/proyectos/crear'element={<CrearProyecto/>}/>
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