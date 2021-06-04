import React from 'react';
import { Button, Grid, Header } from 'semantic-ui-react';
import './HomeContent.css';
import Feed from './PostFeed';
import PostForm from '../components/PostForm';

// if user is new OR returnig user with no friends, RETURN feed only
// else RETURN feedAndFriends

const HomeContent = () => {
  // feed only
  return (
    <Grid celled='internally'>
      <Grid.Row className='no-section-header'>
        <Grid.Column floated='right' className='recent-activity' width={16}>
          <Header textAlign='center'>Recent Activity</Header>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row className='no-section-content'>
        <Grid.Column floated='right' className='home-feed' width={16}>
          <Button>
            <PostForm />
          </Button>

          <Feed />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
  // feed and friends
  return (
    <Grid celled='internally'>
      <Grid.Row className='section-header'>
        <Grid.Column floated='right' className='friend' width={3}>
          <Header textAlign='center'>friends</Header>
        </Grid.Column>

        <Grid.Column floated='right' className='recent-activity' width={13}>
          <Header textAlign='center'>Recent Activity</Header>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row className='section-content'>
        <Grid.Column floated='right' className='friend-list' width={3}>
          {/* friends list here */}
        </Grid.Column>

        <Grid.Column floated='right' className='home-feed' width={13}>
          {/* feed here */}
          <Feed />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default HomeContent;
