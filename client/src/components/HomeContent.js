import React from 'react';
import { Button, Grid, Header, Icon } from 'semantic-ui-react';
import Feed from './PostFeed';
import CreatePost from './PostForm';

// if user is new OR returning dsisplay most recent posts

const HomeContent = () => {
  return (
    <div>
      <Grid celled='internally' stackable>
        <Grid.Row className='no-section-header'>
          <Grid.Column floated='right' className='recent-activity' width={16}>
            <Header className='' textAlign='center'>
              Recent Activity
            </Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className='no-section-content'>
          <Grid.Column floated='right' className='home-feed' width={16}>
            {/* <Button size='small'> */}
            {/* PostForm component */}
            <CreatePost />
            {/* </Button> */}
            {/* Feed component */}
            <Feed />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default HomeContent;

// all posts feed + friends(if any)
// return (
//   <Grid celled='internally'>
//     <Grid.Row className='section-header'>
//       <Grid.Column floated='right' className='friend' width={3}>
//         <Header textAlign='center'>friends</Header>
//       </Grid.Column>

//       <Grid.Column floated='right' className='recent-activity' width={13}>
//         <Header textAlign='center'>Recent Activity</Header>
//       </Grid.Column>
//     </Grid.Row>

//     <Grid.Row className='section-content'>
//       <Grid.Column floated='right' className='friend-list' width={3}>
//         {/* friends list here */}
//       </Grid.Column>

//       <Grid.Column floated='right' className='home-feed' width={13}>
//         {/* feed here */}
//         <Feed />
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>
// );
