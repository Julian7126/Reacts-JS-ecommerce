import React from "react";
import './styles.css';
import Nike from '../../images/Nike.jpg';

const NavBar = () => {
    return (
        <header>
                    <div className="menu">
                        <box-icon name="menu"></box-icon>
                    </div>

                    
                    
                    <a href="#">
                        <div className="Logo">
                            <img src={Nike} alt="" />
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

                <div className="cart"></div>
                <box-icon name="cart"></box-icon>
                <span className="Total">0</span>

        </header>





    );
};

export default NavBar;
