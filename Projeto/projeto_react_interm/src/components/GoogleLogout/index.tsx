import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '886439942997-46a4cuoar289c5mauasj3338mp11ogq9.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        alert('Logout made successfully!');
    };
    
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
};

export default Logout;