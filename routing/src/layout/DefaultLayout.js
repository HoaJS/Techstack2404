import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

const DefaultLayout = ({ children }) => {
	return (
		<>
			<Navigation />
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default DefaultLayout;
