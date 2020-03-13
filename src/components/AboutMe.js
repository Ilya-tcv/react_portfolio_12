import React from 'react';

const AboutMe = () => {
	return (
		<div className='container'>
			<div className='jumbotron mx-2 mt-4'>
				<h1
					style={{fontWeight: 'bold'}}
					className='text-dark text-center mb-4'>
					About me
				</h1>
				<div className='row d-flex align-items-center justify-content-center'>
					<div className='col-lg-6 col-sm-12'>
						<p className='p-3'>
							I'm a 20 years old IT Technician and full stack
							developer based in Brussels. During the evenings i
							work as a waiter and a barman in a restaurant. I
							speak Russian, French, English and a little bit of
							Dutch. <br />
							<br /> My priority is to provide websites as close
							to customer expectations. <br />
							<br /> During my free time, i like partying, coding
							and riding my mtb.
						</p>
					</div>
					<div className='col-lg-6 col-sm-12 text-center'>
						<img
							style={{
								borderRadius: '15%',
								border: 'black solid 2px'
							}}
							className='w-75'
							src='../img/about-img.jpg'
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
