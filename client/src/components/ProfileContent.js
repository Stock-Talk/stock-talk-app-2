import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
// import './ProfileContent.css';
import Feed from './PostFeed';

// if user is new OR has not made posts, RETURN button
// else RETURN feed and button

const ProfileContent = () => {
  // button only
  return (
    <Grid celled='internally'>
      <Grid.Row className='no-section-header'>
        <Grid.Column floated='right' className='recent-activity' width={16}>
          <Header textAlign='center'>Recent Activity</Header>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row className='no-section-content'>
        <Grid.Column floated='right' className='home-feed' width={16}>
          {/* feed here */}
          <Feed />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
  // button and feed
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

export default ProfileContent;
