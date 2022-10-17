import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../api';
import { clearErrorMessages, onChecking, onCleanEvents, onLogin, onLogout } from '../store';




export const useAuthStore = () => {
    const dispatch = useDispatch();
    const { status, user, errorMessage } = useSelector(state => state.auth);
    const startLogin = async ({ email, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await calendarApi.post('/auth', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            const { name, uid } = data;
            const user = { name, uid };
            dispatch(onLogin(user));

        } catch (error) {

            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessages());
            }, 1000)
        }

    }

    const startRegister = async ({ email, password, name }) => {
        dispatch(onChecking());
        try {
            const { data } = await calendarApi.post('/auth/new', { email, password, name })
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            const { uid } = data;
            const user = { name, uid };
            dispatch(onLogin(user));
        } catch (error) {

            dispatch(onLogout(error.response.data?.msg));
            setTimeout(() => {
                dispatch(clearErrorMessages());
            }, 1000)
        }
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            return dispatch(onLogout(''));
        }
        try {
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            const { uid, name } = data;
            const user = { name, uid };
            dispatch(onLogin(user));
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout(''));

        }

    }

    const startLogout = ()=>{
        localStorage.clear();
        dispatch(onCleanEvents());
        dispatch(onLogout(''));
    }

    return {
        status,
        user,
        errorMessage,
        startLogout,
        startLogin,
        startRegister,
        checkAuthToken


    }
}