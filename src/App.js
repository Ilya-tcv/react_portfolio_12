import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
	return (
		<div id='content'>
			<header id='home'>
				<Header />
			</header>
			<section className='' id='aboutMe'>
				<AboutMe />
			</section>
			<section className='' id='skills'>
				<Skills />
			</section>
			<section className='' id='myWork'>
				{/* <Skills /> */}
			</section>
			<section className='' id='experience'>
				<Experience />
			</section>
			<section id='contact'>
				<Contact />
			</section>
			<footer id='footer'>
				<Footer />
			</footer>
		</div>
	);
};

export default App;