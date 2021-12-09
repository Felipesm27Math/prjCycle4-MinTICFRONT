import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import { UserContext } from 'context/userContext';
import Index from "pages/Index";
import IndexUsuarios from "pages/usuarios/Index";
import IndexAvances from 'pages/avances/Index';
import LayoutAdmin from 'layouts/LayoutAdmin';
import  'styles/globals.css';
import 'styles/tabla.css'

// const httpLink = createHttpLink({
//   uri:"https://back-nafc-code.herokuapp.com/graphql"
// })

const client = new ApolloClient({
  uri:"https://back-nafc-code.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

function App() {

  const [userData, setUserData] = useState({});
  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={{userData, setUserData}}>
        <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Index/>}/>
                  <Route path="/usuarios" element={<IndexUsuarios/>}/>
                  <Route path="/avances" element={<LayoutAdmin/>}>
                    <Route path="" element={<IndexAvances/>}/>
                  </Route>

              </Routes>
          </BrowserRouter>
      </UserContext.Provider>
    </ApolloProvider>
  );
}

export default App;
