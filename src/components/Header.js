import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}> 
            <div className="header__logo">
            <a href="/"> 
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix" />
            </a>
             </div>
             <div className="header__user">
                 <a href="/">
                     <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário ícone" />
                 </a>
             </div>
        </header>
    );
}