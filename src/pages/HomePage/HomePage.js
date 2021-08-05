import React, { useEffect, useState } from 'react';
import TextEditor from '../../components/TextEditor/TextEditor';
import Prompt from '../../models/Prompt';
require('./HomePage.scss');

function HomePage() {
	const [prompts, setPrompts] = useState([]);
	const [title, setTitle] = useState('');
	const [story, setStory] = useState();
	const [storyId, setStoryId] = useState('');

	const getPrompts = async () => {
		const allPrompts = await Prompt.getPrompts();
		setPrompts(allPrompts);
		setTitle(allPrompts[0]);
	};

	useEffect(() => {
		getPrompts();
	}, []);
	return (
		<section className='home'>
			<TextEditor
				prompts={prompts}
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

export default HomePage;
