import { render } from '@testing-library/react';
import React from 'react';
import { Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshTokenSetup';

const clientId = '886439942997-46a4cuoar289c5mauasj3338mp11ogq9.apps.googleusercontent.com';

function Login() {
    const onSuccess= (res: any) => {
        console.log('[Login Success] currentUser: ', res.profileObj);

        // initializing the setup
        refreshTokenSetup(res);
    };

    const onFailure = (res: any) => {
        console.log('[Login failed] response: ', res);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                render={renderProps => (
                    <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        Login
                    </Button>
                )}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{marginTop: '100px'}}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;