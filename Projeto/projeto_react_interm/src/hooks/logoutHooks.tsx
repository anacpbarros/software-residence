import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId = '886439942997-46a4cuoar289c5mauasj3338mp11ogq9.apps.googleusercontent.com';

function LogoutHooks() {
    const onLogoutSuccess = () => {
        alert('Logged out successfully!');
    };

    const onFailure = () => {
        console.log('Handle failure cases');
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure
    });

    return (
        <button onClick={signOut} className="button">
            <img src="icons/google.svg" alt="google login" className="icon"></img>
            <span className="buttonText">Sign Out</span>
        </button>
    )
}

export default LogoutHooks;