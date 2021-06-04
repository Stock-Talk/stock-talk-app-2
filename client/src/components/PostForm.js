import React from 'react';
import { Form, TextArea, Modal, Button } from 'semantic-ui-react';

// TODO
// This is the capture form that takes in the user input text to create a post. send user and post body to backend
// Text area value=''

function PostForm() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button className='post-btn' size='medium'>
          Create a Post!
        </Button>
      }
    >
      <Modal.Header>Create a Post</Modal.Header>
      <Modal.Content Form>
        <Form onSubmit='undefined'>
          <Form.Group>
            <TextArea
              placeholder='What do you want to share?'
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

export default PostForm;
