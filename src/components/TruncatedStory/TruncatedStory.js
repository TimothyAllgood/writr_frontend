import React from 'react';
import { Link, NavLink } from 'react-router-dom';
require('./TruncatedStory.scss');

function TruncatedStory({ story, id }) {
	const storyText = story.story
		.replace(/(<([^>]+)>)/gi, '')
		.substring(0, 250)
		.trim();

	return (
		<div className={story.author ? 'story story-flex' : 'story'} id={id}>
			{story.author && story && (
				<NavLink className='to-user' to={`/profile/${story.author.username}`}>
					<div className='image'>
						<div className='written-by'>
							<h4>Written by:</h4>
							<h3>{story.author && story.author.username}</h3>
						</div>
						<div className='inner-text'></div>
					</div>
				</NavLink>
			)}

			<div className='story-details'>
				<h3 className='title'>{story.title}</h3>
				<p className='content'>
					{storyText}
					{storyText.length > 249 && (
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
		</div>
	);
}

export default TruncatedStory;
