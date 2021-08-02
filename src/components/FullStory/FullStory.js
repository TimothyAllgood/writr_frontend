import { useQuery, useMutation } from '@apollo/client';
import React from 'react';
import Story from '../../models/Story';
import { decodeToken } from '../../util/loggedIn';
import { withRouter } from 'react-router-dom';
require('./FullStory.scss');

function FullStory({ match, history }) {
	const decoded = decodeToken();

	const [deleteStory, { data: deletetedData }] = useMutation(
		Story.deleteStoryMutation
	);

	const { loading, data } = useQuery(Story.getStoryById, {
		variables: {
			getStoryById: match.params.id,
		},
		pollInterval: 500,
	});

	const handleDelete = () => {
		let confirmation = false;
		const confirmModal = document.querySelector('.confirm');
		confirmModal.classList.remove('hide');
		const btns = document.querySelectorAll('.confirm-btns .btn');
		btns.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				if (e.target.id === 'yes') {
					confirmation = true;
					deleteStory({
						variables: {
							deleteStoryId: match.params.id,
							deleteStoryAuthorId: decoded.id,
						},
					});
					history.push(`/profile/${decoded.user}`);
				} else {
					confirmation = false;
					confirmModal.classList.add('hide');
				}
			});
		});
	};

	const editStory = () => {
		history.push(`/story/edit/${match.params.id}`);
	};

	if (loading) return 'Loading...';
	return (
		<div className='container story'>
			<h3> {data.getStoryById.title} </h3>
			<div className='info'>
				<p className='author'>By {data.getStoryById.author.username}</p>
				{decoded.user === data.getStoryById.author.username && (
					<div className='buttons'>
						<p className='btn' onClick={editStory}>
							Edit
						</p>
						<p className='btn' onClick={() => handleDelete()}>
							Delete
						</p>
					</div>
				)}
			</div>
			<div className='confirm hide'>
				<div className='inner'>
					<h4>Are you sure?</h4>
					<div className='confirm-btns'>
						<p id='yes' className='btn'>
							Yes
						</p>
						<p id='no' className='btn'>
							No
						</p>
					</div>
				</div>
			</div>
			<p
				className='content'
				dangerouslySetInnerHTML={{ __html: data.getStoryById.story }}></p>
		</div>
	);
}

export default withRouter(FullStory);
