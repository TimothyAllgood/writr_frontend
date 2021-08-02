import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import TruncatedStory from '../../components/TruncatedStory/TruncatedStory';
import Story from '../../models/Story';

function StoryPage() {
	const { data, loading, error } = useQuery(Story.getAllStoriesQuery, {
		pollInterval: 500,
	});
	const [deleteStory, { data: deletetedData }] = useMutation(
		Story.deleteStoryMutation
	);
	if (loading) return <p>Loading ...</p>;

	const stories = data.getAllStories.map((story) => {
		return (
			<>
				<TruncatedStory key={story._id} story={story} />
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
	return <section className='container'>{stories}</section>;
}

export default StoryPage;
