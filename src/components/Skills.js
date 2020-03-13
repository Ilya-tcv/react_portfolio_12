import React from 'react';

const Skills = () => {
	return (
		<div className='container pt-4'>
			<div className='jumbotron mx-2'>
				<h1
					style={{fontWeight: 'bold'}}
					className='text-dark text-center mb-4'>
					Skills
				</h1>

				{/* ROW 1 */}
				<div className='row mb-3'>
					<div className='col-lg-4 col-sm-12 mb-3 text-center d-flex align-items-center justify-content-center'>
						<div className='mx-4'>
							<i
								style={{fontSize: '4em'}}
								className='fab fa-html5 text-danger'></i>
						</div>
						<div className='flex-column'>
							<h4>HTML</h4>
							<div
								style={{borderRadius: '25px'}}
								className='  d-inline-block p-1'>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star-half-alt'></i>
							</div>
						</div>
					</div>

					<div className='col-lg-4 col-sm-12 mb-3 text-center d-flex align-items-center justify-content-center'>
						<div className='mx-4'>
							<i
								style={{fontSize: '4em'}}
								className='fab fa-css3-alt text-primary'></i>
						</div>
						<div className='flex-column'>
							<h4>CSS</h4>
							<div
								style={{borderRadius: '25px'}}
								className='  d-inline-block p-1'>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning far fa-star'></i>
							</div>
						</div>
					</div>

					<div className='col-lg-4 col-sm-12 mb-3 text-center d-flex align-items-center justify-content-center'>
						<div className='mx-4'>
							<i
								style={{fontSize: '4em'}}
								className='fab fa-js text-warning'></i>
						</div>
						<div className='flex-column'>
							<h4>JAVASCRIPT</h4>
							<div
								style={{borderRadius: '25px'}}
								className='  d-inline-block p-1'>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star-half-alt'></i>
							</div>
						</div>
					</div>
				</div>

				{/* ROW 2 */}
				<div className='row mb-3'>
					<div className='col-lg-4 col-sm-12 mb-3 text-center d-flex align-items-center justify-content-center'>
						<div className='mx-4'>
							<i
								style={{fontSize: '4em', borderRadius: '50%'}}
								className='fab fa-react text-primary bg-dark p-1'></i>
						</div>
						<div className='flex-column'>
							<h4>REACT</h4>
							<div
								style={{borderRadius: '25px'}}
								className='  d-inline-block p-1'>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning far fa-star'></i>
							</div>
						</div>
					</div>

					<div className='col-lg-4 col-sm-12 mb-3 text-center d-flex align-items-center justify-content-center'>
						<div className='mx-4'>
							<i
								style={{fontSize: '4em'}}
								className='fab fa-laravel text-danger'></i>
						</div>
						<div className='flex-column'>
							<h4>LARAVEL</h4>
							<div
								style={{borderRadius: '25px'}}
								className='  d-inline-block p-1'>
								<i className='text-warning far fa-star'></i>
								<i className='text-warning far fa-star'></i>
								<i className='text-warning far fa-star'></i>
								<i className='text-warning far fa-star'></i>
								<i className='text-warning far fa-star'></i>
							</div>
						</div>
					</div>

					<div className='col-lg-4 col-sm-12 mb-3 text-center d-flex align-items-center justify-content-center'>
						<div className='mx-4'>
							<i
								style={{fontSize: '4em'}}
								className='fab fa-wordpress text-primary'></i>
						</div>
						<div className='flex-column'>
							<h4>WORDPRESS</h4>
							<div
								style={{borderRadius: '25px'}}
								className='  d-inline-block p-1'>
								<i className='text-warning far fa-star'></i>
								<i className='text-warning far fa-star'></i>
								<i className='text-warning far fa-star'></i>
								<i className='text-warning far fa-star'></i>
								<i className='text-warning far fa-star'></i>
							</div>
						</div>
					</div>
				</div>

				{/* ROW 3 */}
				<div className='row'>
					<div className='col-lg-4 col-sm-12 mb-3 text-center d-flex align-items-center justify-content-center'>
						<div className='mx-4'>
							<i
								style={{fontSize: '4em', borderRadius: '30px'}}
								className='fab fa-windows text-white bg-primary p-2'></i>
						</div>
						<div className='flex-column'>
							<h4>OFFICE</h4>
							<div
								style={{borderRadius: '25px'}}
								className='  d-inline-block p-1'>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star-half-alt'></i>
							</div>
						</div>
					</div>

					<div className='col-lg-4 col-sm-12 mb-3 text-center d-flex align-items-center justify-content-center'>
						<div className='mx-4'>
							<i
								style={{fontSize: '4em'}}
								className='fas fa-mobile-alt'></i>
						</div>
						<div className='flex-column'>
							<h4>RESPONSIVE</h4>
							<div
								style={{borderRadius: '25px'}}
								className='  d-inline-block p-1'>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas far fa-star'></i>
							</div>
						</div>
					</div>

					<div className='col-lg-4 col-sm-12 mb-3 text-center d-flex align-items-center justify-content-center'>
						<div className='mx-4'>
							<i
								style={{fontSize: '4em'}}
								className='fas fa-eye text-success'></i>
						</div>
						<div className='flex-column'>
							<h4>DESIGN</h4>
							<div
								style={{borderRadius: '25px'}}
								className='  d-inline-block p-1'>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning fas fa-star'></i>
								<i className='text-warning far fa-star'></i>
								<i className='text-warning far fa-star'></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
