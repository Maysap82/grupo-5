import './App.css';
import Header from './Componentes//Header/Header';
import Card from './Componentes/Card/Card';
import fotos from './Componentes/Header/Porsche.jpg';
import Footer from './Componentes/Footer/Footer';

function App() {
  return (

  
    <div className="App">
      <Header />
    
      <div id='cards'>
        <Card
          imagem={fotos}
           />
          
          <Footer />
          

      </div>
    </div>
  );
}

export default App;
