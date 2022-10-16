
import './LoginPage.css';
import { useAuthStore, useForm } from '../../hooks';
import { useEffect } from 'react';
import Swal from 'sweetalert2';


const loginFormField = {
    loginEmail: '',
    loginPassword: ''
}
const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: '',
}
export const LoginPage = () => {
    const { startLogin, errorMessage,startRegister } = useAuthStore();

    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormField);
    const { registerName, registerEmail, registerPassword, registerPassword2, onInputChange: onRegisterInputChange } = useForm(registerFormFields)


    const loginSubmit = (event) => {
        event.preventDefault();
        console.log({ loginEmail, loginPassword });
        startLogin({ email: loginEmail, password: loginPassword });
    }
    const registerSubmit = (event) => {
        event.preventDefault();
        if (registerPassword !== registerPassword2) {
            Swal.fire("Error en registro", "Contraseñas no son iguales", "error");
            return;
        }
       startRegister({ email: registerEmail, password: registerPassword,name:registerName });
     //   console.log({ registerName, registerEmail, registerPassword, registerPassword2 });
    }

    useEffect(() => {
        if (errorMessage != '') {
            Swal.fire("Error en la autenticación", errorMessage, "error");
        }

    }, [errorMessage])

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={loginSubmit}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                autoComplete='off'
                                className="form-control"
                                name='loginEmail'
                                value={loginEmail}
                                onChange={onLoginInputChange}
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                autoComplete='off'
                                name="loginPassword"
                                value={loginPassword}
                                onChange={onLoginInputChange}
                                className="form-control"
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={registerSubmit}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                name="registerName"
                                value={registerName}
                                onChange={onRegisterInputChange}
                                className="form-control"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                name="registerEmail"
                                value={registerEmail}
                                onChange={onRegisterInputChange}
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                name="registerPassword"
                                value={registerPassword}
                                onChange={onRegisterInputChange}
                                className="form-control"
                                placeholder="Contraseña"
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                name="registerPassword2"
                                onChange={onRegisterInputChange}
                                value={registerPassword2}
                                placeholder="Repita la contraseña"
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}