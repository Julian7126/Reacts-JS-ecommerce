import React from "react";
import './styles.css';
import Satan from '../../images/Satan.jpg';
import CartWidget from "../CartWidget";
import {Link} from 'react-router-dom';




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
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
        </ul>
        <CartWidget/>
                    

        </header>





    );
};

export default NavBar;
