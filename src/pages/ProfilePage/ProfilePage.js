import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import User from '../../models/User';
import Story from '../../models/Story';
import TruncatedStory from '../../components/TruncatedStory/TruncatedStory';

import { loggedIn, decodeToken } from '../../util/loggedIn';
require('./ProfilePage.scss');

function ProfilePage() {
	const check = loggedIn();
	const decoded = decodeToken(localStorage.getItem('token'));
	const [userStoriesEl, setUserStoriesEl] = useState();
	const [pagination, setPagination] = useState({
		check: false,
		elements: [],
		amount: 0,
	});
	useEffect(() => {
		if (userStoriesEl) {
			const parentRect = userStoriesEl.getBoundingClientRect();
			const stories = document.querySelectorAll('.story');

			stories.forEach((story) => {
				let childRect = story.getBoundingClientRect();

				if (childRect.bottom > parentRect.bottom) {
					setPagination({
						check: true,
						elements: [...pagination.elements, story],
						amount: stories.length - 1,
					});
				}
			});
		}
	}, [userStoriesEl]);

	// useEffect(() => {
	// 	if (pagination.check) {
	// 		stories.pop();
	// 	}
	// }, [pagination]);

	const { loading, data: userData } = useQuery(User.getUser, {
		variables: {
			getUserId: decoded.id,
		},
	});

	const { storiesLoading, data: storyData } = useQuery(
		Story.getUserStoriesMutation,
		{
			variables: {
				getUserStoriesId: decoded.id,
			},
		}
	);

	if (loading) return <p>Loading...</p>;
	if (storiesLoading) return <p>Loading...</p>;

	const stories =
		storyData &&
		storyData.getUserStories.map((story, i) => {
			const stuff = [];
			const truncatedStory = (
				<TruncatedStory key={story._id} story={story} id={story._id} />
			);

			return truncatedStory;
		});

	return (
		<section className='container profile'>
			{userData && (
				<div className='profile-info'>
					<div className='username'>
						<h3>{userData.getUser.username.toUpperCase()}</h3>
						<p className='tag'>Author</p>
					</div>

					<div className='story-length'>
						<h3>Stories Composed</h3>
						<em>
							<i className='fas fa-feather-alt'></i>
							{storyData && storyData.getUserStories.length > 0
								? storyData.getUserStories.length
								: '0'}
						</em>
					</div>
				</div>
			)}

			{storyData ? (
				<div className='user-stories' ref={(ref) => setUserStoriesEl(ref)}>
					<h2>Your Recent Stories</h2>
					{stories && stories}
				</div>
			) : (
				<p>No Stories :(</p>
			)}
		</section>
	);
}

export default ProfilePage;
