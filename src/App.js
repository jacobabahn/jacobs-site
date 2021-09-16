import Header from './components/Header'
import './App.css'


import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'


const App = () => {
  return (
    <div className="App" >
      {/* <Header /> */}
    	<Home />
    	{/* <hr/> */}
		  <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
