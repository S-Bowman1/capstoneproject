
import './App.css';
import Header from './components/Header.js'
import Main from './components/Main.js'
import Nav from './components/Nav.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="container">
     <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
