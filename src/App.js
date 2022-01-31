import logo from './logo.svg';
import './App.css';
import AnimatedCursor from "react-animated-cursor"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Project1 from './components/Projects/Project1/Project1';
import Project2 from './components/Projects/Projects2/Projects2';
import Project3 from './components/Projects/Project3/Project3';
import Project4 from './components/Projects/Project4/Project4';
import Project5 from './components/Projects/Project5/Project5';
import Project6 from './components/Projects/Project6/Project6';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AnimatedCursor
          innerSize={8}
          outerSize={28}
          color='238, 61, 9'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />
        <Routes>
          <Route exact path='/' element={
            <Home></Home>}
          >
          </Route>
          <Route exact path='/home' element={
            <Home></Home>}
          >
          </Route>
          <Route exact path='/project1' element={
            <Project1></Project1>}
          >
          </Route>
          <Route exact path='/project2' element={
            <Project2></Project2>}
          >
          </Route>
          <Route exact path='/project3' element={
            <Project3></Project3>}
          >
          </Route>
          <Route exact path='/project4' element={
            <Project4></Project4>}
          >
          </Route>
          <Route exact path='/project5' element={
            <Project5></Project5>}
          >
          </Route>
          <Route exact path='/project6' element={
            <Project6></Project6>}
          >
          </Route>
          <Route exact path='/about' element={
            <About></About>}
          >
          </Route>
          <Route exact path='/services' element={
            <Services></Services>}
          >
          </Route>
          <Route exact path='/contact' element={
            <Contact></Contact>}
          >
          </Route>
          <Route exact path='/projects' element={
            <Portfolio></Portfolio>}
          >
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
