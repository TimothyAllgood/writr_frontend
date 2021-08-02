import React, { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import EditorButtons from '../EditorButtons/EditorButtons';

require('./TextEditor.scss');

function TextEditor({
	prompts,
	setTitle,
	title,
	story,
	setStory,
	setStoryId,
	storyId,
}) {
	let [i, setI] = useState(0);

	const nextPrompt = () => {
		if (i < prompts.length - 1) {
			setI(i + 1);
		} else {
			setI(0);
		}
	};

	const theme = 'snow';
	// const theme = 'bubble';

	const modules = {
		toolbar: [
			['bold', 'italic', 'underline', 'strike'],
			[{ size: ['small', false, 'large', 'huge'] }],
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			[{ color: [] }],
		],
	};

	const placeholder = '';

	const formats = [
		'bold',
		'italic',
		'underline',
		'strike',
		'header',
		'size',
		'color',
	];

	const { quill, quillRef } = useQuill({
		theme,
		modules,
		formats,
		placeholder,
	});

	useEffect(() => {
		if (quill && prompts && prompts.length > 0) {
			quill.setText(prompts[i]);
		}
		if (quill && story) {
			quill.clipboard.dangerouslyPasteHTML(story);
		}
	}, [quill, prompts, i]);

	useEffect(() => {
		if (quill) {
			quill.on('text-change', () => {
				setStory(quill.root.innerHTML);
			});
		}
	}, [quill, setStory]);

	return (
		<>
			<div className='container textEditor'>
				<div className='title-container'>
					<label htmlFor='story-title'>
						<h3>Title</h3>
					</label>
					<input
						id='story-title'
						name='story-title'
						defaultValue={prompts && prompts.length > 0 ? prompts[i] : title}
						onChange={(e) => setTitle(e.target.value)}></input>
				</div>
				<div ref={quillRef} />
			</div>
			<EditorButtons
				nextPrompt={prompts && nextPrompt}
				story={story}
				title={title}
				setStoryId={setStoryId}
				storyId={storyId}
			/>
		</>
	);
}

export default TextEditor;
