import React, { useState } from 'react';
import {Outlet} from "react-router-dom"
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import { UserContext } from 'context/userContext';
import LayoutAdmin from 'layouts/LayoutAdmin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  'styles/globals.css';
import 'styles/tabla.css';


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
        <>
          <LayoutAdmin/>
          <div>
            <Outlet/>
          </div>
        </>
          <ToastContainer/>
      </UserContext.Provider>
    </ApolloProvider>
  );
}

export default App;
