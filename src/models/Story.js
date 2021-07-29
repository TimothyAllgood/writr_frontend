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
				author {
					username
				}
			}
		}
	`;
}
