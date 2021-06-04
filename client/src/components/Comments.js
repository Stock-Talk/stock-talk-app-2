import React from 'react';
import { List, Modal, Button, Icon } from 'semantic-ui-react';

function DisplayComments() {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button className='comments-btn' primary>
          <Icon className='comments' />
        </Button>
      }
    >
      <Modal.Header>Post Comments</Modal.Header>
      <Modal.Content Form>
        {/* comments on post */}
        <List>
          <List.Item>This is a comment</List.Item>
          <List.Item>This is a comment</List.Item>
          <List.Item>This is a comment</List.Item>
          <List.Item>This is a comment</List.Item>
        </List>
      </Modal.Content>
      <Modal.Actions>
        <Button color='gray' onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default DisplayComments;
