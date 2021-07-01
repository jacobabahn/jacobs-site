import Header from './components/Header'
import './App.css'


import Home from './components/Home'
import AboutMe from './components/AboutMe'


const App = () => {
  return (
    <div className="App" >
      {/* <Header /> */}
    	<Home />
    	<hr/>
		<AboutMe />
    </div>
  );
}

export default App;
