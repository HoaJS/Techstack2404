import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import SamplePost from './pages/SamplePost';
import Contact from './pages/Contact';

const App = () => {
	return (
		<DefaultLayout>
			<Home />
			{/* <About /> */}
			{/* <SamplePost /> */}
			{/* <Contact /> */}
		</DefaultLayout>
	);
};

export default App;
