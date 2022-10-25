import  React   from 'react';
import { ProductosLista } from "./componentes/productos/index";
import NavBar from './componentes/NavBar';
import 'boxicons';
import './index.css';
import ItemListConteiner from './componentes/conteiners/ItemListConteiner';


function App() {
  return (
    <div className='App'>
    <NavBar/>
    <ItemListConteiner greeting={"Bienvenidos a Cervo"}/>
    </div>
  );
}

export default App;
