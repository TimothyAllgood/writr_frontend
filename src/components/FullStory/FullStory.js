import { useQuery } from '@apollo/client';
import React from 'react';
import Story from '../../models/Story';
require('./FullStory.scss');

function FullStory({ match }) {
	console.log(match.params.id);
	const { loading, data } = useQuery(Story.getStoryById, {
		variables: {
			getStoryById: match.params.id,
		},
	});

	console.log(data);

	if (loading) return 'Loading...';
	return (
		<div className=''>
			<h3> {data.getStoryById.title} </h3>
			<p>By {data.getStoryById.author.username}</p>
			<p dangerouslySetInnerHTML={{ __html: data.getStoryById.story }}></p>
		</div>
	);
}

export default FullStory;
