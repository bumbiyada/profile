import logo from './logo.svg';
import './App.css';
import Header   from './components/header/Header';
import Navbar   from './components/navbar/Navbar';
import Footer   from './components/footer/Footer';
import Bio      from './components/bio/Bio';
import Project  from './components/project/Project';
import {BrowserRouter, Route}  from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header className="containerHeader"/>
        <Navbar className="containerNavbar"/>
        <Route path='/bio' component={Bio} />
        <Route path='/project' component={Project} />
        <Footer className="containerFooter"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
