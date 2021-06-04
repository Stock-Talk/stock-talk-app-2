import React from 'react';
import { Feed } from 'semantic-ui-react';
import PostCard from './PostCard';

//// TODO:
//    if my profile page return all my posts
//    else my home page return all posts

function PostFeed() {
  // this returns the feed structure with the card component based on whether the user is in home page or profile page

  // Card filter logic in card component

  return (
    <Feed align='center'>
      <Feed.Event>
        <Feed.Content>
          {/*  PostCard Component*/}
          <PostCard />
          <PostCard />
          <PostCard />
        </Feed.Content>
      </Feed.Event>
    </Feed>
  );
}

export default PostFeed;
