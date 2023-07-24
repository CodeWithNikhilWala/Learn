import logo from './logo.svg';
import './App.css';
import Apache from './Components/Home';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApacheExample from './Components/ApacheExample';
import LearnReact from './Components/LearnReact'
import LearnJava from './Components/LearnJava';
import LearnSpring from './Components/LearnSpring';
import LearnC from './Components/LearnC';
import LearnPython from './Components/LearnPython';
import LearnLaravel from './Components/LearnLaravel';
import ReactInterview from './Components/ReactInterview';
import JavaInterview from './Components/JavaInterview'
import SpringInterview from './Components/SpringInterview';
import Cinterview from './Components/Cinterview';
import PyInterview from './Components/PyInterview';
import LaraInterview from './Components/LaraInterview';
import OnlineCertificate from './Components/OnlineCertificate';
function App() {
  return (
   <>
      <Router>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/react" element={<LearnReact/>} />
        <Route path="/java" element={<LearnJava/>} />
        <Route path="/spring" element={<LearnSpring/>} />
        <Route path="/c++" element={<LearnC/>} />
        <Route path="/python" element={<LearnPython/>} />
        <Route path="/lara" element={<LearnLaravel/>} />
        <Route path="/reactinterview" element={<ReactInterview/>} />
        <Route path="/javainterview" element={<JavaInterview/>} />
        <Route path="/springinterview" element={<SpringInterview/>} />
        <Route path="/c++interview" element={<Cinterview/>} />
        <Route path="/pyinterview" element={<PyInterview/>}/>
        <Route path="/larainterview" element={<LaraInterview/>}/>
        <Route path="/certificate" element={<OnlineCertificate/>}/>
      </Routes>
    </Router>
  
   </>
  );
}

export default App;
