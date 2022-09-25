import { useNavigate } from 'react-router-dom';
import './Nav.css';
import menu from '../../assets/menu.png';
import logo from '../../assets/logo-escola.png';
import { useState } from 'react';
export default function Nav() {

    const [showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate();
    function handleExit() {
        navigate('/');
    };

    return (
        <div className="Nav">

            <div className="menu" style={showMenu? {width: '20%'} : {width: '0'}}>
                <a href="#">Alunos</a>
                <a href="/registrar">Cadastrar Aluno</a>
                <a href="#">Sobre Nós</a>
            </div>

            <div className="nav-left" style={showMenu? {marginLeft: '20%'} : {width: '0'}}>
                <img className='nav-menu' src={menu} alt='menu' onClick={() => showMenu? setShowMenu(false) : setShowMenu(true)} />
                <img className='nav-logo' src={logo} alt='logo' width={'70px'} />
            </div>

            <p className="nav-exit" onClick={handleExit}>Sair</p>

        </div>
    );
};