import { useQuery } from '@apollo/client';
import React from 'react';
import TruncatedStory from '../../components/TruncatedStory/TruncatedStory';
import Story from '../../models/Story';

function StoryPage() {
	const { data, loading, error } = useQuery(Story.getAllStoriesQuery, {
		pollInterval: 500,
	});

	if (loading) return <p>Loading ...</p>;

	const stories = data.getAllStories.map((story) => {
		return (
			<>
				<TruncatedStory key={story._id} story={story} />
			</>
		);
	});
	return <section className='container'>{stories}</section>;
}

export default StoryPage;
