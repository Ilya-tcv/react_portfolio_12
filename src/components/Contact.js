import React from 'react';

const Contact = () => {
	return (
		<div>
			<div className='container'>
				<div className='jumbotron mx-2 mt-4'>
					<h1
						style={{fontWeight: 'bold'}}
						className='text-dark text-center mb-4'>
						Contact
					</h1>

					{/* Formulaire */}
					<form>
						<label htmlFor=''>Name</label>
						<div class='form-row form-group'>
							<div class='col'>
								<input
									id='firstName'
									type='text'
									class='form-control'
									placeholder='First name'
								/>
							</div>
							<div class='col'>
								{/* <label for='lastName'></label>  */}
								<input
									id='lastName'
									type='text'
									class='form-control'
									placeholder='Last name'
								/>
							</div>
						</div>
						<div class='form-group'>
							<label for='exampleFormControlInput1'>Email</label>
							<input
								type='email'
								class='form-control'
								id='exampleFormControlInput1'
								placeholder='name@example.com'
							/>
						</div>

						<div class='form-group'>
							<label for='exampleFormControlTextarea1'>
								Explain your project
							</label>
							<textarea
								class='form-control'
								id='exampleFormControlTextarea1'
								rows='2'></textarea>
						</div>
						<div className='form-group text-center'>
							<button className='btn btn-success'>
								<i class='fas fa-paper-plane'></i> Submit
							</button>
						</div>
					</form>
				</div>
			</div>

			{/* CONTACT BANNER */}
			<div className='contactBanner container-fluid bg-dark'>
				<div className='row'>
					<div className='col-lg-4 col-sm-12 text-center my-4'>
						<div className='text-center mb-2'>
							<i style={{fontSize:'4em', padding:'15px', borderRadius:'50%'}} className='fas fa-phone text-dark bg-danger'></i>
						</div>
                              <h5 className='text-white'>Call me :</h5>
						<span className='text-white'>(+32)488/22.99.86</span>
					</div>
                         
					<div className='col-lg-4 col-sm-12 text-center my-4'>
						<div className='text-center mb-2'>
							<i style={{fontSize:'4em', padding:'15px', borderRadius:'50%'}} className='fas fa-map-marked-alt text-dark bg-danger'></i>
						</div>
                              <h5 className='text-white'>Find me :</h5>
						<span className='text-white'>Place de la Minoterie 10,<br/> 1080 Molenbeek-Saint-Jean, <br/>Belgium</span>
					</div>

					<div className='col-lg-4 col-sm-12 text-center my-4'>
						<div className='text-center mb-2'>
							<i style={{fontSize:'4em', padding:'15px', borderRadius:'50%'}} className='fas fa-at text-dark bg-danger'></i>
						</div>
                              <h5 className='text-white'>Text me :</h5>
						<span className='text-white'>chernychovilya@yahoo.fr</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
