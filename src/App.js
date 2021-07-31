import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Interest from './Interest';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<About />
			<Interest />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
  
	);
}

export default App;

//Rules of JSX
//1. Every element should have wrapped || every element should have a parent.
//2. Every element should have className instead of class.
//3. Element tag should be closed.
//4*. Every tag should be replaced by Link tag. href => to

