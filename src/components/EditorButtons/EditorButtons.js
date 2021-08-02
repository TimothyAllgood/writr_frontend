import React, { useState } from 'react';
import SaveModal from '../SaveModal/SaveModal';
import Story from '../../models/Story';
import { loggedIn, decodeToken } from '../../util/loggedIn';
import { useMutation } from '@apollo/client';
require('./EditorButtons.scss');

function EditorButtons({ nextPrompt, story, title, setStoryId, storyId }) {
	const [modal, setModal] = useState(false);

	const [createStory, { data: createStoryData }] = useMutation(
		Story.createStoryMutation
	);

	const [updateStory, { data: updateStoryData }] = useMutation(
		Story.updateStoryMutation
	);

	const saveStory = async () => {
		const user = decodeToken();
		const userId = user.id;
		const username = user.user;
		try {
			if (!storyId) {
				const storyData = await createStory({
					variables: {
						createStoryTitle: title,
						createStoryStory: story,
						createStoryAuthorId: userId,
						createStoryAuthorUsername: username,
					},
				});

				if (storyData) {
					setStoryId(storyData.data.createStory._id);
				}
			} else {
				await updateStory({
					variables: {
						updateStoryId: storyId,
						updateStoryTitle: title,
						updateStoryStory: story,
					},
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<section className='editor-options'>
			<div className='left'>
				<p
					onClick={() => nextPrompt()}
					className='btn'
					style={!nextPrompt ? { display: 'none' } : { display: 'initial' }}>
					Get New Prompt
				</p>
			</div>
			<div className='right'>
				{loggedIn() && (
					<p className='btn' onClick={() => saveStory()}>
						Save
					</p>
				)}

				<p className='btn' onClick={() => setModal(true)}>
					Save As
				</p>
			</div>
			<SaveModal modal={modal} setModal={setModal} story={story} />
		</section>
	);
}

export default EditorButtons;
