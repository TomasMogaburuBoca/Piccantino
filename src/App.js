import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContent from './Componentes/Containers/ItemListContent/ItemListContent';
import Cart from './Componentes/Cart/Cart';
import ItemCount from './Componentes/ItemCount/ItemCount';
import ItemDetailContent from './Componentes/Containers/ItemDetailConten/ItemDetailContent';

function App() {
  return(
        <>
          <NavBar />
          <Cart />
          < ItemCount stock={10} initial={1}/>
          <ItemListContent />
          <ItemDetailContent />
        </>
  );
}

export default App;
