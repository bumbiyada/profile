import logo from './logo.svg';
import './App.css';
import Header   from './components/header/Header'
import Navbar   from './components/navbar/Navbar'
import Footer   from './components/footer/Footer'
import Bio      from './components/bio/Bio'
import Project  from './components/project/Project'
function App() {
  return (
      <div className="container">
      <Header className="containerHeader"/>
      <Navbar className="containerNavbar"/>
      <Bio className="containerBio"/>
      <Project className="containerProject"/>
      <Footer className="containerFooter"/>
    </div>
  );
}

export default App;
