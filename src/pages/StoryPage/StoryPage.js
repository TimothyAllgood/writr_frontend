import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import Story from '../../models/Story';

function StoryPage() {
	const { data, loading, error } = useQuery(Story.getAllStoriesQuery);
	const [deleteStory, { data: deletetedData }] = useMutation(
		Story.deleteStoryMutation
	);
	if (loading) return <p>Loading ...</p>;
	console.log(data.getAllStories);

	const stories = data.getAllStories.map((story) => {
		return (
			<>
				<p key='1'>{story.title}</p>
				<p
					onClick={async () => {
						await deleteStory({
							variables: {
								deleteStoryId: story._id,
								deleteStoryAuthorId: story.author.id,
							},
						});
					}}>
					Delete
				</p>
			</>
		);
	});
	return <section>{stories}</section>;
}

export default StoryPage;
