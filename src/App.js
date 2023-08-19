import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './componets/pages/Home';
import Matricula from './componets/pages/Matricula';
import Login from './componets/pages/Login';
import Promocoes from './componets/pages/Promocoes';
import Container from './componets/layout/Container';
import Navbar from './componets/layout/Navbar';
import Footer from './componets/layout/Footer';
function App() {
  return (
    <Router>
     <Navbar/>
      <Container customClass="min-heigth">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/matricula' element={<Matricula />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/promocoes' element={<Promocoes />} />
        </Routes>
      </Container>
      <Footer/>
  </Router>
  );
}

export default App;
