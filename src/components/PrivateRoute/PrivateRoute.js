import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = ({children, ...rest}) => {

    const {isLoading, loginUser} = useAuth()
    if(isLoading){
        return <div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    }
    return (
        <Route
            {...rest}
            render ={({location})=>
            loginUser.email ? children: 
                <Redirect
                    to={{
                        pathname:"/login",
                        state: {from:location}
                    }}
                
                ></Redirect>
            }
        
        
        
        
        >
            
        </Route>
    );
};

export default PrivateRoute;