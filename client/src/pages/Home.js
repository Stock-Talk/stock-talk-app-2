import React from 'react';
import { Grid } from 'semantic-ui-react';
import PostFeed from '../components/PostFeed';
import Nav from '../components/Nav';

//////////// TODO:

//         need to display all user posts... see PostFeed.js Component

function Home() {
  // if user is logged in display this
  return (
    <div>
      <Nav />
      <Grid celled stackable centered>
        <h2>Recent Posts</h2>
        <Grid.Row>
          <Grid.Column className='left' width={3}>
            {/* import New feature here - comment out while i work on component
        <NewFeature /> */}
            New Feature Here
          </Grid.Column>

          <Grid.Column className='center-top' width={10}>
            {/* PostFeed for all users' posts */}
            <PostFeed />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className='bottom-left' width={2}>
            {/* import New feature here - comment out while i work on component
        <NewFeature /> */}
            New Feature
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Home;
