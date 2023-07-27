import React from 'react';
import PageWithModal from '../components/PageWithModal';

const PrivateRoute = ({children}) => {
    const user = localStorage.getItem("user")
    if(user){
        return children;
    }
    return <PageWithModal></PageWithModal>
};

export default PrivateRoute;