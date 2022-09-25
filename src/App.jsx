import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";

function App() {
  let misEstilos = { backgroundColor: "lightblue" };

  return (
    <div style={misEstilos}>
      <NavBar />
      <CartWidget />
      <ItemListContainer greeting="Bienvenidos a nuestra plataforma de cursos" />
    </div>
  );
}

export default App;