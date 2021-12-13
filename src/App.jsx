import React, { useState } from 'react';
import {ApolloProvider, ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
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
import { AuthContext } from 'context/authContext';

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
    }
  };

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{authToken,setAuthToken,setToken}}>
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
      </AuthContext.Provider>
    </ApolloProvider>
  );
}


export default App;