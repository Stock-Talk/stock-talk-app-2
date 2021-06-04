import React from 'react';
import { Form, TextArea, Modal, Button, Icon } from 'semantic-ui-react';

// TODO
// This is the capture form that takes in the user input text to create a COMMENT. send user and COMMENT body to backend
// Text area value=''

function CommentForm() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button className='comment-btn' primary>
          Comment
        </Button>
      }
    >
      <Modal.Header>Post a Comment</Modal.Header>
      <Modal.Content Form>
        <Form onSubmit='undefined'>
          <Form.Group>
            <TextArea
              placeholder='What do you think of this post?'
              name='postText'
              value=''
              onChange='undefined'
              style={{ minHeight: 100 }}
            />

            <Form.Button color='green' content='Submit' />
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='gray' onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default CommentForm;
