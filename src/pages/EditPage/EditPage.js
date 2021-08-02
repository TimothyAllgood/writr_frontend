import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import Story from '../../models/Story';

import TextEditor from '../../components/TextEditor/TextEditor';
require('./EditPage.scss');

function EditPage({ match }) {
	const { loading, data } = useQuery(Story.getStoryById, {
		variables: {
			getStoryById: match.params.id,
		},
		pollInterval: 500,
	});

	const [title, setTitle] = useState('');
	const [story, setStory] = useState();
	const [storyId, setStoryId] = useState('');

	useEffect(() => {
		if (data) {
			setTitle(data.getStoryById.title);
			setStory(data.getStoryById.story);
			setStoryId(match.params.id);
		}
	}, [data]);
	if (loading) return <p>"Loading"</p>;
	return (
		<section className='home'>
			<TextEditor
				setTitle={setTitle}
				title={title}
				setStory={setStory}
				story={story}
				setStoryId={setStoryId}
				storyId={storyId}
			/>
		</section>
	);
}

export default EditPage;
