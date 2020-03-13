import React from 'react';
import Typist from 'react-typist';

const Header = () => {
	return (
		<div className='pos-f-t'>
			{/* LA NAVBAR CACHÉE */}
			<div
				style={{position: 'fixed', top: '0', zIndex: '1500'}}
				className='collapse w-100'
				id='navbarToggleExternalContent'>
				<nav class='navbar navbar-expand-lg navbar-light bg-none d-flex justify-content-around'>
					<div className='container'>
						<ul
							style={{zIndex: '1500', borderRadius: '25px'}}
							className='navbar-nav mr-auto mt-2 mt-lg-0 w-100 d-flex justify-content-around'>
							<li class='nav-item active'>
								<a class='nav-link' href='#home'>
									Home
								</a>
							</li>
							<li class='nav-item active'>
								<a class='nav-link' href='#aboutMe'>
									About me
								</a>
							</li>
							<li class='nav-item active'>
								<a class='nav-link' href='#skills'>
									Skills
								</a>
							</li>
							<li class='nav-item active'>
								<a class='nav-link' href='#experience'>
									Experience
								</a>
							</li>
							<li class='nav-item active'>
								<a class='nav-link' href='#contact'>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>

			<div>
				{/* TEXTE D'ACCEUIL */}
				<div
					style={{
						position: 'absolute',
						color: 'white',
						width: '100%',
						top: '35%',
						left: '50%',
						marginLeft: '-50%',
						zIndex: '26'
					}}
					className='text-center d-flex flex-column align-items-center'>
					<h1 className='mb-3' style={{fontWeight: 'bold'}}>
						<Typist>
							Hello, I'm{' '}
							<span
								style={{fontSize: '1.3em'}}
								className='text-primary'>
								Tchernychov Ilya
							</span>
							.<br /> I'll create your websites.
						</Typist>
					</h1>
					<div>
						<a href='#aboutMe'>
							<button className='btn btn-primary btn-outline-light mx-2'>
								Learn more
							</button>
						</a>
						<a href='#contact'>
							<button className='btn btn-primary btn-outline-light mx-2'>
								Start a project
							</button>
						</a>
					</div>
				</div>

				{/* IMAGE DE FOND */}
				<div className='text-center banner'></div>
			</div>

			{/* LE BOUTON COLLAPSE */}
			<nav
				style={{
					position: 'fixed',
					top: '0',
					right: '0',
					zIndex: '1500'
				}}
				className='navbar float-right navbar-dark'>
				<button
					className='navbar-toggler bg-primary'
					type='button'
					data-toggle='collapse'
					data-target='#navbarToggleExternalContent'
					aria-controls='navbarToggleExternalContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
			</nav>
		</div>
	);
};

export default Header;
