import React from 'react';

const Contact = () => {
	return (
		<div>
			<div className='container pt-4'>
				<div className='jumbotron mx-2'>
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
		</div>
	);
};

export default Contact;
