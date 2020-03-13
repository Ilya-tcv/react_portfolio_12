import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
     const studyLogo = <i class="fas fa-graduation-cap"></i>
     const workLogo = <i class="fas fa-briefcase"></i>
     const endLogo = <i class="fas fa-crown"></i>

	return (
		<div className='container pt-4'>
			<div className='jumbotron mx-2'>
				<h1
					style={{fontWeight: 'bold'}}
					className='text-dark text-center mb-4'>
					Experience
				</h1>

				{/* Début de la timeline */}
				<VerticalTimeline>
                         {/* ILON SAINT JACQUES */}
					<VerticalTimelineElement
                              className='vertical-timeline-element--work'
                              // COULEUR BLEUE PREMIERE BOX
						// contentStyle={{
						// 	background: 'rgb(33, 150, 243)',
						// 	color: '#fff'
                              // }}
                              // COULEUR FLECHE DE DROITE
						// contentArrowStyle={{
						// 	borderRight: '7px solid  rgb(33, 150, 243)'
						// }}
						date='2015 - 2017'
						iconStyle={{
                                   fontSize: '1.3em',
							background: 'rgb(33, 150, 243)',
							color: '#fff'
						}}
						icon={studyLogo}>
						<h3 className='vertical-timeline-element-title'>
							Ilon Saint-Jacques Institute
						</h3>
						<h4 className='vertical-timeline-element-subtitle'>
							Namur, BE
						</h4>
						<p>I learned how to work as a waiter, cook and barman.</p>
					</VerticalTimelineElement>

                         {/* INSTITUT SAINT JOSEPH */}
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						date='2017 - 2019'
						iconStyle={{
                                   fontSize: '1.3em',
							background: 'rgb(33, 150, 243)',
							color: '#fff'
						}}
						icon={studyLogo}>
						<h3 className='vertical-timeline-element-title'>
							Saint-Joseph Institute
						</h3>
						<h4 className='vertical-timeline-element-subtitle'>
							Brussels, BE
						</h4>
						<p>
							High school diploma & IT Technician Certification
						</p>
					</VerticalTimelineElement>

                         {/* CIRB Helpdesk */}
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						date='April 2019'
						iconStyle={{
                                   fontSize: '1.3em',
							background: 'rgb(233, 30, 99)',
							color: '#fff'
						}}
						icon={workLogo}>
						<h3 className='vertical-timeline-element-title'>
							Helpdesk CIRB
						</h3>
						<h4 className='vertical-timeline-element-subtitle'>
							Brussels, BE
						</h4>
						<p>IT internship</p>
					</VerticalTimelineElement>

                              {/* PAMPAS */}
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						date='July 2019 - Present'
						iconStyle={{
                                   fontSize: '1.3em',
							background: 'rgb(233, 30, 99)',
							color: '#fff'
						}}
						icon={workLogo}>
						<h3 className='vertical-timeline-element-title'>
							Pampas Rodizio
						</h3>
						<h4 className='vertical-timeline-element-subtitle'>
							Brussels, BE
						</h4>
						<p>Waiter / Barman</p>
					</VerticalTimelineElement>

                              {/* MOLENGEEK */}
					<VerticalTimelineElement
						className='vertical-timeline-element--education'
						date='December 2019 - Present'
						iconStyle={{
                                   fontSize: '1.3em',
							background: 'rgb(233, 30, 99)',
							color: '#fff'
						}}
						icon={workLogo}>
						<h3 className='vertical-timeline-element-title'>
							Full Stack Developer at MolenGeek
						</h3>
						<h4 className='vertical-timeline-element-subtitle'>
							Brussels, BE
						</h4>
						<p>Full Stack Dev Certification</p>
					</VerticalTimelineElement>
					
					<VerticalTimelineElement
						iconStyle={{
                                   fontSize: '1.3em',
							background: 'rgb(16, 204, 82)',
							color: '#fff'
						}}
						icon={endLogo}
					/>
				</VerticalTimeline>
			</div>
		</div>
	);
};

export default Experience;
