import React from 'react';

const Footer = () => {
	return (
		<div style={{backgroundColor: 'black'}} className='container-fluid'>
			<div className='container'>
				<div className='row'>
					<div
						style={{height: '20vh'}}
						className='col-lg-3 col-sm-12 my-5'>
						<div className='d-flex align-items-center justify-content-center'>
							<i
								style={{
									fontSize: '3em'
								}}
								className='fas fa-map-marker-alt text-white'></i>
						</div>
						<div className='text-center text-white mt-2'>
							<span>
								Place de la Minoterie 10 <br /> 1080 Brussels,
								Belgium
							</span>
						</div>
					</div>
					<div
						style={{height: '20vh'}}
						className='col-lg-3 col-sm-12 my-5'>
						<div className='d-flex align-items-center justify-content-center'>
							<i style={{
									fontSize: '3em'
								}} className='far fa-envelope text-white'></i>
						</div>
						<div className='text-center text-white mt-2'>
							<p>chernychovilya@yahoo.fr</p>
						</div>
					</div>
					<div
						style={{height: '20vh'}}
						className='col-lg-3 col-sm-12 my-5'>
						<div className='d-flex align-items-center justify-content-center'>
                              <i
									style={{
										fontSize: '3em'
									}}
									className='fas fa-phone text-white'></i>
						</div>
						<div className='text-center text-white mt-2'>
							<p>(+32)488/22.99.86</p>
						</div>
					</div>
					<div
						style={{height: '30vh'}}
						className='col-lg-3 col-sm-12'>
						<div className='d-flex align-items-center justify-content-center'>
							{/* I ICI */}
						</div>
						<div>
							<p>Hello</p>
						</div>
					</div>
				</div>
			</div>
			{/* <div style={{fontSize:'1.2em'}} className='row text-white d-flex justify-content-center py-2'>
				<a className='text-white' href=""><i className='mx-1 fab fa-facebook-f'></i></a>
				<a className='text-white' href=""><i className='mx-1 fab fa-linkedin'></i></a>
				<a className='text-white' href=""><i className='mx-1 fab fa-github'></i></a>
				<a className='text-white' href=""><i className='mx-1 fab fa-instagram'></i></a>
			</div>
			<div style={{fontSize:'0.8em'}} className='row d-flex justify-content-center align-items-center py-2 text-secondary'>
				<p><i class="far fa-copyright"></i>opyright 2020 |  by Tchernychov Ilya | All Right Reserved</p>
			</div> */}
		</div>
	);
};

export default Footer;
