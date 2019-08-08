import React from 'react';
//import ReactDOM from 'react-dom';
//import ModalModalExample from './ModalModalExample.jsx';


import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ModalModalExample = () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='tiny' src='./images/gun.png' />
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
    this.state = {
    };
  }

  render() {
    /**<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /> */

    return (
      <div>

        <h1>Main_Test_ModalWind</h1>
        <hr />
        <ModalModalExample />
      </div>
    );
  }
}
