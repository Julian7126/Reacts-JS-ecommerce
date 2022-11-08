import  React   from 'react';
// import { ProductosLista } from "./componentes/productos/index";
import NavBar from './componentes/NavBar';
import 'boxicons';
import './index.css';
import ItemListConteiner from './conteiners/ItemListContainer';
import Router from './routes';



function App() {
  return (
    <div className='App'>
    <NavBar/>
    {/* <ProductosLista/> */}
    <ItemListConteiner/>
    <Router/>

    </div>
  );
}

export default App;
