import React from  'react';
import { useGoogleLogin } from 'react-google-login';

//refresh token
import { refreshTokenSetup } from '../utils/refreshTokenSetup';


const clientId = '886439942997-46a4cuoar289c5mauasj3338mp11ogq9.apps.googleusercontent.com';

function LoginHooks() {
    const onSuccess = (res: any) => {
        console.log('Login Success: currentUser: ', res.profileObj);
        refreshTokenSetup(res);
    }

    const onFailure = (res: any) => {
        console.log('Login failed: res: ', res);
    }

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline'
    });
    
    return (
        <button onClick={signIn} className="button">
            <img src='icons/google.svg' className="button-icon"></img>
            <span className='buttonText'>Sign in with Google</span>
        </button>
    );
};

export default LoginHooks;