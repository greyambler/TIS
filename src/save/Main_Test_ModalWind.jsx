import React from 'react';
import _ from 'lodash'
//import ReactDOM from 'react-dom';
//import ModalModalExample from './ModalModalExample.jsx';

import { Button, Header, Image, Modal, Message, Input, Icon } from 'semantic-ui-react'

// trigger={<Button>Show Modal</Button>}

const ModalExampleScrollingContent = () => (

  <Modal trigger={<Button>Scrolling Content Modal</Button>}>
    <Modal.Header>Profile Picture</Modal.Header>
    <Modal.Content image scrolling>
      <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />

      <Modal.Description>
        <Header>Modal Header</Header>
        
        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>

        {_.times(8, i => (
          <Image key={i} src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
        ))}


      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button primary>
        Proceed <Icon name='chevron right' />
      </Button>
    </Modal.Actions>
  </Modal>
)



const Modal_Ex = () => (
  <Modal trigger={<Button>Show Modal</Button>}>

    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)


export default class Main_Test_ModalWind extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      {
        open: false
      };
  }
  handleRef = component => (this.ref = component);
  //open = () => this.setState({ open: true }, () => this.ref.focus());

  open = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <input type="button" onClick={this.open} value="T1_button" />
        <br />
        <div>
          <Button primary content='Open' onClick={this.open} />

          <Modal open={this.state.open} onClose={this.close}>
            <Modal.Content>
              <Input ref={this.handleRef} />
            </Modal.Content>
          </Modal>
          <hr />
          <ModalExampleScrollingContent/>
        </div>
      </div>
    );
  }
}




/*

<div>
        <Button primary content='Open' onClick={this.open} />


        <Modal open={this.state.open} onClose={this.close}>
            <Modal.Content>
              <Input ref={this.handleRef} />
            </Modal.Content>
          </Modal>

      </div>

          <Modal open={this.state.open} onClose={this.close}>
            <Modal.Content>
              <Input ref={this.handleRef} />
            </Modal.Content>
          </Modal>

          */