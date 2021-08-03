import { gql } from '@apollo/client';

export default class User {
	static createStoryMutation = gql`
		mutation CreateStory(
			$createStoryTitle: String!
			$createStoryStory: String!
			$createStoryAuthorId: String!
			$createStoryAuthorUsername: String!
		) {
			createStory(
				title: $createStoryTitle
				story: $createStoryStory
				authorId: $createStoryAuthorId
				authorUsername: $createStoryAuthorUsername
			) {
				title
				story
				_id
				author {
					username
				}
			}
		}
	`;

	static deleteStoryMutation = gql`
		mutation deleteStory(
			$deleteStoryId: String!
			$deleteStoryAuthorId: String!
		) {
			deleteStory(id: $deleteStoryId, authorId: $deleteStoryAuthorId)
		}
	`;

	static getAllStoriesQuery = gql`
		query getAllStories {
			getAllStories {
				title
				story
				_id
				author {
					id
					username
				}
			}
		}
	`;

	static updateStoryMutation = gql`
		mutation updateStory(
			$updateStoryId: String!
			$updateStoryTitle: String!
			$updateStoryStory: String!
		) {
			updateStory(
				id: $updateStoryId
				title: $updateStoryTitle
				story: $updateStoryStory
			) {
				title
				story
			}
		}
	`;

	static getUserStoriesMutation = gql`
		query getUserStories($getUserStoriesId: String!) {
			getUserStories(id: $getUserStoriesId) {
				title
				story
				_id
			}
		}
	`;

	static getStoryById = gql`
		query getUserById($getStoryById: String!) {
			getStoryById(id: $getStoryById) {
				title
				story
				author {
					username
				}
			}
		}
	`;
}
