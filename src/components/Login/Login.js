import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
    const navigate = useNavigate();

    function loginHandler(e){
        e.preventDefault();
        navigate('/home');
    };

    return(
        <div className="Login">
            <div className="modal">
                <h1>Entrar</h1>
                <form className="loginForm">
                    <input placeholder='Email' type={'text'} />
                    <input placeholder='Senha' type={'password'} />
                    <button onClick={loginHandler}>Entrar</button>
                </form>
                <p className='login-link'>Esqueceu sua senha?</p>
                <p className='login-link'>Cadastrar-se</p>
            </div>
        </div>
    );
};