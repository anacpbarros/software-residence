import { GoogleLogout } from 'react-google-login';
import { useTranslation } from 'react-i18next';

const clientId = '886439942997-46a4cuoar289c5mauasj3338mp11ogq9.apps.googleusercontent.com';

function Logout() {
    const { t } = useTranslation();
    const onSuccess = () => {
        alert(t('logout.sucesso'));
    };
    
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText={t('logout.sucesso')}
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
};

export default Logout;