import React from 'react';
import { NavLink } from 'react-router-dom';
require('./TruncatedStory.scss');

function TruncatedStory({ story, id }) {
	const storyText = story.story
		.replace(/(<([^>]+)>)/gi, '')
		.substring(0, 100)
		.trim();

	return (
		<div className='story' id={id}>
			<h3 className='title'>{story.title}</h3>

			<p className='content'>
				{storyText}
				{storyText.length > 99 && (
					<>
						<span>... </span>
					</>
				)}
			</p>
			<div className='link'>
				<NavLink to={`/story/${story._id}`} className='btn'>
					Read More
				</NavLink>
			</div>
		</div>
	);
}

export default TruncatedStory;
