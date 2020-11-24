import React from 'react';
import { ListGroup } from 'reactstrap';
import PostListItem from '../post-list-item/post-list-item';
import './post-list.css'

const PostList = ({ posts, onDelate, onToggleImportant, onToggleLiked }) => {

	const elements = posts.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<li key={id} className='list-group-item'>
				<PostListItem
					{...itemProps}
					onDelate={() => onDelate(id)}
					onToggleImportant={() => onToggleImportant(id)}
					onToggleLiked={() => onToggleLiked(id)}
				/>
			</li>
		)
	})

	return (
		<ListGroup className='app-list'>
			{elements}
		</ListGroup>
	)
}

export default PostList;