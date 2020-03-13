import React from 'react';

const Footer = () => {
	return (
		<div style={{backgroundColor: 'black'}} className='container-fluid'>
			<div style={{fontSize:'1.2em'}} className='row text-white d-flex justify-content-center py-2'>
				<a className='text-white' href=""><i className='mx-1 fab fa-facebook-f'></i></a>
				<a className='text-white' href=""><i className='mx-1 fab fa-linkedin'></i></a>
				<a className='text-white' href=""><i className='mx-1 fab fa-github'></i></a>
				<a className='text-white' href=""><i className='mx-1 fab fa-instagram'></i></a>
			</div>
			<div style={{fontSize:'0.8em'}} className='row d-flex justify-content-center align-items-center py-2 text-secondary'>
				<p><i class="far fa-copyright"></i>opyright 2020 |  by Tchernychov Ilya | All Right Reserved</p>
			</div>
		</div>
	);
};

export default Footer;
