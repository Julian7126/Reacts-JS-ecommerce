import React from "react";
import './styles.css';
import Satan from '../../images/Satan.jpg';




const NavBar = () => {
    return (
        <header>
                    <div className="menu">
                        <box-icon name="menu"></box-icon>
                    </div>

                    
                    
                    <a href="#">
                        <div className="Logo">
                            <img src={Satan} alt="Logo" width={75} />
                        </div>
                    </a>

        <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
        </ul>

                <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item__total">0</span>
                </div>

        </header>





    );
};

export default NavBar;
